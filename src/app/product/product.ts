export class Product {
    public id: number;
    public name: String;
    public brand: String;
    public picture: String;
    public price: number;
    public inCart: Boolean = false;

    constructor(obj) {
        this.id = obj.id;
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
