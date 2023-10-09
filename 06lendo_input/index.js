/*
 *Input
*/

const readLine = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question ('Qual sua liguagem de progrmação favorita?', (language) => {

    console.log(language);
    readLine.close();
});