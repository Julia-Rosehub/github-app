import React from 'react';
import './App.css';
import { Github } from './components/Github/Github';

function App() {
  return (
		<div>
			<nav className="navbar navbar-light bg-light">
         <a className="navbar-brand">Working with Github API</a>
      </nav>
        <Github />
		</div>
  )
}

export default App
