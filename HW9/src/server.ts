import express from "express";
import cors from "cors";

import messageRouter from "./routers/message.router";

const {PORT} = process.env;

const startServer = (): void => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/api/messages", messageRouter);

  app.listen(PORT, (): void => {
    console.log(`Server running on ${PORT} port`);
  });
};
export default startServer;
