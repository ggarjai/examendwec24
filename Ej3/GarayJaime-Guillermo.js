let list = [];


class buyList {
    constructor (product, price) {
        this.product = product;
        this.price = price;
    }

    addElement(element) {
        let element = prompt('Introduce un elemento') || 'Elemento';
        list.push(element);
    }

    deleteElement(element) {
        let element = prompt('Elimina un elemento');
        
        list.forEach(e => {
            if (e === element) {
                list.pop(e);
            }
        });
    }
}