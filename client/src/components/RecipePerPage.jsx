import Recipe from './Recipe'

export default function RecipePerPage({ recipesCopied, currentPage }) {
    const lastRecipe = currentPage * 9 // 4 * 9 = 36
    const firstRecipe = lastRecipe - 9 //36 - 9 = 27
    const pagesRecipes = recipesCopied.slice(firstRecipe, lastRecipe) // 27, 36

    return (
        <>
            {console.log(pagesRecipes)}
            <div className='cards-container'>
                {pagesRecipes && pagesRecipes.map((e) => {
                    return <Recipe
                        title={e.title}
                        healthScore={e.healthScore}
                        points={e.points}
                        image={e.image}
                        diets={e.diets}
                        key={e.id}
                        id={e.id}
                        mandeOnDb={e.mandeOnDb}
                    />
                })}
            </div>
        </>
    )
}