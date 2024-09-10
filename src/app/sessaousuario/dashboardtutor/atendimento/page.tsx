import styles from "./atendimento.module.css"
import Tabela from './componentestendimento/tabela'
import ButtonRoxo from "./componentestendimento/buttonRoxo"
import ButtonVerde from "./componentestendimento/buttonVerde"

export default function Atendimento() {
    return (


        <div className={styles.atendimento}>
            <h1>Atendimento</h1>
            <div>
                <h2>Agendamentos</h2>

                <Tabela></Tabela>

                <div className={styles.areaButtonRoxo}>
                    <ButtonRoxo />
                </div>

                <div className={styles.areaButtonVerde}>
                    <ButtonVerde />
                </div>


            </div>
        </div>
    )
}