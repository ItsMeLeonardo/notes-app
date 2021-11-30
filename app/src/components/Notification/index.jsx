import { Note, Spacer } from '@geist-ui/react'
import { AlertCircle } from '@geist-ui/react-icons'
import PropTypes from 'prop-types'

export default function Notification({ message, type }) {
  const styles = {
    type: type === 'error' ? 'error' : 'success',
    label: type === 'error' ? '😫 Ups!' : '🌟 Well!!',
    color: type === 'error' ? 'red' : 'green',
  }
  const containerStyle = {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  }
  return (
    <Note type={type} label={styles.label} width="20" height="2" style={containerStyle}>
      {message}
    </Note>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
