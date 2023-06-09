export const data = [
	{
        id : "heladera-Whirlpool",
        nombre : "Heladera Whirlpool",
        precioAnterior : 74530,
        precio : 72700,
        cantidad : 1,
        category: "Heladeras",
        descripcion:"CARACTERÍSTICAS Marca Whirlpool Modelo WRO80CKDWA Tipo de enfriamiento frío seco Inverter No Capacidad refrigerador 374 lts Capacidad freezer 167 lts Capacidad bruta 492 lts Eficiencia energética B Alto 185.7 cm Ancho 82.9 cm  Profundidad 74.7 cm Incluye Ice Maker y Enfriador de copas. Iluminación LED  Información adicional Temperatura automática. Mayor espacio. Anticorrosión y anti huellas. Hielo más rápido y fácil Garantía 12 meses",
        img:"https://i.postimg.cc/W12thqd2/D-NQ-NP-2-X-991274-MLU48870302400-012022-F.webp"
   },
   {
       id: "Heladera-Samsung",
       nombre: "Heladera Samsung 305",
       precioAnterior: 28660,
       precio: 27530,
       cantidad: 1,
       descripcion:'Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Samsung, la protagonista de la cocina. Comodidad para tu casa Su sistema no frost evita la generación de escarcha y te va a permitir conservar el sabor y las propiedades nutritivas de los productos. Frescura en tus alimentos Los 4 niveles de temperatura ayudarán a la conservación de acuerdo a tus necesidades y preferencias. Cada vez que abrís la puerta se cuela aire caliente; por eso, al tener control de temperatura vas a poder regular los grados para que tus productos se mantengan siempre frescos.',
       category: "Heladeras",
       img: "https://i.postimg.cc/L8N5f4Pj/h2.webp"
   },
   {
       id: "Microondas-Panavox",
       nombre: "Microondas Panavox",
       precioAnterior: 4450,
       precio: 4100,
       cantidad: 1,
       descripcion:' Voltio 220V - Potencia 800 W - Capacidad: 1.5 Lts. - 2 niveles de velocidad + Pulsador - Vaso de vidrio templado - Traba de seguridad - 4 Cuchillas de acero inoxidable - Apta para picar hielo - Base de Acero Inoxidable',
       category: "Microondas",
       img: "https://i.postimg.cc/Znt5ZWkz/m1.webp"
   },
   {
       id: "Microondas-2",
       nombre: "Microondas Punktal",
       precioAnterior: 4290,
       precio: 3999,
       cantidad: 1,
       descripcion:"Para cocineros express o amantes del arte del buen comer, un microondas es un aliado indiscutible de la cocina. Ahorrá tiempo, llevá los alimentos a su punto de cocción o volvé a deleitarte con los sabores de los platos que ya preparaste. Variedad de funciones y programas Para destacar, este microondas cuenta con 10 diferentes niveles de cocción y programas.",
       category: "Microondas",
       img: "https://i.postimg.cc/VvqLNz1r/m2.webp"
   },
   {
       id: "Licuadora-Enxuta",
       nombre: "Licuadora Enxuta 1.5L",
       precioAnterior: 1521,
       precio: 1350,
       cantidad: 1,
       category: "Licuadora",
       descripcion:"Lo que tienes que saber de este producto Capacidad de 1.5 L. Su potencia es de 300 W. Con base antideslizante. Cuchilla resistente de acero inoxidable. Tapa dosificadora incorporada. Funciona con 2 velocidades. Tus preparaciones preferidas listas en pocos minutos.",
       img: "https://i.postimg.cc/s2L26nwX/l1.webp"
   },
   {
       id : "Licuadora-Punktal",
       nombre: "Licuadora Punktal 1.5L",
       precioAnterior: 1989,
       precio: 1823,
       cantidad: 1,
       descripcion:"Lo que tienes que saber de este producto Capacidad de 1.5 L. Su potencia es de 800 W. Cuchilla resistente de acero inoxidable. Tapa dosificadora incorporada.Funciona con 2 velocidades. Cuenta con cierre de seguridad. Pica hielo. Cantidad de cuchillas: 4. Tus preparaciones preferidas listas en pocos minutos.",
       category: "Licuadora",
       img: "https://i.postimg.cc/s2xXJFPq/l2.webp"
   }
	
];

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },800)
    })
}
export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data.filter(produc => produc.id === categoryId ))
        },800)
    })
}
export const getProductsById = (productId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data.filter(produc => produc.id === productId ))
            
        },800)
        
    })
}