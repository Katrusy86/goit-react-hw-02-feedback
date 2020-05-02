import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Notice = styled.p`
font-size:1.5em;
font-weight:600;
color:red;`

export const Notification = ({message}) => (
    <>
    <Notice>{message}</Notice>
    </>
);

Notification.propTypes = {
    message:PropTypes.string
}