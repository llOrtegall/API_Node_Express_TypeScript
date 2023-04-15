import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use('/api', indexRoutes);
app.use('/api', employeesRoutes);

app.listen(3000);