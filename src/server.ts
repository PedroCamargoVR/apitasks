import "reflect-metadata";
import cors from 'cors';
import express from "express";
import 'express-async-errors';
import mainRouter from "./router";
import { AppDataSource } from "./infra/data/data-source";
import { httpErros } from "./infra/middlewares/http-error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
.then(() => {
    console.log('DB initialized!');
})
.catch((error) => console.log(error));

app.use(mainRouter);

app.use(httpErros);

app.listen("3000", () => {
  console.log(`Application started on port 3000`);
});
