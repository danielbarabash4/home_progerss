join 2 tables
===================

SELECT teams.* , meeting.* 
FROM teams JOIN meeting
ON teams.team = meeting.team