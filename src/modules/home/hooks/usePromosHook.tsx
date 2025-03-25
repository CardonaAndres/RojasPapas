import { promoItem } from "../typescript/types.ts"

export const usePromosHook = () => {

    const promos : promoItem[] = [
        {
          title: "Combo Familiar Explosivo",
          description: "4 porciones + 2 bebidas + salsas premium",
          price: "$35.000",
          discount: "20% OFF",
          image: "https://t3.ftcdn.net/jpg/02/10/34/72/360_F_210347283_2t59AtbhXbqbgb125hUqzVLqsUGMRqUJ.jpg"
        },
        {
          title: "Salchipapas Gourmet",
          description: "Papas premium + salchichas artesanales selectas",
          price: "$15.000",
          discount: "Nuevo",
          image: "https://www.peru.travel/Contenido/Uploads/salchipapa-interior-1_637612666112728377.jpg"
        },
        {
          title: "Combo Individual",
          description: "Salchipapas + bebida + salsas extra",
          price: "$12.000", 
          discount: "Más vendido",
          image: "https://www.semana.com/resizer/v2/PWFHSJ7YQJGXLLKXVRVTU75X6U.png?auth=2266e67fad35556a2fb892d4fa3c919974d2ec9999057f27fd4d3a8b0a17c1b5&smart=true&quality=75&width=1920"
        }
    ];

  return {
    promos
  }
}
