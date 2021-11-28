import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'

export default function Notification({ message, variant = 'warning' } = {}) {
  return <Alert variant={variant}>{message}</Alert>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
