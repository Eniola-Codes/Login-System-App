# Login  application

A frontend validation and login system application that takes on email and password as inputs to log in a user and uses the useContext() hook to manage it's state

**End Result**

Click here :  https://login-system-eniola.netlify.app/z

# Description

**Details**

This is a frontend validation and login system application that takes on email and password as inputs to log in a user and uses the useContext() hook to manage it's state.

The form has a validation that automatically focuses on an input field once the user tries to submit the form with an invalid input, then proceeds to validate on every input click to teh form

![Form](https://github.com/Eniola-Codes/Login-System-App/blob/main/assets/login.png?raw=true)

It stores the user login state in the local storage of the web browser so the user stays logged in even though the page is reloaded or the user leaves and visits the page later

When user is logged in, they user can easily log out with the logout button and the state is set to log out using the useContext() hook

![Log out](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

**Technologies**

Technologies i used to build this are React.js and css

I used React.js framework to bootstrap this project because of the below functionalities : 

- Seperation of concerns (Having leaner files and components by breaking down the code into smaller parts)
- Using useContext hook to manage the state of the application
- Prop drilling to pass some data from component to component with ease.
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.

