/* Amplify Params - DO NOT EDIT
	API_DREAMCARE_GRAPHQLAPIENDPOINTOUTPUT
	API_DREAMCARE_GRAPHQLAPIIDOUTPUT
	API_DREAMCARE_GRAPHQLAPIKEYOUTPUT
	API_DREAMCARE_PROFILETABLE_ARN
	API_DREAMCARE_PROFILETABLE_NAME
	AUTH_DREAMCARE2120DC55_USERPOOLID
	ENV
	FUNCTION_DDBDETECTCHANGE_NAME
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 import {default as fetch, Request} from 'node-fetch';
 import { createRequire } from 'module';
 const require = createRequire(import.meta.url);
 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient();
 
 const stripelib = require('stripe')('sk_test_51LNLTbCJoL1LHf8UFhm3Ka45Xc0pSwHrDAAGiMnzLiluHXYqpcZicXa3BFnTzyGBf7DsLuDrFTnlO5zrX1ZK9CQ300XvLliC9a');
 var paymentOutput = ""
 var customerList;
 
 //Define from env variables
 const GRAPHQL_ENDPOINT = process.env.API_DREAMCARE_GRAPHQLAPIENDPOINTOUTPUT;
 const GRAPHQL_API_KEY = process.env.API_DREAMCARE_GRAPHQLAPIKEYOUTPUT;
 
 var queryParams = {
     TableName: 'Profile-hra4unxfvram5jeu46au73gsg4-devone',
     IndexName: 'email-index',
     KeyConditionExpression: 'email = :ct',
     ExpressionAttributeValues: {
         ':ct' : 'cnelson139@gmail.com'
     }
 }
 
 var updateParamsFBP = {
     TableName: 'Profile-hra4unxfvram5jeu46au73gsg4-devone',
     Key: {
         'id': '',
     },
     ExpressionAttributeNames: {
         "#FBP": "fee_background_paid",
     },
     ExpressionAttributeValues: {
         ":dt": ''
     },
     UpdateExpression: "SET #FBP = :dt"
 };
 
 var updateParamsFMP = {
     TableName: 'Profile-hra4unxfvram5jeu46au73gsg4-devone',
     Key: {
         'id': '',
     },
     ExpressionAttributeNames: {
         "#FMP": "fee_monthly_paid",
     },
     ExpressionAttributeValues: {
         ":dt": ""
     },
     UpdateExpression: "SET #FMP = :dt"
 };
 
 const emailArray = []
 const amountArray = []
 const createdArray = []
 
 export const handler = async (event) => {
     const paymentIntents = await stripelib.paymentIntents.list({
         limit: 3,
       }).then(function(resp){
           // paymentOutput = vals.data[0].charges.data[0].billing_details.email;
           resp.data.forEach(customer => {
             console.log('Time Created: ', customer.created);
             console.log('CX E-mail: ', customer.charges.data[0].billing_details.email); //Customer e-mail
             console.log('TX Amount: ', customer.charges.data[0].amount); // Transaction acmount
             emailArray.push(customer.charges.data[0].billing_details.email)
             amountArray.push(customer.charges.data[0].amount)
             createdArray.push(customer.created)
             
           });
       });
     
     /////////////////////////////////
     //Iterate through each transaction in array and
     //update DynamoDB table for monthly or background fee
 
     for(var i=0; i< emailArray.length; i++){
         console.log(emailArray[i]);
 
         try{
             //Retrieve item index ID
             queryParams.ExpressionAttributeValues[':ct'] = emailArray[i];
             const result = await docClient.query(queryParams).promise();
             console.log("ID: ", result.Items[0].id)
             
             //Modify specific item
             if(amountArray[i] == 25000){
                 updateParamsFBP.Key['id'] = result.Items[0].id; //Assign ID from query to updateItem params
                 updateParamsFBP.ExpressionAttributeValues[":dt"] = createdArray[i];
                 const modifyCall = await docClient.update(updateParamsFBP).promise();   
             }else if(amountArray[i] == 300000){
                 updateParamsFMP.Key['id'] = result.Items[0].id; //Assign ID from query to updateItem params
                 updateParamsFMP.ExpressionAttributeValues[":dt"] = createdArray[i];
                 const modifyCall = await docClient.update(updateParamsFMP).promise();  
             }
             
         } catch(error) {
             console.log(error);
         }
     }
       
 
     return {
         statusCode: 200,
     //  Uncomment below to enable CORS requests
     //  headers: {
     //      "Access-Control-Allow-Origin": "*",
     //      "Access-Control-Allow-Headers": "*"
     //  }, 
         body: JSON.stringify('Hello from Lambda!'),
         payments: paymentIntents,
         outputconf: paymentOutput,
     };
 };
 
 