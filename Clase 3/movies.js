alert("Mirá en la consola, te voy a mostrar películas Japonesas que coincidan con 'Yume' (Sueños) y Películas que sean de los 90'en Adelante")

function Peliculas(title, year, director) {
    this.title = title;
    this.year = year;
    this.director = director;
}

const pelicula1 = new Peliculas("Yume", 1990, "Kurosawa Akira");
const pelicula2 = new Peliculas("El último Samurai", 2003, "Edward Zwick");
const pelicula3 = new Peliculas("Irezumi", 1966, "Yasuzou Masumura");
const pelicula4 = new Peliculas("Harakiri", 1962, "Masaki Kobayashi");

const peliculasArray = [pelicula1, pelicula2, pelicula3, pelicula4];
const peliculasPostNoventa = peliculasArray.filter((pelicula) => pelicula.year >= 1990);
const yume = peliculasArray.find((pelicula) => pelicula.title.toLowerCase() === "yume");
console.log('Película1', yume, 'Película2', peliculasPostNoventa);