import React, {useState} from 'react';


// const HippoBank = (props) => {   - 'old' way
const HippoBank = ({title, info}) => {

    // useState(0) is the default value for total
    // setTotal is function to add behaviour for total
    const [total, setTotal] = useState(0);

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