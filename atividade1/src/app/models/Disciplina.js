import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const DisciplinaSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    creditos: {
      type: Number,
      required: true,
    },
    turma: {
      type: String,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

DisciplinaSchema.plugin(autoIncrement.plugin, {
  model: "Disciplina",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Disciplina", DisciplinaSchema);
