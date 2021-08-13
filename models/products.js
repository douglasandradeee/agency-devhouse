const {uuid} = require('uuidv4')

let productsList =[
    {
        id:"id",
        name:"Blog",
        description:"Blog pessoal para compartilhar artigos",
        image:"https://br.freepik.com/vetores-gratis/blogar-divertido-criacao-de-conteudo-streaming-online-videoblog-jovem-fazendo-selfie-para-rede-social-compartilhando-feedback-estrategia-de-autopromocao-ilustracao-vetorial-de-metafora-de-conceito_10782771.htm#page=1&query=blog&position=2"
    },
    {
        name:"",
        description:"",
        image:""
    },
    {
        name:"",
        description:"",
        image:""
    },
]

const modelProducts = {
    addProduct: (name, description, image) => {
        const newProduct = {
            id: uuid(),
            name,
            description,
            image
        }
        return products.push(newProduct)
    },
    
    deleteProduct: (id) => {
        const newProductList = productsList.filter((product) => product.id != id)

        if(newProductList.length >= productsList.length) return false

        productsList = newProductList
        return true
    }
}

module.exports = {productsList, modelProducts}