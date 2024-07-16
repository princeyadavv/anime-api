const express = require('express');
const cors = require('cors'); // Add this line
const dummyData = require('./data');

const app = express();
const port = 3000;

app.use(cors()); // Add this line

app.get('/', (req, res) => {
  res.json(dummyData);
});

app.get('/character/:name', (req, res) => {
  const characterName = req.params.name;
  const character = dummyData.find(character => {
    const parts = character.name.split(' ');
    return parts.some(part => part.toLowerCase() === characterName.toLowerCase());
  });

  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: `Character with name '${characterName}' not found.` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
