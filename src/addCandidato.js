const {v4} = require('uuid')
const AWS = require('aws-sdk');

const addCandidato = async (event) => {
 
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { } = JSON.parse(event.body);
    const createFecha = new Date()
    const id = v4()

    const newCandidato = {
        id,
        createFecha,
        done: false

    }

    await dynamodb.put({
        TableName: 'RegistroCandidatos',
        Item: newCandidato
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newCandidato)
    }
};

module.exports = {
    addCandidato,
};