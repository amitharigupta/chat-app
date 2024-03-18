import bcrypt from 'bcryptjs';
const saltRounds = 10;
import jwt from "jsonwebtoken";


export const encryptPassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hashSync(password, saltRounds);
    return hashPassword;
  } catch (error) {
    console.log(`Error while encrypting password... ${error}`);
  }
}

export const compareHashPassword = async (password, hashedPassword) => {
  try {
    let isValidPassword = await bcrypt.compareSync(password, hashedPassword);

    return isValidPassword;
  } catch (error) {
    console.log(`Error while comparing password... ${error}`);
  }
}

export const generateAuthToken = async (payload) => {
  try {
    let token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
  } catch (error) {
    console.log(`Error while generating token... ${error}`);
  }
}

export const compareValidToken = async (token) => {
  try {
    let isValidToken = await jwt.verify(token, process.env.JWT_SECRET);

    return isValidToken;
  } catch (error) {
    console.log(`Error while validating token ${error}`);
  }
}


export const emitEvent = async (req, event, users, data) => {
  try {
    console.log("Emitting event", event);
  } catch (error) {
    console.log(`Error while validating token ${error}`);
  }
}
