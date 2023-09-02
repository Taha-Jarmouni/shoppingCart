export default function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

/* we write this code above instead of repeating the same code down here  
    document.addEventListener('click', e => {
        if (e.target.matches('[data-add-to-cart-button]')) {
            const id = e.target.closest("[data-store-item]").dataset.itemId
            addToCart(parseInt(id))
        }
    })
    
 // callback(e) represents  e => { 
    const id = e.target.closest("[data-store-item]").dataset.itemId
    addToCart(parseInt(id))
*/