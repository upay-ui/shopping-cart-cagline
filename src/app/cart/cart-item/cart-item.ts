import { Product } from '../../product/product';
export class CartItem extends Product {

    public quantity: number;

    constructor(obj) {
        super(obj);
        this.quantity = obj.quantity ? obj.quantity : 1;
    }

    static fromJSONArray(array: Array<CartItem>): CartItem[] {
        return array.map(obj => new CartItem(obj));
    }
}
