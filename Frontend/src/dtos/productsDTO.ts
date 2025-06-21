// foto, nome, preço, descrição e quantidade em estoque.
export interface ProductDTO{
    image: String[] | String;
    name: String;
    price: Number;
    description: String;
    quantityAvailable: Number;
}