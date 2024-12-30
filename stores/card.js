import { defineStore } from 'pinia';
import products from '~~/data';
console.log('Product data:', products);


export const useCardStore = defineStore('cart', {
    state: () => ({
        cartContent: {},
        theme : "light"
    }),
    getters: {
        formattedCart(state) {
            return Object.keys(state.cartContent).map(productId => {
                const product = state.cartContent[productId];
                return {
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    discount: product.discount,
                    quantity: product.quantity,
                    cost: product.quantity * product.price,
                };
            });
        },
        productsTotal() {
            return Object.keys(this.cartContent).reduce((acc, id) => {
              return acc + this.cartContent[id].quantity;
            }, 0);
          },
    },



    actions: {
        add(product) {
            console.log('Product data:', product);
            if (product && product.id && product.name && product.price) {
                if (this.cartContent.hasOwnProperty(product.id)) {
                    this.cartContent[product.id].quantity++;
                } else {
                    this.cartContent[product.id] = {
                        id: product.id,
                        name: product.name,
                        price: parseFloat(product.price),
                        discount: product.discount,
                        quantity: 1,
                        image: product.image,
                    };
                }
            } else {
                console.error('Product is missing required data:', product);
            }
        },
        remove(productId) {
            if (this.cartContent.hasOwnProperty(productId)) {
                delete this.cartContent[productId];
            }
        },
        increment(productId) {
            if (this.cartContent.hasOwnProperty(productId)) {
                this.cartContent[productId].quantity += 1;
            }
        },
        decrement(productId) {
            if (this.cartContent.hasOwnProperty(productId) && this.cartContent[productId].quantity > 1) {
                this.cartContent[productId].quantity -= 1;
            }
        }
    }
})