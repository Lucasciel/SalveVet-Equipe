import styles from "./Servicos.module.css"
import Cards from './Componentes/page'

export default function Servicos() {
    return (
        <div className={styles.servicosAll}>
            <div className={styles.servicos}>
                <img src="/Serviços/nossosServiços.svg" alt="" />
            </div>

            <div className={styles.oqueFazemos}>
                <img src="/Serviços/partoCachorro.svg" alt="" />

                <div>
                    <h2>O que fazemos</h2>
                    <p>"Sed ut perspiciatis unde omnis iste <br />
                     natus error sit voluptatem <br />
                     accusantium doloremque <br />
                     laudantium, totam rem aperiam, <br />
                     eaque ipsa quae ab illo inventore <br />
                     veritatis et quasi architecto</p>
                </div>
                <img src="/Serviços/homemLoiroVeterinario.svg" alt="" />
            </div>

            <div className={styles.cardServicos}>
                <Cards
                title="Para Veterinários"
                imageSrc="/Serviços/mulherVeterinaria.svg"
                altText="Mulher Veterinária"
                description={<>
                    Sed ut perspiciatis unde omnis <br />
                    iste natus error sit voluptatem <br />
                    accusantium doloremque <br />
                    laudantium, totam rem aperiam, <br />
                    eaque ipsa quae ab illo <br />
                    inventore veritatis et quasi <br />
                    architecto
                </>}/>

                <Cards
                title="Para Tutores"
                imageSrc="/Serviços/filhoteDormindo.svg"
                altText="Filhote Dormindo"
                description={<>
                    Sed ut perspiciatis unde omnis <br />
                    iste natus error sit voluptatem <br />
                    accusantium doloremque <br />
                    laudantium, totam rem aperiam, <br />
                    eaque ipsa quae ab illo <br />
                    inventore veritatis et quasi <br />
                    architecto
                </>}/>
            </div>

        </div>

    )
}