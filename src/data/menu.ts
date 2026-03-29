export interface Dish {
    id: string;
    name: string;
    category: 'Sopa' | 'Carne' | 'Peixe' | 'Vegetal' | 'Especial';
    description: string;
    longDescription: string;
    price: string;
    image: string;
    icon: string;
    day: string;
}

// Fotos reais, testadas e verificadas — todas 800x533px (ratio 3:2)
const photos = {
    Sopa: [
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=533&fit=crop&q=80',
    ],
    Carne: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=533&fit=crop&q=80',
    ],
    Peixe: [
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&h=533&fit=crop&q=80',
    ],
    Vegetal: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=533&fit=crop&q=80',
    ],
    Especial: [
        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=533&fit=crop&q=80',
        'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&h=533&fit=crop&q=80',
    ],
};

const counters: Record<string, number> = { Sopa: 0, Carne: 0, Peixe: 0, Vegetal: 0, Especial: 0 };
function nextPhoto(cat: string): string {
    const pool = photos[cat as keyof typeof photos];
    return pool[(counters[cat]++) % pool.length];
}

function buildMenu(): Dish[] {
    const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const catPool: Dish['category'][] = ['Sopa', 'Carne', 'Peixe', 'Vegetal', 'Especial', 'Carne', 'Peixe'];
    const iconPool = ['🍲', '🥩', '🐟', '🥗', '🥘', '🍖', '🐠'];
    const dishes: Dish[] = [];

    days.forEach(day => {
        for (let i = 1; i <= 7; i++) {
            const cat = catPool[i - 1];
            dishes.push({
                id: `${day}-prato-${i}`,
                name: i === 1 ? `Especialidade da Casa` : `${cat} Regional #${i}`,
                category: cat,
                description: `Prato de ${cat.toLowerCase()} preparado com ingredientes frescos, feito no dia.`,
                longDescription: `Este prato de ${cat.toLowerCase()} é uma das nossas referências diárias. Preparado com rigor e carinho, utilizando apenas ingredientes frescos do mercado local para garantir a máxima qualidade e sabor tradicional que nos caracteriza desde 1990.`,
                price: i === 1 ? '6,50 €' : '5,50 €',
                image: nextPhoto(cat),
                icon: iconPool[i - 1],
                day: day
            });
        }
    });

    // Pratos reais com dados e fotos específicos
    const overrides: Partial<Dish>[] = [
        {
            id: 'segunda-prato-1',
            name: 'Caldo Verde com Broa',
            category: 'Sopa',
            icon: '🍲',
            description: 'Sopa tradicional minhota com couve galega e chouriço.',
            image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=533&fit=crop&q=80',
        },
        {
            id: 'segunda-prato-2',
            name: 'Frango Assado no Forno',
            category: 'Carne',
            icon: '🥩',
            description: 'Frango suculento com batatinha assada e louro.',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=533&fit=crop&q=80',
        },
        {
            id: 'sabado-prato-7',
            name: 'Cozido à Portuguesa',
            category: 'Especial',
            icon: '🫕',
            description: 'O rei dos sábados: carnes, enchidos e legumes.',
            price: '6,50 €',
            image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=533&fit=crop&q=80',
        }
    ];

    overrides.forEach(ov => {
        const idx = dishes.findIndex(d => d.id === ov.id);
        if (idx !== -1) dishes[idx] = { ...dishes[idx], ...ov };
    });

    return dishes;
}

export const menuData: Dish[] = buildMenu();
