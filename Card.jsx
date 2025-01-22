import profilepic from "./assets/profiledazai.jpg"
function Card(){

    return(
    <dev className="card"> 
        <img className="cardimg"src={profilepic} alt="profile"></img>    
        <h2 className="cardname">Dazai</h2>
        <p className="cardtext">I am making a project using react,express,mongodb</p>
    </dev>

    );


}
export default Card