###
(Template)
What should be including in your README file?

1. Your level of achievement, 
2. Project scope (one sentence version and a longer descriptive version), as well as
3. Milestone 1 (Ideation): 
    - include problem motivation, 
    - proposed core features / user stories, 
    - design and plan

4. Milestone 2 (Prototype): 
    - include core features developed, 
    - problems encountered

5. Milestone 3 (Extension): 
    - include bugs squashed, 
    - edge features developed, 
    - problems encountered, and
    - user testing


Draft:

Level of Achievement: Apollo11


Project Scope (one sentence version): Adopting the concept of Wordle and taking it to another level (Trivia Game + Resource Library)


Project Scope (longer descriptive version): 
Innovative game that adopts the concept of Wordle to entice students to revise on a consistent basis. 
Additional functionalities include:
- a resource library/question bank that helps to compile the entire semester's "NUdleS" to provide students with the convenience of having seamless access to study materials. 
- a leaderboard feature to further gamify the webapp and encourage friendly competition 
- motivational quote of the day (that changes every login) at the welcome page to motivate studentsduring the semester for better user experience
- tool for professors and teaching assistants to curate NUdleS for the modules that they are teaching for students to play based on the teaching objects for the day/week/lecture/tutorial/etc and also enables them to keep track of students' understanding of teaching content
- what sets us apart from a typical Wordle is that:
    -> words are not limited to just 5 letters
    -> explanation to the question will be provided at the end (explanation is provided by the professors/TAs when they create the NUdleS themselves)


Problem Motivation:
- Many students often procrastinate and leave revision till the very last minute, which usually results in a less than ideal performance during exams
- Many students also lack the time and resources to compile and make their own revision materials due to their hectic schedule and/or overwhelming workload
- Som
- Some students also find it mundane and difficult to motivate themselves to revise for exams


Proposed Core Feautres:
- Student Login Authentication, Admin Login Authentication, Forget Password & Change Password, Create Account
- Welcome Page with a daily motivational quote (fetched from an online open source API)
- Input Question Page which allow admin (professors/teaching assistants) to upload the question bank (which includes question, answer and explanation)
- Side-Bar navigation (drawer feature) that routes users to different features/pages of the webapp e.g. Module Search, Daily NUdleS, Resource Library, Leaderboard, Input Question
- The center NUdleS logo on the top navigation bar acts as a HomeButton routes users back to the WelcomePage
- Logout Button situated at the top right on the navigation bar logs the user out and routes him/her back to the homepage/login page

(Work-in-progress Features)
- Leaderboard feature allowing users to search the module of interest and display the top scorers
- Extended Welcome page that shows the user the modules that he/she has "favourite-d" based on the modules that he/she is taking during the semester
- User interface to play NUdleS with 
    - color-coded keyboard that greys out incorrectly guessed letters
    - color-coded grid/text to notify users regarding their attempt (Green - correct letter in correct position, Yellow - correct letter but in wrong position, Grey - wrong letter)
    - pop-up window that includes the question, answer, explanation to the daily NUdleS after user has attempted
- Resource Library for users to search and download the module materials/resources


Proposed User Stories: 
- As a student who finds revision boring and tiring, I want to have the element of fun while studying to make the process more enjoyable
- As a student with a small social circle, I have trouble obtaining module resources (past year practices, notes, etc) which my peers have access to
- As a student with a tightly packed schedule and many commitments outside of academics, it is difficult to set aside ample amount of time for revision each week, causing my workload to pile-up, it would be great if I could revise on the go
- As a professor/teaching assistant, I want my students to learn and be better engaged with the module resources
- As a professor/teaching assistant, I want to inject the element of fun into my students revision to make studying less mundane/boring


Proposed Design and Plan: 
Tech Stack --> ReactJS (JSXML), CSS, HTML, Firebase, ChakraUI, NodeJS
- wireframing, UI/UX design on Figma, incorporating colour theory, font matching, etc
- making use of 3rd party libraries such as ChakraUI/MaterialUI for frontend design, react-router-dom for routing between pages
- Using firebase as backend

###


