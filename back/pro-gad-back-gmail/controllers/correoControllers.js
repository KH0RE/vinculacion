const { response, request } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req = request, res = response) => {
    let body = req.body; 

    let config = nodeMailer.createTransport({
     
        host : 'smtp.gmail.com',
        post : 587,
        auth : {
            /* Correo del GAD EJEMPLO */
            user : 'pwebaloag@gmail.com',
            pass : 'carlOs12345'
        }
    })

    const opciones = {
        from: [{
            name : 'Web Aloag - Correo',
            address : 'pwebaloag@gmail.com'
        }],
        subject : body.asunto, /* TEMA A TRATAR EJEMPLO */
        cc : [  
            body.email, /* CORREO DEl USUARIO */
            'pwebaloag@gmail.com'
        ], 
      
        text : body.mensaje + 
               ' ' +
               ' "......Gracias por Contactarnos pronto te estaremos dando una respuesta"' ,
       
    
      
      
    
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