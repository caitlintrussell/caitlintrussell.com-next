import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { FC } from 'react'
import styles from './navigation.module.scss'
import CDT from './svg/cdt'

// add event listener for scroll up (lower height) and scroll down (increase height to start)

interface IProps {
  reducePadding: boolean
}

const Navigation: FC<IProps> = ({ reducePadding }) => {
  const router: NextRouter = useRouter()

  const calcLinkClassname = (linkName: string) => {
    const { pathname } = router
    return `${styles.link} ${pathname.includes(linkName) ? styles.active : ''}`
  }
  return (
    <header className={`${styles.header} ${true ? styles.lessPadding : ''}`}>
      <nav className={styles.navBar}>
        <Link aria-label="Home" href="/" passHref legacyBehavior>
          <a>
            <CDT stroke="var(--primary)" fill="var(--primary)" />
          </a>
        </Link>
        <div>
          <Link href="/about" legacyBehavior>
            <a className={calcLinkClassname('about')}>about</a>
          </Link>
          <Link href="/work" legacyBehavior>
            <a className={calcLinkClassname('work')}>work</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={calcLinkClassname('contact')}>contact</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navigation
