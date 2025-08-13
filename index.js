const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required.' });
  }

  res.status(200).json({
    message: 'Data received successfully.',
    data: { name, age }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
