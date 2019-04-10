import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard.js';
import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

describe('Renders', () => {
    describe('Dashboard', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Dashboard />, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it('renders successfully', () => {
            render(<Dashboard />);
        });
    });
    describe('Display', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Display />, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it('renders successfully', () => {
            render(<Display />);
        });
    });
    describe('Controls', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Controls />, div);
            ReactDOM.unmountComponentAtNode(div);
        });

        it('renders successfully', () => {
            render(<Controls />);
        });
    });
});
