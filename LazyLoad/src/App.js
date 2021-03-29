import React from 'react';
import { useQuery } from 'react-query';
import Amount from './components/Amount';
import { useDispatch } from 'react-redux';
import Title from './components/Title';
import "./main.css";
import {
  add
} from './store/moduleSlice';
import Modules from './components/Modules';
import ActiveModules from './components/ActiveModules';

const fetchModules = async () => {
  const response = await fetch('config.json')
  const json = await response.json()
  return json
}

function App() {
  const {data, status} = useQuery('modules', fetchModules)
  const dispatch = useDispatch()

  if(status === 'loading') {
    return <div className="App flow">Loading modules</div>
  }

  // Store modules in state
  dispatch(add(data.modules))

  return (
    <div>
      <div className="App flow">
        <Title />
        <Amount />
        <Modules />
        <ActiveModules />
      </div>
    </div>
  );
}

export default App;
