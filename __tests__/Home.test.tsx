import React from 'react'
import { render } from '@testing-library/react'
import Home from '../src/components/Home'
import { describe, it} from 'vitest'


describe('Home', () => {
    it('renders the Home component', () => {
        render(<Home />)
    })
});