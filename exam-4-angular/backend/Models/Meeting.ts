class Meeting {
  public id: number;
  public team: string;
  public begins: string;
  public finish: string;
  public description: string;
  public room: string;

  constructor(
    id: number,
    team: string,
    begins: string,
    finish: string,
    description: string,
    room: string
  ) {
    this.id = id;
    this.team = team;
    this.begins = begins;
    this.finish = finish;
    this.description = description;
    this.room = room;
  }
}

export default Meeting;