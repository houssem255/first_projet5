import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
   
    const { values,attachment } = await req.json();
    console.log(attachment);
    console.log(values);
    
    let transporter = nodemailer.createTransport({
      service : 'gmail' ,
      port: 465, 
      auth: {
        user: 'aissaouihoussemilyes23@gmail.com', 
        pass: 'ehsm oovu hpan tbrp', 
      },
      
    });

    
    let mailOptions;

    if (!attachment) {
      // If no attachment is provided, use this configuration
      mailOptions = {
        from: "aissaouihoussemilyes23@gmail.com", // Sender's email address
        to: "aissaouihoussemilyes23@gmail.com", // Recipient's email address
        subject: 'A ticket has been raised on example.com', // Email subject
        html: `
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Ticket Notification</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                }
                .header {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="header">New Ticket on Your Website</h1>
                <p class="content">
                  A new ticket has been raised on example.com landing site by <strong>${'name'}</strong> (${'email'}).
                </p>
                <p class="content">
                  **Message:**<br>
                  ${'message'}
                </p>
                <p class="footer">
                  &copy; example.com 2024. All rights reserved.
                </p>
              </div>
            </body>
          </html>`,

      };
    } else {
      
      mailOptions = {
        from: "aissaouihoussemilyes23@gmail.com", 
        to: "aissaouihoussemilyes23@gmail.com", 
        subject: 'Resume submission on'+values.email, 
        html: `
          <html>
            <body>
              <h1>Nous contacter</h1>
              <p>A new file has been submitted</p>
              <p>**Votre nom :** ${values.firstname+' '+values.lastname}</p>
              <p>**Votre téléphone:** ${values.number}</p>
              <p>**Nom de Fichier:** ${attachment.name}</p>
              <p>**Message:** ${values.message}</p>
              
            </body>
          </html>
        `,
        attachments: [
          {
            filename: attachment.name, 
            content: attachment.data, 
            encoding : 'base64',
            contentType: attachment.type, 
          },
        ],
      };
    }

    
    const info = await transporter.sendMail(mailOptions);


    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (err) {
    
    console.log(err);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}