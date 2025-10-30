import { Fragment } from "react/jsx-runtime";

function ListGroup(){
    //const => assignable just once
    //let=> assignable again and again
    let items = [
            'New York',
            'Sans Francisco',
            'Tokyo',
            'London',
            'Paris'
    ]; 
    
    items = [];

    if(items.length === 0)
        return (
        <>
            <h1>List</h1>
            <p>No item found</p>
        </>
        )
    return (
        //h1 and ul cannot be returned in diff fragments so they need to be fragmented or grouped together by using div or Fragment. Frament can be implemented by empty brackets or "Fragment"
        //Needs to be wrapped in {} because react doesnt allow normal expressions as it allows only JSX markup (for the items.wrap)
        <>
            <div>
                <Fragment>
                    <h1>List</h1>
                    <ul className="list-group">
                        {items.map(item => (
                            <li key={item}>{item}</li>
                        ))}    
                    </ul>
                </Fragment>
            </div>
        </>
    );
}

export default ListGroup;