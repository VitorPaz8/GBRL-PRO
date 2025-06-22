// foto, nome, preço, descrição e quantidade em estoque.
export interface ProductDTO{
    id: number;
    image: string[] | string;
    name: string;
    price: string;
    description: string;
    quantityAvailable: string;
}