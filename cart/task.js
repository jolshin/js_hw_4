


function addToCart (product) {
    let purchases = document.querySelectorAll('.cart__product')
    let cart = document.querySelector('.cart__products')

    for (let el of purchases) {
        console.log(el.dataset.id)
        if (el.dataset.id === product.dataset.id) {
            el.lastElementChild.textContent = parseInt(el.lastElementChild.textContent) + parseInt(product.querySelector('.product__quantity-value').textContent)

            return
        }
    }

    const addProduct = `<div class="cart__product" data-id=${product.dataset.id}>
                            <img class="cart__product-image" src="${product.getElementsByTagName('img')[0].src}">
                            <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerHTML}</div>
                        </div>`

    cart.insertAdjacentHTML('beforeend', addProduct)

}

function changeQuantity (target) {
    if (target.className === 'product__quantity-control product__quantity-control_dec') {
        if (target.nextElementSibling.textContent > 0){
            --target.nextElementSibling.textContent 
        } else {
            alert('И так ноль')
        }
    } else if (target.className === 'product__quantity-control product__quantity-control_inc'){
        ++target.previousElementSibling.textContent
    }
}

document.addEventListener('click', (e) => {
    let product = e.target.closest('.product')
    let target = e.target
    if (target.className.includes('product__quantity-control')) {
        changeQuantity(target)        
    } else if (target.className.includes('product__add')) {
        addToCart(product)
    }
})