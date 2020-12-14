import React from 'react';

// const HippoBank = (props) => {   - 'old' way
const HippoBank = ({title}) => {
    return (
        // <h1>{props.title}</h1>   - 'old' way
        <h1>{title}</h1>
    )
}

export default HippoBank;