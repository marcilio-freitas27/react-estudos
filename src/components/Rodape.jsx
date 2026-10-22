import '../style/Rodape.css';

function Rodape(props){
    console.log(props.rodape);
    return (
        <div className={"text-color-black"}>{props.rodape.map((rodape)=>
                <p key={rodape.id}>{rodape.nome}</p>
            )
        }</div>
    );
}

export default Rodape