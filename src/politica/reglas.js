const politicas = [
    {
        nombre: "longitud minima",
        value: (password) => {
            const cantCaracteres = password.length
            if (cantCaracteres < 8 ) {
                return false
            }
            else {
                return true
            }

        }

    },
    {
        nombre: "longitud maxima",
        value: (password) => {
            const cantCaracteres = password.length
            if (cantCaracteres <=  12 ) {
                return true
            }
            else {
                return false
            }

        }

    },
    {
        nombre: "no espacios en blanco",
        value: (password) => {
            const espacio = password.split(" ")
            if (espacio.length > 0) {
                return false
            }
            else {
                return true
            }

        }

    },
    {
        nombre: "caracteres especiales",
        value: (password) => {
            const caracteresEsp = ["!","#","$","%","&","="]
            return password.some(caracteresEsp)

        }

    },
    {
        nombre: "digito numero",
        value: (password) => {
            const numeros = [0,1,2,3,4,5,6,7,8,9]
            return password.some(numeros)

        }

    },
    {
        nombre: "el ultimo caracter no debe ser especial",
        value: (password) => {
            const caracteresEsp = ["!","#","$","%","&","="]
            const ultimoCaracter = password[password.length - 1]
            return caracteresEsp.some(ultimoCaracter)


        }
    }
]

const contraValidada = (usuario) => {
    return politicas.every(p => p.value(usuario.password))
}

module.exports = contraValidada
