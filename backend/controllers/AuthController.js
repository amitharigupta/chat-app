import prisma from "../DB/db.config.js";
import vine, { errors } from "@vinejs/vine";
import { loginSchema, registerSchema } from "../validations/authValidation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/mailer.js";
import logger from "../config/logger.js";

class AuthController {
  static async register(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);

      //   * Check if email exist
      const findUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (findUser) {
        return res.status(400).json({
          errors: {
            email: "Email already taken. please use another one.",
          },
        });
      }

      //   * Encrypt the password
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);
      payload.profile = "https://avatar.iran.liara.run/public/boy";

      const user = await prisma.users.create({
        data: payload,
      });
      return res.status(200).json({
        status: 200,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.log("The error is", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }

  static async login(req, res) {
    try {
      const body = req.body;
      const validator = vine.compile(loginSchema);
      const payload = await validator.validate(body);

      //   * Find user with email
      const findUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (findUser) {
        if (!bcrypt.compareSync(payload.password, findUser.password)) {
          return res.status(400).json({
            errors: {
              email: "Invalid Credentials.",
            },
          });
        }

        // * Issue token to user
        const payloadData = {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          profile: findUser.profile,
        };
        const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });

        return res.json({
          message: "Logged in",
          access_token: `Bearer ${token}`,
        });
      }

      return res.status(400).json({
        errors: {
          email: "No user found with this email.",
        },
      });
    } catch (error) {
      console.log("The error is", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        // console.log(error.messages);
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong.Please try again.",
        });
      }
    }
  }

  // * Send test email
  static async sendTestEmail(req, res) {
    try {
      const { email } = req.query;

      const payload = [
        {
          toEmail: email,
          subject: "Hey I am just testing",
          body: "<h1>Hello World , I am from Master backend series.</h1>",
        },
        {
          toEmail: email,
          subject: "You got an amazing",
          body: "<h1>Hello Tushar you got this amazing offer.</h1>",
        },
        {
          toEmail: email,
          subject: "Kadake ki pad rahi hai thand",
          body: "<h1>Please apne ghar par rahe .</h1>",
        },
      ];


      // await sendEmail(payload.toEmail, payload.subject, payload.body);
      // await sendEmail(payload.toEmail, "Second email", payload.body1);
      return res.json({ status: 200, message: "Job added successfully" });
    } catch (error) {
      logger.error({ type: "Email Error", body: error });
      return res
        .status(500)
        .json({ message: "Something went wrong.pls try agian later." });
    }
  }

  static async getUserByName(req, res) {
    try {
      let { name } = req.query;

      name = name.toLowerCase();
      console.log(name);
      let user = await prisma.users.findMany({
        where: {
          name: {
            contains: name, // Search for users whose name contains the query string
            mode: 'insensitive' // Case insensitive search
          }
        }
      });

      return res.status(200).json({ staus: 200, message: "User fetched By Name successfully", data: user });
    } catch (error) {
      logger.error({ type: "Email Error", body: error });
      return res
        .status(500)
        .json({ message: "Something went wrong.pls try agian later. getUserByName" });
    }
  }
}

export default AuthController;
