import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { Firstrow } from './components/Content/Firstrow';
import { Secondrow } from  './components/Content/Secondrow';

function App() {
  return (
    <div className="App">
      <header>
        <Sidebar /> 
      </header>
      <div className='main-wrapper'>
        <div className='first-row'>
          <Firstrow />
        </div>
        <div className='second-row'>
          <Secondrow />
        </div>
      </div>
    </div>
  );
}

export default App;
