export class Product {
    public name: String;
    public brand: String;
    public picture: String;
    public price: String;
    public inCart: Boolean = false;

    constructor(obj) {
        this.name = obj.name;
        this.brand = obj.brand;
        this.picture = obj.picture;
        this.price = obj.price;
    }

    static fromJSONArray(array: Array<Product>): Product[] {
        return array.map(obj => new Product(obj));
    }

    addedToCart() {
        this.inCart = true;
    }

    removedFromCart() {
        this.inCart = false;

    }


}
