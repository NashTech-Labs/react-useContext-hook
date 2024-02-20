import React from 'react';
import { render,screen } from '@testing-library/react';
import ProfileActions from '../components/ProfileActions';
import '@testing-library/jest-dom';

// Test to render Profile Actions component with buttons
test('renders Profile Actions component with buttons', () => {
    render(<ProfileActions />);
  
    const editProfileButton = screen.getByRole('button', { name: /edit profile/i });
    const changePasswordButton = screen.getByRole('button', { name: /change password/i });
  
    expect(editProfileButton).toBeInTheDocument();
    expect(changePasswordButton).toBeInTheDocument();
  });