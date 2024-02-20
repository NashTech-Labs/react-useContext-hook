import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

// Test for Footer component rendering copyright text
test('renders Footer component with copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 Profile Dashboard. All rights reserved./i);
    
    // Assert that components are rendered
    expect(copyrightText).toBeInTheDocument();
});