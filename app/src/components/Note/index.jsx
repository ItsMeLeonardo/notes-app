import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import PropTypes from 'prop-types'

function NoteItem({ id, content, important, toggleImportant }) {
  const [importantState, setImportantState] = useState(important)

  const handleImportantToggle = () => {
    toggleImportant(id)
    setImportantState(!importantState)
  }
  const badgeStyle = {
    content: importantState ? 'Important' : 'Not Important',
    variant: importantState ? 'primary' : 'secondary',
  }
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center" as="li">
      <div className="d-flex gap-2 align-items-start">
        <p>{content}</p>
        <Badge bg={badgeStyle.variant} className="text-small">
          {badgeStyle.content}
        </Badge>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <Button variant="outline-info" type="button" onClick={handleImportantToggle}>
          toggle importance
        </Button>
        <Link to={`/note/${id}`}>See detail</Link>
      </div>
    </ListGroup.Item>
  )
}

export default React.memo(
  NoteItem,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
)

NoteItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  toggleImportant: PropTypes.func.isRequired,
}
