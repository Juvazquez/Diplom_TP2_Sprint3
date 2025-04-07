import { obtenerTodosLosSuperheroes, crearSuperheroe, actualizarSuperheroe } from '../services/superheroesService.mjs';

//  GET - HTML para el Dashboard
export async function obtenerDashboardSuperheroes(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        res.render("dashboard", { 
            titulo: "Lista de Superhéroes", 
            superheroes 
        });
    } catch (error) {
        res.status(500).send("Error al cargar el dashboard");
    }
}
