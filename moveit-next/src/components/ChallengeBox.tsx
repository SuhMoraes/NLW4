import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox(){
 const contexData = useContext(ChallengesContext)
 console.log(contexData);

  const hasActiveChallenge = true;




  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
           <header>Ganhe 400 xp  </header>

           <main>
             <img src="icons/body.svg" alt="" />
             <strong>Novo desafio</strong>
             <p>Beba água</p>
           </main>

           <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            > 
              Falhei
              </button>
            <button
             type="button"
             className={styles.challengeSucceededButton}
            >
              Completei
            </button>
           </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Upp" />
          Avance e level completando desafios.
        </p>
      </div>
      )}
    </div>
  )
}
