import express from 'express';
import { obtenerDashboardSuperheroes, agregarSuperheroeController,
    editarSuperheroeController } from '../controllers/dashboardController.mjs';
import { validarSuperheroe } from "../validations/superheroValidation.mjs";


const router = express.Router();

// Ruta para renderizar el Dashboard
router.get("/dashboard", obtenerDashboardSuperheroes);

export default router;
