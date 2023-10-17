import express from 'express';
import app from './app.js';

// Autres configurations et routes ici

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
