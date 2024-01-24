import express, { NextFunction, Request, Response } from "express";
import { addAction, getAccountActions } from "../Logic/bankLogic";

const bankRouter = express.Router();
  bankRouter.get(
    "/getByAccount/:account",
    async (request: Request, response: Response, next: NextFunction)=>{
        return response.status(200).json(await getAccountActions(+request.params.account));
    }
  )

  bankRouter.post("/addAction",
  async (request: Request, response: Response, next: NextFunction)=>{
    const newAction = request.body;
    const result = await addAction(newAction);
    return response.status(201).json(result);
  }
  )

export default bankRouter;