import './App.css';

import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
      <>
        <div className='w-[1680px] mx-auto flex'>
          <LeftSide />
          <RightSide />
        </div>
      </>
  );
}

export default App;
