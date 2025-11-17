//import { Fragment } from "react/jsx-runtime";
//import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

//{items: [], heading: string}
interface ListGroupProps{
    items: string[];
    heading: string;

    //(item:string) =>void
    onSelectItem: (item:string) =>void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps){
    //const => assignable just once
    //let=> assignable again and again

    //-1=no item initially selected
    //0=first item initially selected

    // Hook - Using builtin functions of react
    const [selectedIndex, setSelectedIndex] = useState(-1);

    
    //items = [];
    //h1 and ul cannot be returned in diff fragments so they need to be fragmented or grouped together by using div or Fragment. Frament can be implemented by empty brackets or "Fragment"
    //Needs to be wrapped in {} because react doesnt allow normal expressions as it allows only JSX markup (for the items.wrap)
    //the && condition is being used to make it look simpler as if ternary condition was used, it would be complex 
    //it works in such a way that second part is always true and first part is true only when length is 0 
    //so if length=0, no items found displayed else items    

        return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        className={ selectedIndex === index ? 'list-group-item active':'list-group-item'} 
                        key={item} 
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item)
                        }}
                    >
                        {item}
                    </li>
                ))}    
            </ul>
        </>
        )
}

export default ListGroup;