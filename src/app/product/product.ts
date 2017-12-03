export class Product {
    public id: number;
    public name: String;
    public brand: String;
    public picture: String;
    public price: number;
    public ratings: any;

    constructor(obj) {

        this.id = obj.id;
        this.name = obj.name;
        this.brand = obj.brand;
        this.picture = obj.picture;
        this.price = obj.price;
        this.ratings = obj.ratings ? obj.ratings : {};
    }

    // static fromJSONArray(array: Array<Product>): Product[] {
    //     return array.map(obj => new Product(obj));
    // }

    get avgRating() {
        const ratings = Object.values(this.ratings);
        let avg = 0;
        if (ratings.length) {
            const sum = ratings.reduce(function (p, c) {
                return p + c.rate;
            }, 0);
            avg = sum / ratings.length;
        }
        console.log('avg');
        return avg.toFixed(0);

    }

    get noOfRatedUsers() {
        return Object.values(this.ratings).length;
    }
}
