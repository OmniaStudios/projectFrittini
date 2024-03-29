var nodemailer = require('nodemailer');
const keys = require('../config/keys'); 


/* Definizione delle funzioni disponibili */
exports.get_home = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina home*/
    res.status(200).render('index');
}

exports.get_menu = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina menu*/
    res.status(200).render('menu');
}

exports.get_menu_family = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina menufamily*/
    res.status(200).render('menufamily');
}

exports.get_products = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina products*/
    res.status(200).render('products');
}

exports.get_aboutus = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina workwithus*/
    res.status(200).render('aboutus');
}

exports.get_work = (req, res) => {
    /* Impostazione dello stato HTPP success e rendering della pagina workwithus*/
    res.status(200).render('workWithUs');
}


exports.new_number = (req, res) => {
    console.log('ciao ' + req.body.phone);
    res.status(200).render('index');
}

exports.post_work = (req, res) =>{
    const [name, surname, mail, content] = [req.body.name, req.body.surname, req.body.mail, req.body.content];

    const transporter = nodemailer.createTransport({ 
        host: 'smtp.libero.it',
        port: 465,
        secure: true, // use SSL 
        service: 'libero',
        auth: {
            user: 'ilpicciottosaluzzo@libero.it',
            pass: keys.mailPassword
        }
    })

    const mailOptions = {
        from: '"IlPicciottoApplyNoticer" <ilpicciottosaluzzo@libero.it>',
        to: 'ilpicciottosaluzzo@libero.it',
        subject: `Hai una nuova richiesta di lavoro da ${name} ${surname}`,
        html: `<p><strong>${name} ${surname}</strong> ti ha inviato una richiesta di lavoro.</p>
                <p>Il testo della sua domanda è:</p>
                <p>${content}</p>
                <p>Se interessato, ricontattalo alla mail <i href= "mailto:${mail}">${mail}</i></p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error)
            console.log(error);
        else {
            console.log('email sent: ' + info.response); 
            res.redirect('/workwithus');
        }  
    })
}


