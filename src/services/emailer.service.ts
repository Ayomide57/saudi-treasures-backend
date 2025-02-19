import nodemailer from 'nodemailer';
import i18n from 'i18n';
i18n.configure({
    locales: ['En', 'Mn'],
    directory: __dirname + '/locales',
    defaultLocale: 'En',
})

export default {
    deliverEmail: function (dest, subject, body) {
        const transport = nodemailer.createTransport({
            //service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST2,
            port: Number(process.env.EMAIL_PORT2),
            auth: {
              //user: process.env.EMAIL_USER,
              user: process.env.USERNAME,
              pass: process.env.PASSWORD,
            },
          });
    
        const mailOptions = {
          from: process.env.TEST_EMAIL,
          to: dest,
          subject: subject,
          text: body,
        };
    
        transport.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }   
}