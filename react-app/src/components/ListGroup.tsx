import { Fragment } from "react/jsx-runtime";

function ListGroup(){
    return (
        //h1 and ul cannot be returned in diff fragments so they need to be fragmented or grouped together by using div or Fragment. Frament can be implemented by empty brackets or "Fragment"
        <>
            //<div>
                //<Fragment>
                    <h1>List</h1>
                    <ul className="list-group">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                //</Fragment>
            //</div>
        </>
    );
 }

export default ListGroup;