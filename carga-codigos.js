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
        { code: 'AJV237' },
        { code: 'OQY556' },
        { code: 'CVN120' },
        { code: 'RUW304' },
        { code: 'TPZ475' },
        { code: 'LZK681' },
        { code: 'FBR519' },
        { code: 'GEU861' },
        { code: 'ZWX438' },
        { code: 'JID932' },
        { code: 'WPS263' },
        { code: 'EQS593' },
        { code: 'UBM826' },
        { code: 'NQA012' },
        { code: 'PHR603' },
        { code: 'YZK374' },
        { code: 'MIJ759' },
        { code: 'DUK032' },
        { code: 'SOV117' },
        { code: 'XGR949' },
        { code: 'CZV580' },
        { code: 'TAQ201' },
        { code: 'JDW689' },
        { code: 'KHW204' },
        { code: 'SRB742' },
        { code: 'FGP319' },
        { code: 'EZI230' },
        { code: 'WJA644' },
        { code: 'BXU157' },
        { code: 'MFH692' },
        { code: 'VCB488' },
        { code: 'RDP307' },
        { code: 'YUH583' },
        { code: 'GLF024' },
        { code: 'QLO168' },
        { code: 'JRV742' },
        { code: 'WZH812' },
        { code: 'MUL013' },
        { code: 'VTB204' },
        { code: 'PCE763' },
        { code: 'USG430' },
        { code: 'ZWB123' },
        { code: 'FYD506' },
        { code: 'LMA934' },
        { code: 'CPT478' },
        { code: 'RQJ209' },
        { code: 'HRV671' },
        { code: 'GYW982' },
        { code: 'WQO725' }
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
