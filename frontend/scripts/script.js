const ing = {
    "ingredients": ["sugar", "salt", "citric acid", "caffeine", "sugaAr"]
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', async(e) => {
    e.preventDefault();
    document.querySelector('.harmful-ingredients').innerHTML = '<div class="harmful-ingredients"><ul class="list"></ul></div>';

    const options = {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ing),
    }
    const res = await fetch('http://localhost:3000/ingredient/check/', options);
    const data = await res.json();
    // const harmfulIngredient = data["success"].substr(6);
    const harmfulIngredientList = data["harmfulIngredients"];
    const harmfulIngredients = document.querySelector('.harmful-ingredients');
    if (harmfulIngredientList.length == 0) {
        harmfulIngredients.innerHTML = '<h2>No harmful ingredients</h2>';
    }
    for (const i in harmfulIngredientList) {
        // harmfulIngredients.appendChild(harmfulIngredientList[i]);
        const ul = document.querySelector(".list");
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.innerText = harmfulIngredientList[i];
        console.log(h3);
        li.appendChild(h3);
        ul.appendChild(li);
    }
    // const data = 

})