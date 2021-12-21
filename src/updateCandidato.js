const AWS = require('aws-sdk');

const updateCandidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const {done} = JSON.parse(event.body);

    await dynamodb.update({

        TableName:'RegistroCandidatos',
        key: {id},
        UpdateExpression: 'set done = :done',
        ExpressionAttributeValues:{
            ':done': done
        },
        ReturnValues: 'ALL_NEW'
    }).promise()

    return{
        status: 200,
        body: JSON.stringify({
            message: 'candidato actualizado correctamente'
        }),
    };
};

module.exports = {

    updateCandidato,
};