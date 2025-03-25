export type menuCategoryItem = {
    name: string;
    description: string;
    price: string;
    image: string;
}

export type menuCategory = {
    name: string;
    items: menuCategoryItem[];
}

export type promoItem = {
    title: string;
    description: string;
    price: string;
    discount: string;
    image: string;
}
