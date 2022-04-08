function ListItem(props) {

    return (
        <div>
            <section>
                <h1>{props.flavour.nome}</h1>
                <p>Formas</p>
                <div>
                    {
                        props.flavour.formas.map( forma => (
                            <button onClick={() => props.changePicOnParent(forma.path)} type="button">{forma.nome}</button>
                        ))
                    }                                                                    
                </div>
            </section>
            <hr />
        </div>
    )
}

export default ListItem;