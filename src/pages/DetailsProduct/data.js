import produt1 from '../../assets/catalogo1.jpeg';
import catalogo2 from '../../assets/catalogo2.jpeg';
import {Pink, Purple} from './styles';

export default [
    {
        id: 1,
        alt: 'Dress pink',
        img: produt1,
        name: 'Dress pink',
        description: `
        Short curto em jeans com passantes no cós e bolsos com forro aparente. Com puídos e barra desfiada a peça é charmosa e possui um ar despojado. Ideal para todos os momentos o modelo pode compor os mais variados looks.
        `,
        color: [
            'Pink'
        ],
        palet: [
            <Pink></Pink>,
        ],
        size: [
            36,
            37,
            38,
            39,
            40,
        ],
        price: 499.00

    },
    {
        id: 2,
        alt: 'foto2',
        img: catalogo2,
        name: 'Clothing',
        description: `
        Short curto em jeans com passantes no cós e bolsos com forro aparente. Com puídos e barra desfiada a peça é charmosa e possui um ar despojado. Ideal para todos os momentos o modelo pode compor os mais variados looks.
        `,
        color: [
            'Purple',
            'Red'
        ],
        palet: [
            <Purple></Purple>,
        ],
        size: [
            36,
            37,
            38
        ],
        price: 399.00
    },
    {
        id: 3,
        alt: 'Dress pink',
        img: produt1,
        name: 'Dress pink',
        description: `
        Short curto em jeans com passantes no cós e bolsos com forro aparente. Com puídos e barra desfiada a peça é charmosa e possui um ar despojado. Ideal para todos os momentos o modelo pode compor os mais variados looks.
        `,
        color: [
            'Pink'
        ],
        palet: [
            <Pink></Pink>,
        ],
        size: [
            40,
        ],
        price: 299.00,
    },
    {
        id: 4,
        alt: 'foto2',
        img: catalogo2,
        name: 'Clothing',
        description: `
        Short curto em jeans com passantes no cós e bolsos com forro aparente. Com puídos e barra desfiada a peça é charmosa e possui um ar despojado. Ideal para todos os momentos o modelo pode compor os mais variados looks.
        `,
        color: [
            'Purple'
        ],
        palet: [
            <Purple></Purple>,
        ],
        size: [
            38,
            39,
            40,
        ],
        price: 199.00,
    }
]

