import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
 font-size:1em;
 font-weight:600;
 padding:10px 20px;
 margin-right:10px;
 background-color:lightgray`

export const FeedbackOptions = ({optionGoodBtn,optionNeutralBtn,optionBadBtn}) => (
<>    
        <Btn onClick = {optionGoodBtn}>Good</Btn>
        <Btn onClick = {optionNeutralBtn}>Neutal</Btn>
        <Btn onClick = {optionBadBtn}>Bad</Btn>
</>
);
