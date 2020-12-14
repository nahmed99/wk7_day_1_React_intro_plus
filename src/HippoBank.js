import React, {useState} from 'react';


// const HippoBank = (props) => {   - 'old' way
const HippoBank = ({title, info}) => {

    // total: is a variable (or const) name
    // setTotal: is a function to add behaviour for total
    // useState(0): is a two-element array and also contains the default value for total
    const [total, setTotal] = useState(0);

    // Needs to be in an anonymous function so that it isn't 
    // automatically called (without it being referenced). As
    // we are not passing any arguments to this function, we can
    // call it below without any brackets...
    const deposit = () => {
        setTotal(total + 10);
    }

    return (

        //<>
        // <h1>{props.title}</h1>   - 'old' way
        // <p>{props.info}</p>   - 'old' way
        //</>
        <>
            <h1>{title}</h1>
            <p>{info}</p>
            <p>Total: £{total}</p>
            <button onClick={deposit}>Deposit</button>
        </>
    )
}

export default HippoBank;