import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";


const mailerService= async (reciever,message)=>{
   const sender=process.env.email
const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

console.log('senderr=== ',sender)
console.log('message=== ',message)

const sentFrom = new Sender(sender, "Your Friend");

const recipients = [
  new Recipient(reciever, "YOUR NAME WILL COME HERE")
];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("TRING TRING TRING")
  .setText(`${message}`)
 

 const resp= await mailerSend.email.send(emailParams);
  return resp;
 console.log(resp);
}

export default mailerService