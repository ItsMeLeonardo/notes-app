import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './index'

describe('<Togglable />', () => {
  let component
  const buttonLabel = 'show'
  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div>Hello test</div>
      </Togglable>,
    )
  })

  test('renders its children', () => {
    expect(component.container).toHaveTextContent('Hello')
  })

  test('the component have correct styles ', () => {
    const element = component.getByText('Hello test')
    expect(element.parentNode).toHaveStyle('display: none')
  })

  test('after clicked its children must be show', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const element = component.getByText('Hello test')
    expect(element.parentNode).not.toHaveStyle('display: none')
  })

  test('the togglable can be closed', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const element = component.getByText('Hello test')
    expect(element.parentNode).not.toHaveStyle('display: none')

    const buttonCancel = component.getByText('Cancel')
    fireEvent.click(buttonCancel)

    expect(element.parentNode).toHaveStyle('display: none')
  })
})
