import React from "react";

function MesDepence() {
    const [nameDepence, setNameDepence] = React.useState('');
    const [priceDepence, setPriceDepence] = React.useState('');
    const [expenses, setExpenses] = React.useState([]); 


    function NameDepence(e) {
        setNameDepence(e.target.value);
    }

    function PriceDepence(e) {
        const inputValue = e.target.value;

        if (isNaN(Number(inputValue))) {
            alert("Please enter a number");
        } else {
            setPriceDepence(inputValue);
        }
    }

    function handleClick(e) {
        e.preventDefault(); 

        if (nameDepence.trim() === '' || priceDepence.trim() === '') {
            alert("Please fill in all the fields.");
            return;
        }

        
        setExpenses([
            ...expenses,
            { name: nameDepence, price: Number(priceDepence) },
        ]);

        
        setNameDepence('');
        setPriceDepence('');
    }

    return (
    
        <div>
            <h2>Attention à mettre une categorie</h2>
            <h1 className="title">Mes Dépenses</h1>

            <div className="gerezDepence">
                <div>
                    <h3>Ajoutez une dépense</h3>

                    <form>
                        <div className="formDepence">
                            <label htmlFor="name" id="name">Nom de la dépense:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nom de la dépense"
                                onChange={NameDepence}
                                value={nameDepence}
                            />
                        </div>
                        <div className="formDepence">
                            <label htmlFor="montant" id="montant">Montant:</label>
                            <input
                                type="text"
                                name="montant"
                                placeholder="Montant dépensé"
                                onChange={PriceDepence}
                                value={priceDepence}
                            />
                        </div>
                        <button onClick={handleClick}>Ajoutez</button>
                    </form>
                </div>

                <div>
                    <h3>Mes dépenses actuelles</h3>
                    <div className="mesDepence">
                        {expenses.map((expense, index) => (
                            <p key={index}>
                                Nom: {expense.name} | Prix: {expense.price} €
                            </p>
                        ))}
                    </div>
                    <p>
                        Total:{" "}
                        {expenses.reduce((total, expense) => total + expense.price, 0)} €
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MesDepence;