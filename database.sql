CREATE TABLE todo (
	"id" SERIAL PRIMARY KEY, 
	"name" varchar(80)not null,
	"task" varchar(200)not null,
	"is-complete" boolean
	
);
INSERT INTO "todo" ("name", "task", "is-complete")
VALUES ('Chrixt', 'Clean Room', false);