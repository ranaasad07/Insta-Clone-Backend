const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../Email_sending_file/sendEmail');
const { User } = require('../Database_Modal/modals');

const SignUp = async (req, res) => {
  const { username, fullName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const Otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    console.log("Generated OTP:", Otp);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      fullName,
      email,
      password: hashedPassword,
      Otp,
      isEmailVerified: false
    });

    await user.save();

    await sendEmail(email, 'Verify your email', `Your OTP is: ${Otp}`);

    res.status(201).json({ message: 'User created successfully. Please verify your email.' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const emailVerification = async (req, res) => {
  const { email ,otp} = req.body;
  console.log(email,otp);
  try {
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (findUser.Otp == otp) {
      findUser.isEmailVerified = true;
      findUser.Otp = '';
      await findUser.save();
      res.status(200).json({ message: "Email verified successfully" });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (err) {
    console.error('Error verifying email:', err);
    res.status(500).json({ message: 'Server error' });
  }
}


const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const payload = {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { SignUp, Login,emailVerification };
