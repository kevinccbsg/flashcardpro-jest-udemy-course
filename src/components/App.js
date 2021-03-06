import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

const App = () => (
  <div>
    <h2>Flashcard Pro</h2>
    <StackList />
    <hr />
    <Link to="/stackform"><h4>Create a new stack</h4></Link>
  </div>
);

export default App;
