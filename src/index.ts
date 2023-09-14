import express from "express";
import { AppDataSource } from "./data-source";
import userRouter from "./routes/usersRouter";
import authRouter from "./routes/authRouter";

const app = express();
app.use(express.json());
app.use('/',userRouter);
app.use('/auth',authRouter);

AppDataSource.initialize().then(() => {
  console.log("dbConnection done ..............");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
