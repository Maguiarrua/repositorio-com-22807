

const getnameAsync =  async(idPost) => {   //estructura de la funcion

try { //codigo que se ejecuta en caso de que el pedido este bien//

const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//  console.log(resPost);
const post = await resPost.json()
console.log(post)

const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
const user =await respUser.json()
console.log(user)


console.log(`La Persona que escribio el post ${post.id} es ${user.name} ${user.username}`)

} catch (error) { //se ejecuta por defecto del servidor y te redirecciona 

console.log(error)

}

}

getnameAsync(23)