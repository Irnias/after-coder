class DomBuilder{

    getCardHtml = (product) => {
        return `
        <div class="col-sm-4">
            <div class="card">
                <a href="#" class="imageProduct"><img id="${product.id}" src="${product.thumbnail}" width="100%" alt="${product.title}"></a>
                <div class="card-body">
                    <p class="card-text">${product.title}</p>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        </div>             
    `;
    }

    clearDom = (parent) => {
        parent.empty();
    }

    renderProducts = (products,parent) => {
        this.clearDom(parent);
        products.forEach(product => {
            parent.append(this.getCardHtml(product));
        });
    }
}

export default DomBuilder;