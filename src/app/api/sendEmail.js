
'use server'
import nodemailer from 'nodemailer';

export default async function SendEmail(values) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'aissaouihoussemilyes23@gmail.com',
                pass: 'ehsm oovu hpan tbrp' 
            },
            secure : false,
        });

        const emailContent = `
        <h1>Hello i'm ${values.firstname+' '+values.lastname}</h1>
        <small>Mon numéro est : <b>${values.number}</b></small>
        <p>My email is ${values.email}</p>
        <p>
            ${values.message}
        </p>
    `;

    let mailOptions = {
        from: values.gmail,
        to: 'aissaouihoussemilyes23@gmail.com', 
        subject: 'Our client', 
        html: emailContent,
        replyTo : values.gmail,
        attachments : [
            {
                filename : values.filename,
                path : values.path
            }
        ]
        
    };
    console.log(values)
    try {
       
        console.log(values.email);
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return {status : 200,message : 'email sended successfuly'}
    } catch (error) {
        console.error('Error sending email: ', error);
        return { message: 'Error sending email', error: error.message };
    }
}


