const https = require("https");

/**
 * Returns buffer
 * @param {string} url URL
 * @returns {Promise<Buffer>}
 */
function getBuffer(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            const data = [];
            
            res.on("data", (chunk) => data.push(chunk));
            res.on("error", (e) => reject(e));
            res.on("end", () => {
                const buffer = Buffer.concat(data);
                resolve(buffer);
            });
        })
    });
}

/**
 * Returns image
 * @param {"person"|"horse"|"artwork"|"cat"} type Image type
 * @param {boolean} [base64=false] If it should return base64 string
 * @returns {Promise<Buffer|string>}
 */
module.exports = async (type = "person", base64 = false) => {
    let url;
    switch(type) {
        case "artwork":
            url = "https://thisartworkdoesnotexist.com";
            break;
        case "cat":
            url = "https://thiscatdoesnotexist.com";
            break;
        case "horse":
            url = "https://thishorsedoesnotexist.com";
            break;
        case "person":
            url = "https://thispersondoesnotexist.com/image";
            break;
        default:
            throw new Error(`Type "${type}" does not exists`);
    }

    const buffer = await getBuffer(url);
    return !!base64 ? buffer.toString("base64") : buffer;
};