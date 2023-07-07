import { useContext, useEffect } from "react"
import CartModal from "../components/CartModal"
import Header from "../components/Header"
import styles from "../styles/MainLayout.module.scss"
import { AuthContext } from "../contexts/AuthContext"
import { AuthContextInterface } from '../interfaces/AuthContextInterface'
import { useNavigate } from 'react-router-dom';
import ProfileModal from "../components/ProfileModal"

interface LayoutOptions {
  title?: string
  children: React.ReactNode
}

export default function Main({ title, children }: LayoutOptions) {
  const nav = useNavigate();
  const auth = useContext(AuthContext) as AuthContextInterface;

  useEffect(() => {
    if(!auth.loggedIn){
      const path = auth.getAuthPath();
      nav(path);
    }
  }, [auth, nav]);

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
        <CartModal/>
        <ProfileModal />
      </main>
    </>
  )
}