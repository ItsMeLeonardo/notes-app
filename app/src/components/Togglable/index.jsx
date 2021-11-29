import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button, Spacer } from '@geist-ui/react'

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
      <Button onClick={toggleVisibility} style={hideWhenVisible} type="secondary">
        {buttonLabel}
      </Button>

      <div style={showWhenVisible}>
        {children}

        <Spacer />
        <Button onClick={toggleVisibility} type="error">
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
