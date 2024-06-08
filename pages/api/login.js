import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../models';
const User = db.User;

const JWT_SECRET = '57bff1fc3b85b0936051d1f592f9a137118b513704d3bc04ac46b481772a1d33';

export default async function handler(req, res) {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(200).json({ status:false, message:'Invalid email or password' });
      // return res.status(401).json({ error: 'Invalid email or password' });
    }


    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(200).json({ status:false, message:'Invalid email or password' });
     // return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    // res.setHeader('Set-Cookie', `token=${token}; Path=/`);

    res.status(200).json({ status:true, token:token, role:user.role });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
}
