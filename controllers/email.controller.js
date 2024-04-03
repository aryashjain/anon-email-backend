import { Email } from "../models/email.model.js"
import mailerService from "../utils/mailerService.js"

const  validateEmail=(email) => {
  //  console.log("email====", email)
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };



// function isValidEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// }
const emailController = async (req,res)=>{
    try {
       const {recieverEmail,recieverName, senderEmail,senderName,message} = req.body;
       //console.log(req.body)
       const valid = validateEmail(recieverEmail);
      // console.log(valid)
       if(!recieverEmail|| !recieverName || !message|| !valid) {
        return res.status(400).json({error:"pls send a valid reciever's email and message"});
       }
       const resp = await  Email.create({
        recieverEmail,
        recieverName,
        senderEmail,
        senderName,
        message
       })
       // after saved to DB lets send it to the email-service
      const resp2 = await mailerService(recieverEmail,message);
     //  console.log(resp2);
       if(!resp || !resp2){
        return res.status(400).json({"err2":error});
       }
      
       return res.status(200).json( resp2);
        
    } catch (error) {
        return res.status(400).json({"err3":error});
    }
} 

export { emailController}