// foto, nome, preço, descrição e quantidade em estoque.

export interface productDTO{
    image: String[] | String;
    name: String;
    price: Number;
    description: String;
    quantityAvailable: Number;
}

export interface productsDTO{
    products: productDTO[];
}