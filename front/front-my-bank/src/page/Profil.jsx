import { Link } from "react-router-dom";


function Profil() {
    return(
        <div>
            <h1 className="title">Bienvenu dans ton profil</h1>
            <Link to="/MesDepence">Gérez mes dépences</Link>
        </div>
    );
}

export default Profil;