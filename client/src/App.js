import './App.css';
import LandingPage from './components/LandingPage'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Detail from './components/Detail'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
    <div >
      <Switch>
        <Route path='/' component={<LandingPage/>} />
        <>
          <SearchBar />
          <Route  path='/home' element ={<Home/>} />
          <Route path='/create' element={<Recipe/>} />
          <Route path='/recipe/:id' component={<Detail/>} />
        </>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
