// Dependecies
import React from 'react';
// Containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// Components
import Layout from './components/Layout/Layout';

function App() {
  console.log(`[App]`);

  return console.log(`[App]:return`) || (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
