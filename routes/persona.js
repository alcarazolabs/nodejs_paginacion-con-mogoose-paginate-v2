const router = require('express').Router()
const Persona = require('../model/Personas')


router.post('/registro', async (req, res) => {
    try{
    const reg = await Persona.create(req.body)
        return res.status(201).json({msg: "Registrado correctamente"})

    }catch(error){
        return res.status(202).json({msg: "No se pudo registrar. "+error.message})
    }
    
});

router.get('/paginacion', async (req, res) => {
    console.log("limite: "+req.query.limit)
    console.log("pagina: "+req.query.page)

    const limit = parseInt(req.query.limit, 10) || 10
     let page =  parseInt(req.query.page, 10) || 1
    
    /*
    const opciones = {
        limit: parseInt(req.query.limit, 10) || 10,
        page: parseInt(req.query.page, 10) || 1

    };
    */
    try{
        //1 = asc
        //-1 = desc
          const datos = await Persona.paginate({}, { limit, page, sort: { fecharegistro: -1 } })
        //  const datos = await Persona.paginate({}, opciones )
     
        return res.status(201).json(datos)

    }catch(error){
        return res.status(202).json({msg: "No se puede paginar. "+error.message})
    }

});



module.exports = router;