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

export type Location = {
    name: string;
    address: string;
    hours: string;
    googleMapsUrl: string;
    phone : string;
};

export type socialLink = {
    Icon: any
    href: string;
    color: string;
}

export type contactInfoItem = {
    Icon: any;
    text: string;
    href?: string;
}

export type Feature = {
    icon : any,
    title : string,
    description : string
}