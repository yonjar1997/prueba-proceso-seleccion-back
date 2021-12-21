const AWS = require('aws-sdk');

const candidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    const result = await dynamodb.get({
        TableName: 'RegistroCandidatos',
        Key: {
            id
        }
    }).promise()
    const candidato = result.Item

    return {
        status: '200',
        body: candidato
    }
}



module.exports = {
    candidato
}