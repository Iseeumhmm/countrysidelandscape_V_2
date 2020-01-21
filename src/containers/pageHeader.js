
import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'

var ids = require('short-id')

// Styles


export default function Header() {
  return (
    <React.Fragment>
      <Link to="/">{'<'} Back</Link>
    </React.Fragment>
  )
}

