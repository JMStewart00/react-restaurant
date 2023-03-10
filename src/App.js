import { useState, useEffect } from 'react';
import { Container, Row, Stack } from 'react-bootstrap';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import TabLink from './components/TabLink';
import Collection from './components/Collection';
import Layout from './components/Layout';

const URL = 'https://www.jsonkeeper.com/b/MDXW';

function App() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('Breakfast');

  const fetchData = async () => {
    let response = await axios.get(URL);
    setItems(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  let tabs = ['Breakfast', 'Lunch', 'Dinner', 'Appetizer', 'Drink'];
  let buttons = tabs.map(item => {
    return (
      <TabLink
        key={item}
        setActiveTab={setActiveTab}
        tabName={item}
        activeTab={activeTab}
      />
    )
  })

  let collections = tabs.map(item => {
    if (activeTab === item) {
      return <Collection key={item} items={items} filter={item} />
    }
    return null
  })


  return (
    <Layout>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center my-3"
      >
        {buttons}
      </Stack>
      <Container style={{minHeight: '50vh'}}>
        <Row className="justify-content-center">
          {collections}
        </Row>
      </Container>
    </Layout>
  );
}

export default App;
