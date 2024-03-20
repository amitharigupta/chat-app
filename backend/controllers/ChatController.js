import prisma from "../DB/db.config.js";
import path from "path";
import _ from "lodash";

import { ALERT, PREFETCH_CHATS } from "../constants/event.js";
import { emitEvent } from "../utils/util.js";

class ChatController {
  static async index(req, res) { }

  static async store() { }

  static async show() { }

  static async update(req, res) { }

  static async destroy() { }

  static async newGroupChat(req, res, next) {
    try {
      const { name, members } = req.body;

      if (members.length < 2) {
        return res.status(400).json({ message: "Group chat must have at least 3 members", status: 400 });
      }
      let allMembers = [...members, req.user.id];
      let membersArr = [];
      allMembers = _.uniq(allMembers);
      allMembers.map(i => membersArr.push({ id: i }))
      console.log('all members :', _.uniq(membersArr));
      const dataToBeCreated = {
        name,
        group_chat: true,
        creator: {
          connect: {
            id: req.user.id
          }
        },
        members: { connect: membersArr[0] }
      }

      // console.log('dataToBeCreated : ', JSON.stringify(dataToBeCreated));
      await prisma.chats.create({ data: dataToBeCreated });

      // emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
      // emitEvent(req, PREFETCH_CHATS, members);


      return res.status(201).json({
        success: true,
        message: "Group chat created successfully",
      });

    } catch (error) {
      console.log("The error is newGroupChat", error);
      return res
        .status(500)
        .json({ message: "Something went wrong.please try again! newGroupChat" });
    }
  }

  /**
 * Get all chats where the user is a member
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Express middleware function
 * @returns {Object} JSON API response
 */
  static async getMyChats(req, res, next) {
    try {
      const chats = await prisma.chats.findMany({ where: { members: { id: req.user.id } } });

      return res.status(200).json({ status: 200, message: chats });
    } catch (error) {
      console.log("The error is getMyChats", error);
      return res
        .status(500)
        .json({ message: "Something went wrong.please try again! getMyChats" });
    }
  }
}

export default ChatController;
