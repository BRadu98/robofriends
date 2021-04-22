import React from 'react';

//by def all react comps have this children property
//useful to create components that wrap other components
const Scroll = (props) => {
    console.log(props)
    return (
        //first{} js expression, 2nd {} an js obj
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
    
};

export default Scroll;