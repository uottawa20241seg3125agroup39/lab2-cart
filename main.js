function loadpage(event, pageName) {
    
    if (pageName === 'user') {
        document.getElementById("content").style.display = "block";
    }
}
function loadProducts()
{
    const element=$('#product-selection')
    products.forEach(product => {
        element.append(
            `
            <input type="checkbox" id="product-select-${product.id}" name="${product.name}" value="${product.name}">
            <label for="product-select-${product.id}">${product.name}</label><br>
            `
        )
    })
    updateProductEmpty();
    console.log("products loaded");
}

function updateProductEmpty()
{
    const element=$('#product-selection')
    if (element.children.length>1)
    {
        $('#select-submission').hidden=false;
        $('#empty-sign').hidden=true;
        console.log("products not empty")
    }
    else {
        $('#select-submission').hidden=true;
        $('#empty-sign').hidden=false;
        console.log("products empty")
    }
}
window.onload = function() {
    loadProducts();
    $('#user').hidden=false;
    $('#loading').hidden=true;
    console.log("loaded");
}