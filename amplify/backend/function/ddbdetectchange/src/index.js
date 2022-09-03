/* Amplify Params - DO NOT EDIT
	API_DREAMCARE_GRAPHQLAPIENDPOINTOUTPUT
	API_DREAMCARE_GRAPHQLAPIIDOUTPUT
	API_DREAMCARE_PROFILETABLE_ARN
	API_DREAMCARE_PROFILETABLE_NAME
	AUTH_DREAMCARE2120DC55_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 var aws = require('aws-sdk');
 var ses = new aws.SES({ region: "us-east-1" });
 
 exports.handler = async(event) => {
   var handler = "no"
   var params = {
     Destination: {
       ToAddresses: ["info@dreamcare.co"],
     },
     Source: "info@dreamcare.co",
     Template: "Host_Accept_v1",
     TemplateData: "{}"
   };
   
   try{
     console.log(`EVENT: ${JSON.stringify(event)}`);
     event.Records.forEach(record => {
       params.Destination.ToAddresses = [record.dynamodb.NewImage.email.S]
       if(record.dynamodb.OldImage.profile_status.S == "interview_pending"){
        handler = "yes"
        console.log(record.dynamodb.NewImage.profile_path.S == "host")
        console.log(record.dynamodb.NewImage.profile_status.S == "interview_failed")
        if(record.dynamodb.NewImage.profile_status.S == "interview_successful" && record.dynamodb.NewImage.profile_path.S == "host"){
          params.Template = "Host_Accept_v1"
        };
        
        if(record.dynamodb.NewImage.profile_status.S == "interview_successful" && record.dynamodb.NewImage.profile_path.S == "caregiver"){
          params.Template = "Caregiver_Accept_v1"
        };
        
        if(record.dynamodb.NewImage.profile_status.S == "interview_failed" && record.dynamodb.NewImage.profile_path.S == "host"){
          params.Template = "Host_Reject_v1"
        };
        
        if(record.dynamodb.NewImage.profile_status.S == "interview_failed" && record.dynamodb.NewImage.profile_path.S == "caregiver"){
          params.Template = "Caregiver_Reject_v1"
        };
        


       };
     });
     //return Promise.resolve('Successfully processed DynamoDB record');
   } catch (e) {
     console.log("Error: ", e);
   }
   
   if (handler == "yes"){
    return ses.sendTemplatedEmail(params).promise();
   } else {
    return "no-op";
   };
 };
 