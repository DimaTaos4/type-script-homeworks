import { Router } from "express";

import { addMessageController,getAllMessagesController } from "../controllers/message.controller";

const messageRouter = Router();

messageRouter.get("/", getAllMessagesController)

messageRouter.post("/", addMessageController);

export default messageRouter