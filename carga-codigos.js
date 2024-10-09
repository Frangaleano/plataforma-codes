const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const codeSchema = new mongoose.Schema({
    code: { type: String, required: true },
    used: { type: Boolean, default: false }
});

const Code = mongoose.model('Code', codeSchema);

const codesToAdd = [
    { code: 'CODIGO123' },
    { code: 'CODIGO456' },
    { code: 'CODIGO789' }
];

const addCodes = async () => {
    try {
        await Code.insertMany(codesToAdd);
        console.log('Códigos agregados correctamente');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error al agregar códigos:', error);
        mongoose.connection.close();
    }
};

addCodes();
