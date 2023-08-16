import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SigUp from './components/SignUp';
import SignUp from './components/SignUp'; // Make sure the correct filename and path are used here


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>home page</h1>} />
          <Route path='/add' element={<h1> add product component</h1>} />
          <Route path='/update' element={<h1>update component</h1>} />
          <Route path='/SignUp' element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
