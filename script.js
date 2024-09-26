
/* <script>
fetch('(link unavailable)')
    .then(response => response.json())
    .then(data => {
        const categoriesContainer = document.getElementById('categories-container');
        data.categories.forEach(category => {
            const categoryHTML = `
                <div class="category">
                    <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                    <h2>${category.strCategory}</h2>
                    <p>${category.strCategoryDescription}</p>
                </div>
            `;
            categoriesContainer.innerHTML += categoryHTML;
        });
    })
    .catch(error => console.error(error));
</script> */



const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

async function fetchUrl() {



    try {

        const response = await fetch(url)
        const data = await response.json()
        const categories = data.categories



        // console.log(item)
        for (const item of categories) {
            const productDiv = document.createElement('div')

            const productTitle = document.createElement('h1');
            productTitle.textContent = item.strCategory;
            productDiv.appendChild(productTitle);


            const productDescription = document.createElement('p');
            productDescription.textContent = item.strCategoryDescription;
            productDiv.appendChild(productDescription);


            const productImage = document.createElement('img');
            productImage.setAttribute('src', item.strCategoryThumb);
            productImage.setAttribute('alt', item.strCategory);
            productImage.classList.add
            productDiv.appendChild(productImage)


            document.querySelector('#categories-container').appendChild(productDiv);

        }
        console.log(categories)

    } catch (error) {
        console.log(error)
    }

}

fetchUrl()


