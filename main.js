function loadpage(event, pageName) {
    const sections=$('.section');
    sections.hide();
    const shown=$('#'+pageName);
    shown.show();
    $('.selected').toggleClass('selected not-selected');
    $('#'+pageName+'-button').toggleClass('selected not-selected');
    console.log(`page switch to ${pageName}`);
}
function loadProducts(category)
{
    const element=$('#product-selection')
    products.forEach(product => {
        if (category==="normal"||product.category===category)
        {
            element.append(
                `
            <input type="checkbox" id="${product.id}" name="${product.name}" value="${product.name}">
            <label for="${product.id}">${product.name}</label><br>
            `
            )
        }

    })
    updateProductEmpty();
    console.log("products loaded for "+category);
}

function updateProductEmpty()
{
    const element=$('#product-selection')
    if (element.children.length>0)
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
    loadProducts("normal");
    $('#user').show();
    $('#loading').hide();
    $('#user-button').addClass('selected').removeClass('not-selected');
    console.log("loaded");
}
function updateCartEmpty() {
    const element = $('#cart');
    if (element.children().length > 0) {
        $('#cart-submission').show();
        $('#cart-empty-sign').hide();
        console.log("Cart is not empty");
    } else {
        $('#cart-submission').hide();
        $('#cart-empty-sign').show();
        console.log("Cart is empty");
    }
}
function changePreferenceType(event)
{
    $('#product-selection').empty();
    $('#cart-selection').empty();
    loadProducts(event.target.value);
}

function addProduct()
{
    const element=$('#product-selection');
    const cart=$('#cart-selection');
    element.children().each(function () {
        if (this.checked)
        {
            cart.append(
                `
                <input type="checkbox" id="${this.id}" name="${this.name}" value="${this.value}">
                <label for="${this.id}">${this.name}</label><br>
                `
            )
            element.find('label[for="'+this.id+'"]').remove();
            this.remove();
        }
    })
    updateCartEmpty();
    updateProductEmpty();
    console.log("products added to cart");
}
function removeProduct(){
    const element=$('#cart-selection');
    const product=$('#product-selection');
    element.children().each(function () {
        if (this.checked)
        {
            product.append(
                `
                <input type="checkbox" id="${this.id}" name="${this.name}" value="${this.value}">
                <label for="${this.id}">${this.name}</label><br>
                `
            )
            element.find('label[for="'+this.id+'"]').remove();
            this.remove();
        }
    })
    updateCartEmpty();
    updateProductEmpty();
    console.log("products removed from cart");
}