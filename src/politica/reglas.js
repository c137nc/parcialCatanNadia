const politicas = [
    {
        nombre: "longitud minima",
        value: (password) => {
            const cantCaracteres = password.length
            if (cantCaracteres >= 8 ) {
                return true
            }
            else {
                return false
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
            return !password.includes(" ");
        }
    },
    {
        nombre: "caracteres especiales",
        value: (password) => {
            const caracteresEsp = ["!","#","$","%","&","="]
            return caracteresEsp.some(elem => password.includes(elem))

        }

    },
    {
        nombre: "digito numero",
        value: (password) => {
            const numeros = [0,1,2,3,4,5,6,7,8,9]
            return numeros.some(num => password.includes(num))

        }

    },
    {
        nombre: "el ultimo caracter no debe ser especial",
        value: (password) => {
            const caracteresEsp = ["!","#","$","%","&","="]
            const ultimoCaracter = password[password.length - 1]
            return !caracteresEsp.some(c=> ultimoCaracter.includes(c))


        }
    }
]


const contraValidada = (password) => {
    
   return politicas.every(p => p.value(password))
}

const reglasNoCumple = (password) => {
     return politicas.filter((p) => !p.value(password)).map((r) => r.nombre);
}
 


module.exports = {contraValidada, reglasNoCumple}
