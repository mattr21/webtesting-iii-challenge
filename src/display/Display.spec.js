import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../display/Display.js';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

describe('default settings', () => {
    it('is unlocked and open', () => {
        const { getByText } = render(<Display />);
        getByText(/unlocked/i);
        getByText(/open/i);
    })
});
