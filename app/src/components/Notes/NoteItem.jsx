import React from 'react'
import PropTypes from 'prop-types'

function NoteItem({ content }) {
  return <li>{content}</li>
}

export default React.memo(
  NoteItem,
  (prevProps, nextProps) => prevProps.content === nextProps.content,
)

NoteItem.propTypes = {
  content: PropTypes.string.isRequired,
}
