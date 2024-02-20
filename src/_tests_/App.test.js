import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App, { UserContext } from '../components/App';

test('renders App component with Profile and Footer', () => {
    // Mock context value
    const user = {
      userid: '#183822',
      name: 'joseph sharma',
      address:'New Delhi',
      email: 'josephsharma@gmail.com',
      dob:'02/12/1997'
    };
  
    render(
      <UserContext.Provider value={user}>
        <App />
      </UserContext.Provider>
    );
  
    // Assert that components are rendered
    expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/ProfileDetails/i)).toBeInTheDocument();
    expect(screen.getByText(/2024/i)).toBeInTheDocument();
});