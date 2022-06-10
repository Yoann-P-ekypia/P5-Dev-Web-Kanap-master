function getAllProducts (){
    const items = document.getElementById('items');
    console.log(items);

    // Récupérez des données d'un service web
    fetch("http://localhost:3000/api/products")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })


        .then(function(products) {
            console.log(products);

            // Insertion des l'éléments
            for (let product of products){
                // Insertion de l'élément "a"
                const linkProduct = document.createElement("a");
                items.appendChild(linkProduct);
                linkProduct.setAttribute("href", `./product.html?id=${product._id}`)

                // Insertion de l'élément "article"
                const articleProduct = document.createElement("article");
                linkProduct.appendChild(articleProduct);

                // Insertion de l'élément "img"
                const imageProduct = document.createElement("img");
                articleProduct.appendChild(imageProduct);
                imageProduct.setAttribute("src", product.imageUrl);
                imageProduct.setAttribute("alt", product.altTxt);

                // Insertion de l'élément "h3"
                const titreProduct = document.createElement("h3");
                articleProduct.appendChild(titreProduct);
                titreProduct.classList.add("productName");
                titreProduct.textContent = product.name;

                // Insertion de l'élément "p"
                const descriptionProduct = document.createElement("p");
                articleProduct.appendChild(descriptionProduct);
                descriptionProduct.classList.add("productDescription");
                descriptionProduct.textContent = product.description;

                console.log(items);
            }
        })

        .catch(function(error){
            console.log('opération à échoué : '+ error.message);
        });
}

getAllProducts();

