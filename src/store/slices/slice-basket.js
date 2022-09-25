import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: {
            products: [],
            count: 0,
            totalCost: 0
        }
    },
    reducers: {
        add: (state, action) => {
            // Проверка избранного объекта (продукта) уже в корзине
            const basketProducts = state.basket.products.find(item => item.id === action.payload.id)

                if(basketProducts === undefined) {
                    // добавление в корзину в случае отсутствия
                    state.basket.products.push({...action.payload, added: 1});
                }else {
                    // если товар уже есть корзине, изменение его количества там
                    basketProducts.added += 1;
                }
        },
        remove: (state, action) => {
            // поиск избранного этого товара в корзине
            const basketProducts = state.basket.products.find(item => item.id === action.payload.id);

            if(basketProducts !== undefined) {
                if(basketProducts.added === 1) {
                    // обновляем массив баскет и удаляем лишний товар, который в единственном числе
                    state.basket.products = state.basket.products.filter(item => item.id !== basketProducts.id);
                }else {
                    // в противном случае уменьшаем его колчисетво в корзине
                    basketProducts.added -= 1;
                }
            }
        }
    },
})

export default basketSlice.reducer;

export const {add: basketAdd, remove: basketRemove} = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export const selectDoesElementExistInBasket = (id) => (state) => {
    return Boolean(state.basket.basket.products.find(item => item.id === id));
}

