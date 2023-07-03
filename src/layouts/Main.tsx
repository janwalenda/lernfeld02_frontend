import Cart from "../components/Cart"
import Header from "../components/Header"
import styles from "../styles/MainLayout.module.scss"

interface LayoutOptions {
  title?: string
  children: React.ReactNode
}

export default function Main({ title, children }: LayoutOptions) {
  return (
    <>
      <Header />
      <main className={styles.mainWrapper}>
        <div style={{
          width: '100%',
          height: '100%',
        }}>
          {!!title && <h1>{title}</h1>}
          {children}
        </div>
        <Cart/>
      </main>
      <footer>

      </footer>
    </>
  )
}