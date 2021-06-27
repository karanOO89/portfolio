import './App.scss';
import RightBody from './RightBody';
import SideNav from './SideNav';

function App() {
  return (
    <div className="App">
      <div>
        <SideNav />
      </div>
      <div>
        <RightBody />
      </div>
    </div>
  );
}

export default App;
