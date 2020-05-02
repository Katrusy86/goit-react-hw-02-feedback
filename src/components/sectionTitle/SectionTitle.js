import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
font-family:sans-serif;
font-weight:600;
font-size:2em;
text-transform:uppercase;
`

export const SectionTitle = ({title,children}) => (
    <>
        <Header>{title}</Header>
        {children}
    </>
);
