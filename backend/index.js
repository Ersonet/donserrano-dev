const express = require('express');
const app = express();
app.get('/api/usuarios', (req, res) => {
  res.json([{ nombre: 'Jefferson' }, { nombre: 'Ana' }]);
});
app.listen(3000, () => console.log('Backend funcionando'));
