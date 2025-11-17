import Alert from "./components/Alert"

//import ListGroup from "./components/ListGroup";

/*function App(){
  const items = [
            'New York',
            'Sans Francisco',
            'Tokyo',
            'London',
            'Paris'
    ]; 

    const handleSelectItem = (item: string) => {
      console.log(item);
    }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
}*/

function App(){
  //return (<div><Alert>Hello World</Alert></div>);
  return (<div><Alert children="Hello World" /></div>);
}

export default App;