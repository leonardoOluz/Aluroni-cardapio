import styles from './Sobre.module.scss';
import styeleTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massaOne from 'assets/sobre/massa1.png';
import massaTwo from 'assets/sobre/massa2.png';

const imagens = [massaOne, massaTwo];

export default function Sobre() {
    
  return (
    <section>
      <h3 className={styeleTema.titulo}>
                Sobre
      </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt='Casa Aluroni'/>
        <div className={styles.sobreNos__texto}>
          <p>
Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>      
      </div> 
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt='imagem da casa'/>                    
          </div>
        ))}
      </div>
    </section>
  );
}
