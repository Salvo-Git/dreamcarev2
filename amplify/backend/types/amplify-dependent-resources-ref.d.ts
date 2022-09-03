export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "dreamcare2120dc55": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "dreamcare": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "ddbdetectchange": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "retrievestripepayments": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string",
            "CloudWatchEventRule": "string"
        },
        "dreamcarelayerstripe": {
            "Arn": "string"
        }
    },
    "storage": {
        "s3964b4cdd": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}