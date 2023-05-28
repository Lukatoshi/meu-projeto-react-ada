import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0)


    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }


    if (contador > 5) {
        return (
            <div>
                <h1>Valor alto!</h1>
                <button onClick={aumentar}>AUMENTAR</button>
                <button onClick={diminuir} >DIMINUIR</button>
            </div>
        )
    }
    return (

        <div className="container">
            <h1>Meu contador: </h1>
            <h3>{contador}</h3>
            {/* {contador > 9 ? <h1>Valor muito grande</h1> : null} */}

            {/* <h3>{contador}</h3>
        <button onClick={aumentar}>Aumentar</button> */}
            <button className={styles.myButton} onClick={aumentar}>AUMENTAR</button>
            <button className={styles.myButton}  onClick={diminuir} >DIMINUIR</button>
        </div>
    )
}