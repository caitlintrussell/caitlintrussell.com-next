import { FC } from 'react'
import styles from './logo.module.scss'
import Fiore from './svg/fiore'

const Logo: FC = () => (
  <section className={styles.logo}>
    <div className={styles.borderedArea}>
      <div className={styles.fiori}>
        <Fiore stroke="var(--tertiary)" fill="var(--bg)" />
        <div className={styles.name}>
          <h1>
            Caitlin<span>Trussell</span>
          </h1>
        </div>
        <Fiore stroke="var(--tertiary)" fill="var(--bg)" />
      </div>
    </div>
    <h2>frontend software engineer</h2>
  </section>
)

export default Logo


