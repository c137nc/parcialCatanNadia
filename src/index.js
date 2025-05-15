const express = require ('express')
const app = express()
app.use(express.json())
const usuarios = require ('./data/usuarios.json')

const contraValidada = require ('./politica/reglas')


const PORT = 3000

app.get('/validador' , (req, res) => {
    const noPasan = usuarios.filter(u => !contraValidada(u.password))

    const arrayRta = noPasan.map(u => ({usuario: u.userName, email: u.email}))
    res.status(200).json(arrayRta)

})



app.listen(PORT, () => {
    console.log( `La aplicacion inicio en el puerto ${PORT}`)
});