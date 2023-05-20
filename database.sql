CREATE TABLE todo (
	"id" SERIAL PRIMARY KEY, 
	"name" varchar(80)not null,
	"task" varchar(200)not null,
	"isComplete" boolean
	
);
INSERT INTO "todo" ("name", "task", "isComplete")
VALUES ('Chrixt', 'Clean Room', false);