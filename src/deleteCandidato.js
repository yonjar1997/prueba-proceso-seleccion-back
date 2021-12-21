const AWS = require('aws-sdk');

const deleteCandidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    await dynamodb.delete({
        TableName: 'RegistroCandidatos',
        key: {
            id
        }
    }).promise();

    return {
        status: 200,
        body: {
            message: 'candidato eliminado',
        },
    };
}

module.exports = {
    deleteCandidato
}