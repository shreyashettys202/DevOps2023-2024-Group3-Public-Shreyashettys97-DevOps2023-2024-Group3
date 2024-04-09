# ProjTemplate DevOps2023_2024
MScDevOps Assign - Group 3

Project Name : Wednesdays Wicked Adventure

# Table of Contents
    Preamble
    Scrum Masters
    Product Owner
    Team Members
    Project Deadline
    Project Specification
    Useful Links
    More Information
    Risk Register
    Tenants of Design
    Social Contract
    Meetings
    Communication
    Other
    Branching Strategy
    Estimating Story Points
    Definition of Ready
    Definition of Done
    Preamble
    This is the online repository for the DevOps Assignment.

Each team should fill in the blanks <<>> and add additional content that the team agrees on. This is your contract of work. It is an agreement amongst yourselves. Honour it.

<>
Our product will be delivered using an Agile methodology that embraces the DevOps culture. Please note that our culture embraces change and these documents are treated as living, breathing artefacts that will be continuously updated.

# Scrum Master
<<list week number, student name>>
Week 1,  Jolly Kannampuzha
Week 2,  Jolly Kannampuzha
Week 3, 
Week 4, 
Week 5,  Abhishek Sharma
Week 6,  Abhishek Sharma
Week 7,  Shreya Shantharama Shetty
Week 8,  Shreya Shantharama Shetty
Week 9,  Pavan Kalyan Varikolu
Week 10, Pavan Kalyan Varikolu
Week 11, Riya Devikar
Week 12, Riya Devikar
Week 13, Nayana Purohit Nagaraj
Week 14, Nayana Purohit Nagaraj
Week 15, Nayana Purohit Nagaraj
Week 16, Nayana Purohit Nagaraj
Rotating scrum master so that everyone gets to experience the role once.

# Product Owner
<<list week number, student name>>
Week 1,  Nayana Purohit Nagaraj
Week 2,  Nayana Purohit Nagaraj
Week 3,  
Week 4,  
Week 5,  Pavan Kalyan Varikolu
Week 6,  Pavan Kalyan Varikolu
Week 7,  Riya Devikar
Week 8,  Riya Devikar
Week 9,  Jolly Kannampuzha
Week 10, Jolly Kannampuzha
Week 11, Abhishek Sharma
Week 12, Abhishek Sharma
Week 13, Shreya Shantharama Shetty
Week 14, Shreya Shantharama Shetty
Week 15, Shreya Shantharama Shetty
Week 16, Shreya Shantharama Shetty
Rotating product owner so that everyone gets to experience the role once.

# Team Members
Abhishek Sharma
Jolly Kannampuzha
Nayana Purohit Nagaraj
PAVAN KALYAN VARIKOLU
Riya Devikar
Shreya Shantharama Shetty

# Project Deadline
Thursday 4th April at midnight

# Project Specification
Clean and simple design
User access levels (client, administrator)
Includes at least one self developed api and one webservice
To be run over : Cloud Platform (AWS, Kubernetes)

# Frameworks
Database : MongoDB
Database persistence technology
Define the buisness Requirements: 
Our application is simple scale with limited features , we used Mern stack to implemnet Monolithic application.
User Authentication
Admin Authentication
Admin have Special rights to modify and delete the user data.
Booking Confirmation
User booking details
we have used JWT token authentication .
This application will support different devices liek tablet, mobile , desktop.
Named queries and database triggers for security : We have used NOSQL database , dynamic schema is supported and its stores data in JSON format.
Regex for cleansing and validation of data before sending to the database. 

# Useful Links
 - Project Slack: https://atudevops.slack.com
 - GitHub: https://github.com/shreyashettys202/DevOps2023-2024-Group3

# More Information
Confluence : https://wednesday-wicked-adventures.atlassian.net/wiki/spaces/Wednesdays1/overview
JIRA : https://wednesday-wicked-adventures.atlassian.net/jira/software/projects/DGW/boards/1/timeline

# Risk Register
These are the current Risks on the project, re-aligned on a weekly basis
- Initially as team we have done good brainstormin on choosing tools and technologie sto develop thsi web application. No risks observed throughout this project from infrastructure and softwrae perspective.
- On othe some technical issues  we faced where handled in user stories.

# Tenants of Design
Update the below to add what the group is using <<>>
- Dedication to clean, secure, performant and self documented code
  - code Frameworks used Node JS , React JS , Express JS
  - programming using the IDE  Visuak studio code
  - code coverage tool used Sonarqube , SonarCloud
  - Secure code: Snyk , Sonar Cloud, Owsap zap
  - performance testing tool to be used : JMeter
  - Performance monitoring tool: Prometheus, Grafana, New Relic
