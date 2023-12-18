class ProductManager {

    constructor(){

        this.products = []

    }

    getProducts = () => {

        return this.products

    }

    genId = () => {

        /*let id = Math.random()*100 //así se genera un número random, está multiplicado por 100 para que no me dé 0,...

        return id*/

        const counter = this.products.length

        if(counter === 0){

            return 1
        }else {

            return (this.products[counter-1].id)+1 //Acá se toma la longitud del array y se suma 1. 
            
        }

    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {

            console.error("Ingrese todos los datos")
            return

        }else {

            const productFilter = this.products.find(e => e.code === code)
            const id = this.genId()

            if(!productFilter){

            const newProduct = {

                id: id,
                title, 
                description, 
                price, 
                thumbnail, 
                code, 
                stock

            }

            return this.products.push(newProduct)

            }else {

                console.error("El código ya existe")
            }
        }
    }

    getProductById = (id) => {

        const productFound= this.products.find(e => e.id == id)

        if(!productFound){

            console.warn("No encontrado")
            return

        }else {

            return productFound
        }


    }
}

const productmanager = new ProductManager()

productmanager.addProduct("Pelota fútbol", "Pelota de la selección nacional de fútbol", 12, "url", "code1", 20)
productmanager.addProduct("Raqueta tennis", "Raqueta Wilson", 13, "url", "code2", 10)
productmanager.addProduct("Mesa de pool", "Mesa para profesionales y apasionados del pool", 14, "url", "code3", 15)
productmanager.addProduct("Remera fútbol", "Remera de la selección nacional de fútbol", 15, "url", "code4", 45)

//Objeto completo.
console.log(productmanager.getProducts())

//Producto no encontrado.
console.log(productmanager.getProductById(6))

//Producto encontrado
console.log(productmanager.getProductById(2))

