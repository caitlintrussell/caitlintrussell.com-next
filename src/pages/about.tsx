import Image from 'next/image'
import { FC } from 'react'
import Fiore from '../components/svg/fiore'
import style from './about.module.scss'
import Caitlin from '/public/static/c-crop.jpg'

const About: FC = () => (
  <section className={style.container}>
    <div className={style.introduction}>
      <div className={style.flowerOverlay}>
        <Image src={Caitlin.src} width={300} height={318} />
        <Fiore stroke="var(--tertiary)" fill="transparent" />
      </div>
      <div className={style.description}>
        <h1>nice to meet you</h1>
        <p>
          I'm Caitlin. I'm a frontend software engineer. I spend my working
          hours building performant, accessible and scaleable experiences with
          Typescript and React.
        </p>
        <p>
          I'm of the mind that truly great digital products are the result of
          intentional collaboration -- I love working with a team to reach a
          common goal. And it just so happens that I'm looking for my next one
          right now! If you're searching for a detail-oriented frontend (or
          FE-leaning FS) engineer who thrives in a collaborative environment of
          ownership and autonomy, say hi!
        </p>
      </div>
    </div>
    <div className={style.tldr}>
      <ul>
        <li>
          <strong>location:</strong> Seattle, WA & London, UK
        </li>
        <li><strong>languages:</strong> English (native) & Italian (A2 & learning)</li>
        <li><strong>work env:</strong> intellij in light mode + coffee + music</li>
        <li><strong>forever rewatch:</strong> X-Files & Alias</li>
      </ul>

      <ul>
        <li><strong>drink of choice:</strong> Corpse Reviver no2</li>
        <li><strong>pet:</strong> a mini schnauzer named Myshkin</li>
        <li className={style.nested}>
          <strong>fave books:</strong>{' '}
          <ul>
            <li>Wild Sheep Chase by Haruki Murikami</li>
            <li>The Master and Margarita by Mikhail Bulgakov</li>
            <li>How to Do Nothing by Jenny Odell</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
)

export default About
