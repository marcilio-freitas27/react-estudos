import '../style/Menu.css';

function Menu(props){
    // para exibir no return é sempre assim: props.menu[0].valor
    return (
        
        <div>{props.menu.map((menu => (
            <>
                <p className={"borda"} key={menu.id}>
                    {menu.valor}
                    <button onClick={
                        ()=>{
                            console.log('apertou!')
                        }
                    }>Click</button>
                </p>
            </>
        )))}</div>
    );
}

export default Menu