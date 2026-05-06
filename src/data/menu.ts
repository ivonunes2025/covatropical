export interface Dish {
    id: string;
    name: string;
    category: 'Sopa' | 'Carne' | 'Peixe' | 'Vegetal' | 'Especial';
    description: string;
    longDescription: string;

    icon: string;
    day: string;
}


function buildMenu(): Dish[] {
    const dailyMenus: Record<string, { name: string, category: Dish['category'] }[]> = {
        segunda: [
            { name: 'Canja / Sopa Passada de Legumes', category: 'Sopa' },
            { name: 'Medalhão de Pescada Gratinado', category: 'Peixe' },
            { name: 'Tripas', category: 'Especial' },
            { name: 'Panadinhos c/ Arroz de Feijão', category: 'Carne' }
        ],
        terca: [
            { name: 'Sopa de Legumes', category: 'Sopa' },
            { name: 'Pescada à Marinheira', category: 'Peixe' },
            { name: 'Bife à Cova de Lombo ou Vitela', category: 'Carne' },
            { name: 'Esparguete à Bolonhesa', category: 'Carne' }
        ],
        quarta: [
            { name: 'Sopa de Feijão Verde', category: 'Sopa' },
            { name: 'Cação c/ Cebolada', category: 'Peixe' },
            { name: 'Carne de Porco à Alentejana', category: 'Carne' },
            { name: 'Hamburguer Artesanal à Cova de Frango', category: 'Carne' }
        ],
        quinta: [
            { name: 'Canja', category: 'Sopa' },
            { name: 'Bacalhau à Brás', category: 'Peixe' },
            { name: 'Cordon Bleu', category: 'Carne' },
            { name: 'Bitoque c/ Feijão Preto', category: 'Carne' }
        ],
        sexta: [
            { name: 'Sopa de Juliana', category: 'Sopa' },
            { name: 'Bacalhau com Natas', category: 'Peixe' },
            { name: 'Coxa no Forno', category: 'Carne' },
            { name: 'Alheira', category: 'Especial' }
        ],
        sabado: [
            { name: 'Caldo Verde', category: 'Sopa' },
            { name: 'Peixe Assado', category: 'Peixe' },
            { name: 'Tripas', category: 'Especial' },
            { name: 'Bife à Cova do Lombo ou Vitela', category: 'Carne' },
            { name: 'Arroz de Pato', category: 'Carne' }
        ]
    };

    const iconMap: Record<string, string> = {
        Sopa: '🍲',
        Carne: '🥩',
        Peixe: '🐟',
        Vegetal: '🥗',
        Especial: '🥘'
    };

    const dishes: Dish[] = [];

    Object.entries(dailyMenus).forEach(([day, dayDishes]) => {
        dayDishes.forEach((dish, index) => {
            const i = index + 1;
            dishes.push({
                id: `${day}-prato-${i}`,
                name: dish.name,
                category: dish.category,
                description: `Delicioso prato de ${dish.category.toLowerCase()} preparado fresco para o dia de hoje.`,
                longDescription: `O nosso ${dish.name} é confeccionado com dedicação e ingredientes frescos. Mantendo a nossa tradição, procuramos sempre trazer o melhor sabor à sua mesa.`,

                icon: iconMap[dish.category] || '🍽️',
                day: day
            });
        });
    });

    return dishes;
}

export const menuData: Dish[] = buildMenu();
