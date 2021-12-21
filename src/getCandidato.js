const AWS = require('aws-sdk');

const getCandidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName:'RegistroCandidatos'

    }).promise()

    const candidato = result.Items;

    return {
        status: 200,
        body: {
            candidato
        },
    }
}

module.exports = {
    getCandidato
}