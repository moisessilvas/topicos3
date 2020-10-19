import Disciplina from "../models/Disciplina";

// CRUD - Create | Read | Update | Delete

class DisciplinaController {
  async index(req, res) {
    try {
      const disciplina = await Disciplina.find();

      return res.status(200).json(disciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! Por favor, aguarde. ${error}` });
    }
  }

  async store(req, res) {
    const { codigo, nome, professor, departamento, creditos, turma } = req.body;

    //checar se já existe uma turma e código iguais
    const disciplinaToCheck = await Disciplina.findOne({
      codigo: codigo,
      turma: turma,
    });

    if (disciplinaToCheck) {
      return res
        .status(409)
        .json({ message: "Atenção! Já existe disciplina com este código e turma!" });
    }

    if (!(codigo && nome && professor && departamento && creditos && turma)) {
      return res
        .status(422)
        .json({ message: "Atenção! Para cadastrar uma disciplina, você deve por: nome, departamento e a quantidade de créditos." });
    }

    try {
      const disciplina = await Disciplina.create(req.body);

      return res.status(201).json(disciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! Por favor, aguarde. ${error}` });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const disciplinaToUpdate = await Disciplina.findOne({
      id: id,
    });

    if (!disciplinaToUpdate) {
      return res
        .status(422)
        .json({ message: "Atenção! O identificador informado ou não existe ou já foi excluído. Tente novamente usando outro valor." });
    }

    await Disciplina.updateOne({id: req.params.id}, req.body);

    return res.status(200).json({ message: "Disciplina atualizada com sucesso!" });
  }

  async delete(req, res) {
    const disciplinaToDelete = await Disciplina.findOne({ id: req.params.id });

    if (!disciplinaToDelete) {
      return res
        .status(422)
        .json({ message: "Atenção! O identificador informado ou não existe ou já foi excluído. Tente novamente usando outro valor." });
    }

    await Disciplina.deleteOne({ id: req.params.id });

    return res.json({ message: "Disciplina foi excluída!" });
  }
}

export default new DisciplinaController();
