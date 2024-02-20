import React, { createContext } from "react";
import Profile from "./Profile";
import Footer from "./Footer";

// Creating a context for user data
const UserContext = createContext();

const App = () => {
  // Sample user data
  const user = {
    userid: '#183823',
    name: 'Sahil Babbar',
    address: 'New Delhi',
    email: 'sahilbabbar@gmail.com',
    dob: '02/10/1997'
  };

  return (
    // Providing the user data through the context provider
    <UserContext.Provider value={user}>
      <>
        <h1>User Profile</h1>
        <Profile />
        <Footer />
      </>
    </UserContext.Provider>
  );
};

export default App;
export { UserContext };
