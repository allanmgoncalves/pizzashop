import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
        ),
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})
