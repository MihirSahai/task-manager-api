const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: '', //domain
        subject: 'Thanks for Joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeleteEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: '',
        subject: `Bye, ${name}`,
        text: 'We are sad to see you go! Let us know if we could have done anything better.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}