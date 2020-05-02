import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h2`
 font-size:2em;
 text-transform:uppercase;
 color: green;`

 const Text = styled.p`
 font-size:1.5em;
 font-weight:600;
`

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
<> 
<Title>Statistics</Title>
    <Text>Good:{good}</Text>
    <Text>Neutal:{neutral}</Text>
    <Text>Bad:{bad}</Text>
    <Text>Total:{total}</Text>
    <Text>Textositive Feedback {positivePercentage} %</Text>  
</>
);

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired
}