import { useContext } from "react"
import Header from "../components/Header"
import { CartContext } from "../contexts/CartContext"

interface LayoutOptions {
  title: string
  children: React.ReactNode
}

export default function Main({ title, children }: LayoutOptions) {
  const cart = useContext(CartContext);
  
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div className="">

        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}