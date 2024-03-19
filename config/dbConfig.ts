import mongoose from 'mongoose';

// URL de conexión a MongoDB Atlas
const uri = "mongodb+srv://zahircontacto:vnBnP4zab1khcsKe@cluster0.dtrgppr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Conexión a MongoDB Atlas
mongoose.connect(uri, { useUnifiedTopology: true, uri_decode_auth: true })
  .then(() => console.log('Conexión establecida con MongoDB Atlas'))
  .catch(error => console.error('Error de conexión a MongoDB Atlas:', error));
