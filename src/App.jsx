import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Home from './components/Home';

function App() {

  
  return (
    <div className='bg-gradient-to-r from-bg-left-gradient to-bg-right-gradient h-screen w-screen flex justify-center items-center'>
        <Home />
    </div>
  )
}

export default App