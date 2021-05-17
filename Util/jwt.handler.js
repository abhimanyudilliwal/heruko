const jwt = require('jsonwebtoken');
const secret = 'hdaiu$$^%67777siojvIIUfbvheiruejwrkekdmfvdnahsrfw8urewriwjUTYt$@#@R^ewuu'

module.exports = {

    //Helper for login
    signToken: async (input) => {
        const token = await jwt.sign({
            data: input
        }, secret);
        return token;
    }
}