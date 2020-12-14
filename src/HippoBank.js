import React from 'react';

// const HippoBank = (props) => {   - 'old' way
const HippoBank = ({title, info}) => {
    return (

        //<>
        // <h1>{props.title}</h1>   - 'old' way
        // <p>{props.info}</p>   - 'old' way
        //</>
        <>
            <h1>{title}</h1>
            <p>{info}</p>
        </>
    )
}

export default HippoBank;