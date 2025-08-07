import logoCoffeStar from '../../assets/logo/LogoCoffeStar.png';
import logoBirka from "../../assets/logo/LogoBirka.png";
import logoKobak from "../../assets/logo/LogKobak.png";
import logoforchetta from "../../assets/logo/LogoForcheta.png"
export const SucursalData = [
    {
        id: 1,
        titulo: 'COFFEE STAR',
        descripcion: 'Ambiente cálido y moderno, ideal para reuniones y estudio.',
        ubicaciones: [
            {
                direccion: 'Marcos Paz 696 - B Norte',
                horario: {
                    lunesViernes: '07:00  - 23:00 ',
                    sabadoDomingo: '08:00  - 23:00 ',

                },
                latLng: [-26.821043151321568, -65.20497891715723],

            },
            {
                direccion: 'Galería La Gaceta - Local 5',
                horario: {
                    lunesSabado: '08:00  - 22:00 ',
                    domingo: 'Cerrado',
                },
                latLng: [-26.82797919593719, -65.20649849078399],
            }
        ],
        color: '#017653',
        logo: logoCoffeStar,
        promociones: [/* IDs o descripciones, opcional */],

    },
    {
        id: 2,
        titulo: 'BIRKA',
        direccion: ['Maipú 699 - B Norte'],
        descripcion: 'Espacio tranquilo, perfecto para trabajar con snacks y cafés especiales.',
        color: '#c0c0c0',
        horario: 'Lunes a Viernes de 08:00 a 19:00 hs',
        imagen: '/assets/img/sucursales/birka.jpg',
        logo: logoBirka,
        promociones: [],
        latLng: [-26.821037629794013, -65.20522908913219],
    },
    {
        id: 3,
        titulo: 'KOBAK',
        direccion: ['24 de Septiembre 785'],
        descripcion: 'Café gourmet con atención exclusiva. Descuentos por membresía Gold.',
        color: '#7d674d',
        horario: 'Lunes a Viernes de 07:00 a 00:00 / Sábado y Domingo de 08:00 a 00:00',
        imagen: '/assets/img/sucursales/kobak.jpg',
        logo: logoKobak,
        promociones: [],
        latLng: [-26.830064519840274, -65.20895892212391],
    }
    ,
    {
        id: 4,
        titulo: 'FORCHETTA',
        direccion: ['25 de Mayo 819'],
        descripcion: 'Ideal para after office y encuentros. Promociones con regalos exclusivos.',
        color: '#fd5d3d',
        horario: 'Lunes a Viernes de 07:30 a 01:30 / Sábado y Domingo de 08:00 a 01:30',
        imagen: '/assets/img/sucursales/kobak.jpg',
        logo: logoforchetta,
        promociones: [],
        latLng: [-26.819644705154868, -65.2018224866213],
    }

];