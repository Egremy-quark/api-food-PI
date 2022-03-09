import React from 'react'

export default function Pagination({ recipesCopied, page }) {
    let pages = []
    for (let i = 1; i < Math.ceil(recipesCopied / 9); i++) {
        pages.push(i) // pages[1,2,3,4,5,6,7,8,9,10,11]
    }


    return (
        <div>
            <nav>
                <ul>
                    {pages.map((e, i) => (
                        <li key={i.toString()}>
                            <button onClick={() => { page(e) }}>{e}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}