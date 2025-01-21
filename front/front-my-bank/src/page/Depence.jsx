import React from "react";

function MesDepence() {
    const [nameDepence, setNameDepence] = React.useState('');
    const [priceDepence, setPriceDepence] = React.useState(Number())

    function NameDepence(e) {
        setNameDepence(e.target.value);
    }

    function PriceDepence(e) {
        const inputValue = e.target.value;
    
        
        if (isNaN(Number(inputValue))) {
            alert("Please enter a numbe");
        } else {
            setPriceDepence(Number(inputValue)); 
        }
    }

    function handleCkick() {
        const nameValue = 
    }
    return(
        <div>
            <h1 className="title">Mes Depences</h1>

            <div className="gerezDepence">
                <div>
                <h3>Ajoutez une dépence</h3>

                <form action="">
                    <div className="formDepence">
                        <label htmlFor="name" id="name">Nom de la dépence:</label>
                        <input type="text" name="name" placeholder="Nom de la dépence" onChange={NameDepence} value={nameDepence}/>
                    </div>
                    <div className="formDepence">
                        <label htmlFor="montant" id="montant">Montant:</label>
                        <input type="text" name="montant" placeholder="montant dépencer" onChange={PriceDepence} value={priceDepence}/>
                    </div>
                    <button onClick={handleCkick}>Ajoutez</button>
                    
                </form>
                </div>
                
                <div>
                    <h3>Mes dépence actuel</h3>

                     <div className="mesDepence">
                        <p>Nom de la dépence: <br />{nameDepence}</p>
                        <p>Prix €: <br />{priceDepence}</p>
                     </div>
                    

                    <p>total: </p>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default MesDepence;