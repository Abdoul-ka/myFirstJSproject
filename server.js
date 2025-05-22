const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const path = require('path');
const app = express();

// Middleware
app.use(express.static('public'));
const upload = multer({ dest: 'uploads/' });

app.post('/analyse', upload.single('document'), (req, res) => {
  const filePath = req.file.path;

  Tesseract.recognize(filePath, 'eng')
    .then(({ data: { text } }) => {
      // Logique de détection simple
      if (text.toLowerCase().includes("faux") || text.toLowerCase().includes("modifié")) {
        res.json({ message: "❌ Document potentiellement falsifié" });
      } else {
        res.json({ message: "✅ Document semble authentique" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Erreur d'analyse", error: err });
    });
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
