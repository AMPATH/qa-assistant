import React from 'react'
import { render } from '@testing-library/react'
import Home from '../src/components/Home'
import { MemoryRouter as Router } from 'react-router-dom';
import fetch from "node-fetch";
import { describe, it} from 'vitest'


describe('Home', () => {
    it('renders the Home component', () => {
        render(
            <Router>
                <Home />
            </Router>
        )
    })
});