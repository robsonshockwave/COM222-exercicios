const express = require("express");
const Clientes = require("../models/Clientes");
const router = express.Router();
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.get("/", (req, res) => {
  res.json({ message: "Funcionou!" });
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.post("/clientes", async (req, res) => {
  const cliente = new Clientes({
    nome: req.body.nome,
    cpf: req.body.cpf,
  });

  try {
    const clienteCriado = await cliente.save();
    res.json(clienteCriado);
  } catch (err) {
    res.json({ message: err });
  }
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.patch("/clientes/:id", async (req, res) => {
  try {
    const clienteAlterado = await Clientes.updateOne(
      { _id: req.params._id },
      { $set: { title: req.body.title } }
    );
    res.json(clienteAlterado);
  } catch (err) {
    res.json({ message: err });
  }
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.delete("/clientes/:_id", async (req, res) => {
  try {
    const clienteDeletado = await Clientes.remove({ _id: req.params.id });
    res.json(clienteDeletado);
  } catch (err) {
    res.json({ message: err });
  }
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.json(clientes);
  } catch (err) {
    res.json({ message: err });
  }
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
router.get("/clientes/:_id", async (req, res) => {
  try {
    const dados = await Clientes.find({ _id: req.params._id });
    res.json(dados);
  } catch (err) {
    res.json({ message: err });
  }
});
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
module.exports = router;