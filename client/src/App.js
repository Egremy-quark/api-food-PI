import './App.css';
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import Recipe from './components/Recipe.jsx'
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter >
        <Switch>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipes' element={<Recipe />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
