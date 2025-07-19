import Message from "../db/Message";
import { MessageType } from "../db/Message";

export const addMessage = (payload: MessageType) => Message.create(payload);
export const getAllMessages = () => Message.find();
