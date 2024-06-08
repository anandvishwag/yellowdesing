import bcrypt from 'bcryptjs';
import db from '../../models';
const User = db.User;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ where: { email } });
if (existingUser) {
    console.log('Email already in use');
  return res.status(400).json({ message: 'Email already in use' });
}
    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error creating user' });
  }
}
