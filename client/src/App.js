import './App.css';
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'
import RecipeDetails from './components/RecipeDetails'
import CreateRecipe from './components/CreateRecipe';
// import Recipe from './components/Recipe.jsx'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter >
        <Switch>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipes' element={<CreateRecipe />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          {/* <Route path='/recipes' element={<Recipe />} /> */}
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
