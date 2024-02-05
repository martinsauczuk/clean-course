type Size = '' | 'S' | 'M';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ) {}

    toSring() { 

        let toString = '';
        for (const key in this ) {
            toString += `${key}: ${this[key]} ${typeof this[key]} `;
        }

        return toString;

    }
}

(() => {
    const bluePants = new Product('Blue Large pants');
    console.log(bluePants.toSring());
    
})();