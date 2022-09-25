import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
            products: [
                {
                    id: 1,
                    title: 'Notebook "Flowers"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 10,
                    maxCount: 10,
                    price: 3
                },
                {
                    id: 2,
                    title: 'Notebook "Sky"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 15,
                    maxCount: 15,
                    price: 3.5
                },
                {
                    id: 3,
                    title: 'Notebook "Car"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 20,
                    maxCount: 20,
                    price: 4
                },
                {
                    id: 4,
                    title: 'Notebook "Nature"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 25,
                    maxCount: 25,
                    price: 2.5
                },
                {
                    id: 5,
                    title: 'Notebook "Cosmos"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 8,
                    maxCount: 8,
                    price: 4.5
                },
                {
                    id: 6,
                    title: 'Notebook "Music"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 10,
                    maxCount: 10,
                    price: 3
                },
                {
                    id: 7,
                    title: 'Notebook "Abstraction"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 15,
                    maxCount: 15,
                    price: 4
                },
                {
                    id: 8,
                    title: 'Notebook "Animals"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 20,
                    maxCount: 20,
                    price: 5
                },
                {
                    id: 9,
                    title: 'Notebook "Horses"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 5,
                    maxCount: 5,
                    price: 4
                },
                {
                    id: 10,
                    title: 'Notebook "Colors"',
                    description: 'checkered notepad',
                    url: "https://content2.rozetka.com.ua/goods/images/big/14566407.jpg",
                    count: 15,
                    maxCount: 15,
                    price: 3.5
                }
            ]
    },
    reducers: {
        add: (state, action) => {
            // Получен нужный объект из всего списка
            const currentProduct = state.products.find(item => item.id === action.payload.id);

            if(currentProduct.count) {
                currentProduct.count -= 1;
            }
        },
        remove: (state, action) => {
            const currentProduct = state.products.find(item => item.id === action.payload.id);

            if(action.payload.count < currentProduct.maxCount) {
                currentProduct.count += 1;
            }
        }
    }
})


export default productSlice.reducer;

export const {add, remove} = productSlice.actions;

export const selectProducts = (state) => state.products;