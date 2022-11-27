import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageModal from './pages/pageModal';
import Layout from './components/layout'
import Home from './pages/home'
import SearchFilter from './pages/searchFilter'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path = '/page-modal' component= {PageModal } />
          <Route exact path='/' component={Home} />
          <Route exact path='/search-filter' component={SearchFilter} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
