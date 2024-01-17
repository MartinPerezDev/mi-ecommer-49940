const productos = [
  {
    id: "hgt344",
    nombre: "Auriculares WF XB700",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 10,
    precio: 15000,
    categoria: "auriculares",
    imagen: "/img/auriculares-WF-XB700.webp"
  },
  {
    id: "ljm322",
    nombre: "Auriculares WH CH720N",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 2,
    precio: 12000,
    categoria: "auriculares",
    imagen: "/img/auriculares-WH-CH720N.webp"
  },
  {
    id: "shx688",
    nombre: "Auriculares Float Run",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 6,
    precio: 17000,
    categoria: "auriculares",
    imagen: "/img/auriculares-Float-Run.webp"
  },
  {
    id: "jht332",
    nombre: "Televisor A80J Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 9,
    precio: 120000,
    categoria: "televisores",
    imagen: "/img/televisores-A80J-Series.webp"
  },
  {
    id: "wes236",
    nombre: "Televisor X725F Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 9,
    precio: 162000,
    categoria: "televisores",
    imagen: "/img/televisores-X725F-Series.webp"
  },
  {
    id: "kmt866",
    nombre: "Televisor X805H Series",
    descripcion: "Este es el mejor televisor del mundo",
    stock: 15,
    precio: 19900,
    categoria: "televisores",
    imagen: "/img/televisores-X805H-Series.webp"
  },
  {
    id: "khg522",
    nombre: "Camara ILCE 9M3",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 3,
    precio: 22000,
    categoria: "camaras",
    imagen: "/img/camaras-ILCE-9M3.webp"
  },
  {
    id: "prw092",
    nombre: "Camara ILCE 6000L",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 10,
    precio: 31000,
    categoria: "camaras",
    imagen: "/img/camaras-ILCE-6000L.webp"
  },
  {
    id: "ujm422",
    nombre: "Camara ZV E10",
    descripcion: "Esta es la mejor camara del mundo",
    stock: 5,
    precio: 24000,
    categoria: "camaras",
    imagen: "/img/camaras-ZV-E10.webp"
  },
];

const obtenerProductos = new Promise((resolve) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos