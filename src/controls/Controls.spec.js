import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../dashboard/Dashboard.js';
import 'jest-dom/extend-expect';
import { render, fireEvent } from 'react-testing-library';

describe('buttons', () => {
    describe('open/close', () => {
        it('closes gate', () => { 
            const { getByText } = render(<Dashboard />);
            
            const closeButton = getByText(/close gate/i);
            fireEvent.click(closeButton);

            getByText("Closed");
        })

        it('opens gate', () => {
            const { getByText } = render(<Dashboard />);

            const closeButton = getByText(/close gate/i);
            fireEvent.click(closeButton);
            getByText("Closed");

            const openButton = getByText(/open gate/i);
            fireEvent.click(openButton);
            getByText("Open");
        })
    })
})
