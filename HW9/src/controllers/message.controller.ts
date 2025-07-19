import { Response, Request, NextFunction } from "express";

import * as messageService from "../services/message.service";

export const addMessageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.addMessage(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllMessagesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.getAllMessages();
    res.json(result);
  } catch (error) {}
};
