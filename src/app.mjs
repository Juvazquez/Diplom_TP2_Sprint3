import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import dashboardRoutes from './routes/dashboardRoutes.mjs';
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Servir archivos estáticos
app.use(express.static(path.join(process.cwd(), "public")));

// Usar rutas separadas
app.use('/api', superHeroRoutes); // API en /api/heroes
app.use('/', dashboardRoutes); // Dashboard en /

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
