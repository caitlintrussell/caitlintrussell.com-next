import { FC } from 'react'
import Fiore from '../components/svg/fiore'
import style from './work.module.scss'

const Work: FC = () => (
  <section className={style.container}>
    <div className={style.contentArea}>
      <div className={style.fioreLeft}>
        <h2>Employment</h2>
        <Fiore stroke="var(--primary)" fill="var(--bg)" />
      </div>
      <div className={style.projects}>
        <h3>Intuit - April 2020 to Sept 2022</h3>
        <p>
          <em>Software Engineer II & Senior Software Engineer</em>
        </p>
        <hr />

        <h3>CourseKey - Sept 2018 to April 2020</h3>
        <p>
          <em>Frontend Software Engineer</em>
        </p>
        <hr />

        <h3>Fullstack Academy - June 2018 to Jan 2020</h3>
        <p>
          <em>Mentor & Teaching Fellow</em>
        </p>
        <hr />
      </div>
    </div>
    <div className={style.contentArea}>
      <div className={style.fioreRight}>
        <Fiore stroke="var(--primary)" fill="var(--bg)" />
        <h2>Projects</h2>
      </div>
    </div>
  </section>
)

export default Work
