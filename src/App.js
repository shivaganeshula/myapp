
import './App.css';

import FuntionalComponet from './Components/FuntionalCompoent';

import ClassComp from './Components/ClassComp';

import Click from './Components/Click';

import Counter from './Components/Counter';

import ParentCom from './Components/ParentCom';

function App() {
  return (
    <div className="App">
      <h1>Hello! Welcome</h1>
      <FuntionalComponet/>
      <ClassComp/>
      <Click/>
      <Counter/>
      <ParentCom/>
    </div>
  );
}

export default App;
