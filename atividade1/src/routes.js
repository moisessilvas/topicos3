import { Router } from "express";

import DisciplinaController from "./app/controllers/Disciplina";

const routes = new Router();

routes.get("/disciplina", DisciplinaController.index);
routes.post("/disciplina", DisciplinaController.store);

routes.put("/disciplina/:id", DisciplinaController.update);
routes.delete("/disciplina/:id", DisciplinaController.delete);

export default routes;
