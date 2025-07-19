import { model, Schema, Document } from "mongoose";

export interface MessageType extends Document {
  message: string;
}

const messageSchema = new Schema<MessageType>(
  {
    message: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Message = model<MessageType>("Message", messageSchema);
export default Message;
