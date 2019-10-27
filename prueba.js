const accountSid = 'AC96616f7922c6b302fc9b5d111adcb19c';
const authToken = '4c7da2f2c8706bc257447f5acd8d7a16';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Si te llega este mensaje me avisas v:',
     from: '+12012583654',
     to: '+5215533492727'
   })
  .then(message => console.log(message.sid));