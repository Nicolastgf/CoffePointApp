export const membresias = [
	{
		id: "bronce",
		tipo: "Bronce Pass",
		precio: "$20.000",
		descripcion: "Incluye 1 café por día durante todo el mes.",
		color: "#C98958",
		imagen: require("../../assets/img/Fondo1.jpeg"),
        fondo: require("../../assets/img/Fondo1.jpeg"),
        descripcionlarga:"Ideal para los amantes del café que disfrutan de su ritual diario sin complicaciones. Con Bronce Pass, accedés a un café gratis cada día durante todo el mes en cualquiera de nuestras sucursales. Perfecta para quienes quieren empezar a disfrutar de beneficios con una inversión accesible.",
		beneficios: [
			"1 café gratis por día",
			"Disponible en todas las sucursales",
			"Acumulación de puntos estándar",
		],
		condiciones:
			"La membresía es válida por 30 días desde la fecha de activación. Solo uso personal. No acumulable con otras promociones.",
	},
	{
		id: "plata",
		tipo: "Plata Pass",
		precio: "$25.000",
		descripcion: "Café diario y acceso prioritario.",
		color: "#BFBFBF",
		imagen: require("../../assets/img/Fondo2.jpeg"),
        fondo: require("../../assets/img/Fondo2.jpeg"),
        descripcionlarga:"Diseñada para los que valoran su tiempo y buscan comodidad. Además de tu café diario gratuito, con Plata Pass accedés de forma prioritaria en horarios pico y obtenés un 10% de descuento en combos seleccionados. Disfrutá de una experiencia más fluida y beneficios adicionales que se notan.",
		beneficios: [
			"1 café gratis por día",
			"Acceso prioritario en horarios pico",
			"10% de descuento en combos",
			"Acumulación de puntos mejorada",
		],
		condiciones:
			"Válido por 30 días. Solo uso personal. No acumulable con otras promociones. Acceso prioritario sujeto a disponibilidad.",
	},
	{
		id: "oro",
		tipo: "Gold Pass",
		precio: "$30.000",
		descripcion: "Café + puntos dobles + descuentos exclusivos.",
		color: "#FFD700",
		imagen: require("../../assets/img/PinRojo.png"),
        fondo: require("../../assets/img/FolletoPromo11.png"),
        descripcionlarga:"Nuestra membresía más completa para los verdaderos fans del café. Gold Pass te da un café diario, 20% de descuento en todos los productos, acceso exclusivo a eventos especiales y productos limitados, además de acumular puntos el doble de rápido. Es la mejor forma de disfrutar CoffeePoint al máximo.",
		beneficios: [
			"1 café gratis por día",
			"20% de descuento en todos los productos",
			"Acceso a eventos especiales",
			"Puntos dobles en cada compra",
			"Acceso exclusivo a productos limitados",
		],
		condiciones:
			"Válido por 30 días. Solo uso personal. No acumulable con otras promociones. Sujeto a disponibilidad de stock.",
	},
];
