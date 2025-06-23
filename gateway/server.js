const express = require('express');
const app = express();

// Importa e usa rotas por serviço
require('./routes/admindashboard.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/cartservice.routes')(app);
require('./routes/frontend.routes')(app);
require('./routes/orderservice.routes')(app);
require('./routes/paymentservice.routes')(app);
require('./routes/productservice.routes')(app);
require('./routes/userservice.routes')(app);

const PORT = 30;
app.listen(PORT, () => {
  console.log(`Gateway rodando em http://localhost:${PORT}`);
});