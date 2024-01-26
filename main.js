function loadpage(event, pageName) {
    
    
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
        $('#select-submission').show();
        $('#empty-sign').hide();
        console.log("products not empty")
    }
    else {
        $('#select-submission').hide();
        $('#empty-sign').show();
        console.log("products empty")
    }
}
window.onload = function() {
    loadProducts();
    $('#user').show();
    $('#loading').hide();
    console.log("loaded");
}