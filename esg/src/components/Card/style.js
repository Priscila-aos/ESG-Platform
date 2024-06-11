import React from 'react'
import styled from 'styled-components'

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  max-width: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardHeader = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`

export const CardSubHeader = styled.h3`
  margin: 8px 0;
  font-size: 1.2em;
  color: #777;
`

export const CardBody = styled.p`
  margin: 8px 0;
  color: #555;
`