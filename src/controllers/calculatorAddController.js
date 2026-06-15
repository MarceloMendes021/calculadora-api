exports.add = (req, res) => {
  const { number1, number2 } = req.body;

  if (!number1 || !number2) {
    return res.status(400).json({ error: "Todos os parametros são obrigatórios" });
  }

  const resultado = number1 + number2;

  res.json({ resultado });
};
