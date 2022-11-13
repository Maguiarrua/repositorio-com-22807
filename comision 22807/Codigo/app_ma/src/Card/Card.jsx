
function Card({nombre,fechaNacimiento,nacionalidad,series,cromo}){
    return(
        <div>
            <h1>{nombre}</h1>
            <p>{fechaNacimiento}</p>
            <p>{nacionalidad}</p>
            <p>{series}</p>
            <small style={{backgroundColor:"pink"}}>{cromo? "este actor es cromo ⭐" : "este actor no es cromo ​😑​"}</small>
        </div>
    )
}
export default Card;
