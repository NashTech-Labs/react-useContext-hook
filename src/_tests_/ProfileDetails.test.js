import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../components/App';
import ProfileDetails from '../components/ProfileDetails';
import '@testing-library/jest-dom';

// Mock user context data
const mockUserContext = {
    userid: '123',
    name: 'John Doe',
    address: '123 Main St.',
    email: 'johndoe@example.com',
    dob: '1970-01-01',
};

// Test to render user details correctly
test('renders user details correctly', () => {
    render(
        <UserContext.Provider value={mockUserContext}>
            <ProfileDetails />
        </UserContext.Provider>
    );

    // Query for elements containing user details
    const id = screen.queryByText('id: 123');
    const address = screen.queryByText('Address: 123 Main St.');
    const email = screen.queryByText('email: johndoe@example.com');
    const dob = screen.queryByText('DOB: 1970-01-01');

    // Assert that each detail is rendered
    expect(id).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
});
