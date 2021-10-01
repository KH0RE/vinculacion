const { response, request } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req = request, res = response) => {
    let body = req.body; 

    let config = nodeMailer.createTransport({
     
        host : 'smtp.gmail.com',
        post : 587,
        auth : {
            user : 'pwebaloag@gmail.com',
            pass : 'carlOs12345'
        }
    })

    const opciones = {
        from: [{
            name : 'Web Aloag - Correo',
            address : 'pwebaloag@gmail.com'
        }],
        subject : body.asunto,
        to : 'davidquinaluisa96@gmail.com',
        text : body.mensaje,
        sender : body.email
      
   
    };

    config.sendMail(opciones, function(error, result ){
        
        if (error) return res.json({
            ok: false,
            msg : error
        });

        return res.json({
            ok: true,
            msg: result
        })
    })

}


module.exports = {
    envioCorreo
}