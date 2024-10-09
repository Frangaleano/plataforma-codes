const mongoose = require('mongoose');
require('dotenv').config();

// Evita recompilar el modelo si ya ha sido creado
const Code = mongoose.models.Code || mongoose.model('Code', new mongoose.Schema({
    code: { type: String, required: true },
    used: { type: Boolean, default: false }
}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

exports.handler = async (event) => {
    const { code } = JSON.parse(event.body);

    try {
        const foundCode = await Code.findOne({ code });

        if (!foundCode) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'El código no existe' }),
            };
        }

        if (foundCode.used) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'El código ya ha sido usado' }),
            };
        }

        foundCode.used = true;
        await foundCode.save();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Código válido. Marcado como usado.' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error en el servidor' }),
        };
    }
};
