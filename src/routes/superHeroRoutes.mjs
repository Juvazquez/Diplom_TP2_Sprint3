import express from 'express';
import { validarSuperheroe } from "../validations/superheroValidation.mjs";
import {
    obtenerSuperheroePorIdController,
    obtenerSuperheroesJSON,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController, 
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController,
    agregarSuperheroeController,
    editarSuperheroeController  
} from '../controllers/superheroesController.mjs';


const router = express.Router();

// Rutas API JSON
router.get("/heroes", obtenerSuperheroesJSON);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// CRUD
router.post("/heroes", validarSuperheroe, crearSuperheroeController);
router.put('/heroes/:id', validarSuperheroe, actualizarSuperheroeController);
router.delete('/heroes/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombreSuperHeroe', eliminarSuperheroePorNombreController);

router.post('/heroes/agregar', validarSuperheroe, agregarSuperheroeController);
router.post('/heroes/editar/:id', validarSuperheroe, editarSuperheroeController);
router.delete('/heroes/:id', eliminarSuperheroeController);


export default router;
