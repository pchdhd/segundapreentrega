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
       category: "Heladeras",
       img: "https://i.postimg.cc/L8N5f4Pj/h2.webp"
   },
   {
       id: "Microondas-Panavox",
       nombre: "Microondas Panavox",
       precioAnterior: 4450,
       precio: 4100,
       cantidad: 1,
       category: "Microondas",
       img: "https://i.postimg.cc/Znt5ZWkz/m1.webp"
   },
   {
       id: "Microondas-2",
       nombre: "Microondas Punktal",
       precioAnterior: 4290,
       precio: 3999,
       cantidad: 1,
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
       img: "https://i.postimg.cc/s2L26nwX/l1.webp"
   },
   {
       id : "Licuadora-Punktal",
       nombre: "Licuadora Punktal 1.5L",
       precioAnterior: 1989,
       precio: 1823,
       cantidad: 1,
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