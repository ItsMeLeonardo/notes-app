import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid, Card, Text, Spacer, Button, Toggle, Tooltip, Tag } from '@geist-ui/react'

function NoteItem({ id, content, important, toggleImportant, isAuth }) {
  const [importantState, setImportantState] = useState(important)

  const style = { display: 'flex', justifyContent: 'start', alignItems: 'center' }

  const handleImportantToggle = (event) => {
    toggleImportant(id)
    setImportantState(event.target.checked)
  }

  const getToolTipText = () => {
    if (!isAuth) return 'SignUp for change this note'
    if (importantState) return 'Mark as not important'

    return 'Make important'
  }
  const tooltipText = getToolTipText()

  return (
    <Grid style={style} xs={24} sm={12} md={8} lg={6}>
      <Card height="140px" width="100%" shadow>
        <Text small>
          {importantState && (
            <Tag type="error" scale={0.25} style={{ marginRight: '.5rem' }}>
              Important
            </Tag>
          )}
          {content}
        </Text>
        <Spacer h={0.15} />

        <Tooltip text={tooltipText} type={isAuth ? 'default' : 'error'}>
          <Toggle
            initialChecked={importantState}
            onChange={handleImportantToggle}
            disabled={!isAuth}
          />
        </Tooltip>
        <Spacer h={0.25} />
        <Button type="abort">
          <Link to={`/note/${id}`}>Details</Link>
        </Button>
      </Card>
    </Grid>
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
  isAuth: PropTypes.bool.isRequired,
}
