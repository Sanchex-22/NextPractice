import Navbar from "./navbar"
import Footer from "./footer"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
