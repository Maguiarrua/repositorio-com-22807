


const getnameAsync = async(idPost) =>{

try {
    const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/4${idPost}`)//primero guardar en una variable el pedido de informacion
console.log(resPost)


    
// otra variable convertida en json//


//codigo que se va a ejecutar en que caso que el pedido este todo bien sino se ejecuta el catch que viene por defecto 

} catch (error) {
    console.log(error)// me va a mostrar por consola el error
}


}

getnameAsync(18)

async function pepe(url) {
    return 2 + 2;
}

