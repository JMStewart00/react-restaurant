import { useState, useEffect } from 'react';
import axios from "axios";
import TabLink from './components/TabLink';
import Collection from './components/Collection';

const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json'

function App() {
  const [ items, setItems ] = useState([]);
  const [ activeTab, setActiveTab ] = useState('Appetizer');

  const fetchData = async () => {
    let response = await axios.get(URL);
    setItems(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  let tabs = ['Appetizer', 'Sandwiches', 'Pasta', 'Burgers'];
  let buttons = tabs.map(item => {
    return <TabLink key={item} setActiveTab={setActiveTab} tabName={item}/>
  })

  let collections = tabs.map(item => {
    if (activeTab === item) {
      return <Collection key={item} items={items} filter={item}/>
    }
    return null
  })

  console.log(collections)

  return (
    <div className="">
      {buttons}
      {collections}
    </div>
  );
}

export default App;
