# Introduction to useContext Hook
The useContext hook is a React hook that allows functional components to consume values from the React context. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## About the project
In this project, I've developed a **user profile dashboard** application where user details are seamlessly accessed throughout the component tree. This is achieved by establishing a centralized data flow using **React's Context API**.

At the heart of the application lies the App component, which serves as the context provider. Within App, a context object is created to encapsulate user-related information. By leveraging the Provider component from the Context API, the user object is made available to all child components.

This architectural decision eliminates the need for prop drilling, allowing any component within the application to effortlessly access and utilize user details.

## Component Breakdown
- **App:** Orchestrates the rendering of the user profile and footer components, facilitating the seamless passing of user data throughout the application.
- **Profile:** Provides a complete overview of user information by using profile details and actions components together.
- **Profile Details:** Utilizes the **useContext** hook to retrieve avd display user information.
- **Footer:** The footer component is responsible for displaying the footer section of the website. It describes information such as copyright notices.

## Setup
### Prerequisites
- **Node.js**
- **npm (Node Package Manager)**

### Installation
1. Clone the repository:\
```git clone https://github.com/NashTech-Labs/react-useContext-hook.git```
2. Navigate into the project directory:\
```cd react-useContext-hook```
3. Install dependencies.\
```npm install```

### Running the project
```npm start```\
This command will start the development server and open the project in your default web browser.

### Running Tests
```npm test```\
This command will execute any test suites present in the project.
