import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'

const Togglable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)
  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }))

  return (
    <div>
      <Button
        variant="info"
        type="button"
        onClick={toggleVisibility}
        style={hideWhenVisible}
      >
        {buttonLabel}
      </Button>

      <div style={showWhenVisible}>
        {children}

        <Button onClick={toggleVisibility} variant="danger" type="button">
          Cancel
        </Button>
      </div>
    </div>
  )
})

export default Togglable

Togglable.propTypes = {
  children: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}
