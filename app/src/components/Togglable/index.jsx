import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

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
      <button type="button" onClick={toggleVisibility} style={hideWhenVisible}>
        {buttonLabel}
      </button>

      <div style={showWhenVisible}>
        {children}

        <button type="button" onClick={toggleVisibility}>
          Cancel
        </button>
      </div>
    </div>
  )
})

export default Togglable

Togglable.propTypes = {
  children: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}
