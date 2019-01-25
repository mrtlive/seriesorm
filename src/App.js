import React from 'react'
import styled from 'styled-components'
import Search from './containers/Search'

const Title = styled.h1`
color:#fff;
text-align:center;

`;


const App = () => (
  <Div>
  <Title>Seriesorm Web App</Title>
    <Search />
  </Div>
)

const Div = styled.div`
  padding: 2rem;
`
export default App
