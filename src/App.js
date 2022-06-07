
import './App.css';
import { Fragment, useState } from 'react';
import Cards from './Cards'
import Filter from './Filter'
function App() {
  let data = [
    {
      id: 1,
      name: "Ahmed",
      age: 23,
      phone: "0123243543",
      job: "developer",
    },
    {
      id: 2,
      name: "Sayed",
      age: 25,
      phone: "01232435573",
      job: "developer",
    },
    {
      id: 3,
      name: "Medo",
      age: 23,
      phone: "0123975543",
      job: "sales",
    },
    {
      id: 4,
      name: "Aya",
      age: 22,
      phone: "0123243543",
      job: "accountant",
    },
    {
      id: 5,
      name: "Yaser",
      age: 28,
      phone: "012890243543",
      job: "developer",
    },
  ];
  let [items, setitems] = useState(data)
  let [show, setshow] = useState(true)
  const filternames = (name) => { 
    if(name.length!==0){
      return setitems(items => { return items.filter(item => { return item.name.includes(name) }) })
    }
    return setitems(data)
   }
  const removeitems = (idx) => { setitems(items => { return items.filter(item => { return item.id !== idx }) }) }
  return (
    <Fragment>
     <div className="App"> <Filter filternames={filternames} />
     <button type="button" style={{marginBottom:"20px"}} className="toggle_btn" onClick={() => { setshow(show => { return !show }) }}> Show or Hide Cards</button>
      {show && (<div className="cards"><Cards items={items} removeitems={removeitems} /></div>)}</div>
</Fragment>
  );

}
export default App;