- Documentation  : JSDoc , Swagger Api documentation
- code commenting  : Github , Git
- Datastore for persistance : kubernetes peristence volume
 
# Security:
uses static/ dynamic analysis to find bugs in code. 
- SAST : Sonarcloud, Snyk
- DAST : OWSAP ZAP

# Testing:
- Unit testing : JEST
- integretation testing / UI Tsting : Selenium
    
# Environments:
- staging : Github
- Production : EC2
- tight configuration management for consistency and reproducibility : Github actions
- automated creation and deployments : Github Actions Pipeline)
- integrated and automated pipeline (commit -> test -> deploy)
  commit - > Git/ Github
  test -> JEST , Selenium
  deploy -> Github Actions -> sonarqube, sonarcloud, snyk,Automated doc, Docker Build , IaC Build , deploy to AWS , Owsap zap, JMeter, New RElic, Prometheus

# Github version control:
- branches used  main , develop , feature branches
- version/release management : dev / staging/production

# Agile project management methods/principles (jira)

# Social Contract
    Mobile phones be left on silent during sprint sessions and class time.
    Be on time for team meetings and class, if you are running late let the group know by sending a message into the Slack channel.
    Everyone has an equal voice and valuable contribution.
    When you are assigned a job, take ownership of it and keep it up to date, do not be afraid to ask others for help, 
    always be honest about your work.
    Do not speak over someone when they are expressing a point, everyone has an equal voice.
    No blame culture.
    Do not be afraid to ask for help, we are all learning.
    No invisble work.
    Ask questions to make sure you understand the task given to you.
    Try have some fun, team work makes the dream work.
    Use Agile methodoligies in the project at all times.

# Meetings
    Stand-ups will occur on Every Monday & Wednsday during class. Two per week.
    The order that people give their updates will be Developer will go first and then QA.
    Updates will be in the form: What I've done, Impediments, What I plan to do.
    Sprint planning will occur at Monday ( 9.30 - 11.30 AM) (sometimes depends on team) every week.
    Please add and update items within JIRA a prior to the sprint planning session.
    Sprint retro will at the end of our sprint on Monday ( Time will be depend on team availibility) (timebox retro for 30 minutes, to be organised by the scrum master).
    Points raised in the sprint retro will be noted and posted on the Jira by the Scrum Master. The Scrum Master is rotated per team member every week.
    Backlog refinement will happen on MOnday Before Sprint planning during our sprint.
    Task estimation will be done using Planning Poker. 
    Come prepared to meetings.
    Be on time for Stand Ups and meetings.
    Mobile phones on silent.
    Everyone has equal voice and valuable contribution.
    Keep your language and tone professional at all times.
    Be honest.

# Communication
    Slack is the preferred method of communication.
    If a demonstration is required use Loom, record the session and upload to the Slack channel.
    No Slack communications between <<time and time>>.
    Raise a problem as soon as you see it.
    Respect each other and understand differences in knowledge.
    All team documents are to be created using Markdown language and shared on GitHub.
    There are no silly questions, if you don’t understand, ask.
    Share success stories.
    Focus on the positives.
    Don’t make assumptions.
    Don’t interrupt and cut another person off while they are talking.
    Listen when someone is talking, don’t interject.
    Zero tolerance for bullying.

# Agile way of working.
    If you are assigned a job, take ownership of it and keep it up to date.
    Stick to your agreed working patterns. Let the team know when you are late or going early.
    Keep JIRA board updated at all times.
    Update the Scrum Board as you progress the story i.e. don’t update at standup.
    Don't be afraid to ask for help.
    Don't be afraid to give constructive criticism, as long as it is constructive.
    Solve roadblocks within the team. If the impediment can’t be solved within the team then give it to the Scrum Master.
    Sprints will start <<>>
    The Scrum Master role rotates each week 
    Each member of the team will work approximately <<hours>> hours per week, unless they are on vacation.
    Our branching stategy will start with <<>>

# Estimating Story Points
The teams team's velocity is calculated in Sprint Planning.
story estimation : Iteration planning

The teams current story point velocity is "N/A". <<Update the velocity as the weeks progress>>
Sprint1 : 18
Sprint 2: holidays
Sprint 3: 29
Sprint 4: 32
Sprint 5: 26
Sprint 6: 29
Sprint 7: 29
Sprint 8: 21

# Definition of Ready/Done

Planned For sprint : stories which are estimated and planne dfor sprint
In Development : Story in progress
In Review : story is ready for review
Ready for QA Testing : dev story is ready fro testing
QA Test in Progress : Story is under qa testing
Ready for Prod : story is readyfor production handover
Done : Story has been completed

