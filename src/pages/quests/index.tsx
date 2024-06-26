import styles from '@/styles/modules/Quests.module.scss';

const Quests = () => {
  return <>
    <header className={styles.header}>
      Квесты
      <span>Скоро</span>
    </header>
    <main className={styles.content}>
      <img src="/quests.svg" alt="" className={styles.img}/>
      <h3>Уже совсем скоро...</h3>
      <p>Мы сразу напишем тебе, когда откроется новый и загадочный мир квестов!</p>
    </main>
  </>
}

export default Quests