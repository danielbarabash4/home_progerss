import express, { NextFunction, Request, Response } from "express";
import { addNewMeetings, getAllTeams, getMeetings } from "../Logic/teamLogic";
import { getSongById } from "../Logic/SongsLogic";

const teamRouter = express.Router();

teamRouter.get(
  "/getAll",
  async (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).json(await getAllTeams());
  }
);

teamRouter.get(
  "/getMeetingsById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).json(await getMeetings(+request.params.id));
  }
);

teamRouter.post("/addNewMeeting",
async (request: Request, response: Response, next: NextFunction)=>{
    console.log("in the router")
    const newMeeting = request.body;
    const result = await addNewMeetings(newMeeting);
    return response.status(201).json(`{${result}}`);
}
)

export default teamRouter;
