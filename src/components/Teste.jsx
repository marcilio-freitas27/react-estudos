import { Link } from "react-router-dom";
import "../style/Teste.css";

function Teste(){
    return (
        <div>
            <div>Teste</div>
            <Link className="btn-teste" to="/">Home</Link>
        </div>
    );
}

export default Teste;