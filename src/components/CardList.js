import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    //without key, if some of those get deleted react won't know which one is which
    //and it needs to change the entire dom instead of just one card
    
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i} //key
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })} 
        </div>
    );

}

export default CardList;