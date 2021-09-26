
import styles from '../styles/Home.module.css'
import containerStyles from '../styles/Container.module.css'

import CardPresentationComponent from '../components/CardPresentation/CardPresentationComponent'
import SkillsComponent from '../components/Skills/SkillsComponent'

export default function Home() {
  return (
    <div className={containerStyles.container}>
      <main className={styles.main}>
        <div>
          <CardPresentationComponent />
          <SkillsComponent />
        </div>
      </main>
    </div>
  )
}
