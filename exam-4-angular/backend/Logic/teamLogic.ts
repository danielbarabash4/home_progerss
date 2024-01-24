import Meeting from "../Models/Meeting";
import dal_mysql from "../Utils/dal_mysql";

const getAllTeams = async () => {
  const SQLcmd = `SELECT teams.* , meeting.* 
  FROM teams JOIN meeting
  ON teams.team = meeting.team`;
  return await dal_mysql.execute(SQLcmd);
};

const getMeetings = async (id: number) => {
  const SQLcmd = `
        SELECT teams.* , meeting.* 
        FROM teams JOIN meeting
        ON teams.team = meeting.team
        WHERE teams.id =${id}`;
  return await dal_mysql.execute(SQLcmd);
};

const addNewMeetings = async (newMeeting: Meeting) => {
  const SQLcmd = `INSERT INTO meeting 
    (team, begins, finish, description, room)
    VALUES
    ('${newMeeting.team}','${newMeeting.begins}','${newMeeting.finish}','${newMeeting.description}','${newMeeting.room}')
  `;
  console.log("check");
  return await dal_mysql.execute(SQLcmd);
};
export { getAllTeams, getMeetings, addNewMeetings };
