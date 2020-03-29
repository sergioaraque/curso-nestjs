import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Libro} from "../../libro";

@Controller('libro')
export class LibroController {
    // Listado de los libros
    @Get()
    obtenerLibros(): Libro[] {
        return [];
    }

    // / post añadir un libro devuelve un Libro
    @Post()
    aniadirLibro(@Body() libro: Libro): Libro { // Enviamos un objeto libro y devolvemos un libro
        const nuevolibro = new Libro(); // Creamos el objeto libro y le asignamos las variables.
        nuevolibro.id = 1;
        nuevolibro.autor = libro.autor;
        nuevolibro.titulo = libro.titulo;
        nuevolibro.fecha = libro.fecha;
        return nuevolibro;
    }

    // /:id get obtener un libro devuelve un Libro
    @Get('/:id')
    obtenerLibro(@Param() params): Libro {
        const libro = new Libro(); // Aquí se recuperaría de la bbdd el libro pero en este caso le damos nosotros los valores.
        libro.id = params.id;
        libro.autor = 'Sergio';
        libro.titulo = 'Titulo libro';
        libro.fecha = '24/03/2020';
        return libro;
    }

    // /:id put modificar un libro devuelve un Libro
    @Put('/:id')
    modificarLibro(@Param() params, @Body() libro: Libro): Libro {
        const nuevoLibro = new Libro(); // Creamos el libro
        nuevoLibro.id = params.id;
        nuevoLibro.autor = 'Sergio PUT';
        nuevoLibro.titulo = 'Titulo modificado';
        nuevoLibro.fecha = '25/03/2020';
        return nuevoLibro;
    }

    // /:id delete borrar un libro devuelve un Libro
    @Delete('/:id')
    eliminarLibro(@Param() params): Libro {
        const libroAEliminar = new Libro; // Creamos el libro que se va a borrar
        libroAEliminar.id = params.id;
        libroAEliminar.autor = 'Sergio DELET';
        libroAEliminar.titulo = 'Titulo eliminado';
        libroAEliminar.fecha = '01/01/1900';
        return libroAEliminar;
    }

}
