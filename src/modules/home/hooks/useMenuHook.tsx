import { menuCategory } from '../typescript/types.ts';

export const useMenuHook = () => {
    
    const menuCategories: menuCategory[] = [
        {
          name: 'Especiales',
          items: [
            {
              name: 'Salchipapas Explosivas',
              description: 'Papas doradas, salchichas premium, salsas gourmet',
              price: '$12.000',
              image: 'https://i.ytimg.com/vi/tfd3c8J4GYQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgYChIMA8=&rs=AOn4CLDxFfvUomtr9ncvY4Vg7ze_hat4xw'
            },
            {
              name: 'Combo Familiar',
              description: '4 porciones, salsas variadas, bebidas incluidas',
              price: '$35.000',
              image: 'https://www.elheraldo.co/resizer/v2/YKOKYH366FG77PIVJJG4ZRTF7M.png?auth=2b85c264db78c4a1b2e34fe304a640cb8c288ba0844a529499ca478c77f428b7&smart=true&quality=70&width=1200&height=675'
            }
          ]
        },
        {
          name: 'Clásicas',
          items: [
            {
              name: 'Salchipapas Tradicionales',
              description: 'Receta original de Las Palmas',
              price: '$8.000',
              image: 'https://img.freepik.com/fotos-premium/la-salchipapa-o-salchipapas-es-una-comida-rapida-que-consumida-en-rodajas-fritas-de-salchicha-y-papas-fritas-consumida-como-comida-callejera-en-hispanoamerica_449839-12382.jpg'
            },
            {
              name: 'Salchipapas Pequeñas',
              description: 'Porción individual',
              price: '$5.000',
              image: 'https://www.perudelights.com/wp-content/uploads/2012/07/Salchipapas-412.jpg'
            }
          ]
        },
        {
          name: 'Adicionales',
          items: [
            {
              name: 'Bebidas',
              description: 'Refrescos y jugos',
              price: '$3.000',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxjs1S5frnuuEIKdQf6qW4pgihA-AxE4ieQ&s'
            },
            {
              name: 'Salsas Extra',
              description: 'Salsas caseras artesanales',
              price: '$1.500',
              image: 'https://i.blogs.es/78995c/salsas/1366_2000.jpg'
            }
          ]
        }
    ];

  return {
    menuCategories,
  }

}