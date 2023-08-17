import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/create" component={CreatePost} />
        <Route path="/edit/:id" component={EditPost} />
      </Switch>
    </Router>
  );
}

export default App;
