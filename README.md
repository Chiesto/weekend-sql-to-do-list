# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

INSTALLATION
1. Create a database named your database name,
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. open your editor and run 'npm install' in your terminal
4. run 'npm start' in your terminal to get the server running
5. open your browser to 'localhost: 5000' and the application will display

USAGE
1. Enter your name and the task you wish to add to the list then press 'Add Task'
2. your task will appear on the list below the input fields
3. If you wish to complete a task, press 'Mark Complete', and the task will be visually marked as complete and will go to the bottom of the list.
4. If you wish to delete a task from the list, press 'Delete', and the task will be removed from your list. 
5. Tasks will stay after the page is refreshed so feel free to leave and come back later if you want to add more tasks!

PROBLEMS
1. I was sending the data to and from the server using a different name than was on the table and it kept returning as undefined. 
2. Getting the list to appear centered in a white box in the middle of the page.

SOLUTIONS
1. I was sending the true/false value to the server through a key named 'isComplete'. It would add it to the database table but when I was getting the updated values back it would return as undefined. I just console logged the inputted value and the returned value to see where it went wrong. Turns out it was returning with the table's name for the value, 'is-complete'. I just created a new table with the column name of isComplete to match the expected value on my server. 
2. I had to do some research into the justify-content and align-items methods in CSS. Once I figured those out and understood how a CSS 'container' works, my table fit nicely in the center. 
