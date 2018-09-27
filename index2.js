const brain = require('brain.js');

const data = require('./hardwareSoftwareData.json')

const network = new brain.recurrent.LSTM();
const trainingData = data.map(item=> ({
    input : item.text,
    output : item.category
}));

network.train(trainingData);

let output = network.run('I coded the program');

console.log(`Category: ${output}`)