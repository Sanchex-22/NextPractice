import Head from "next/head"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export default function Layout ({title}) {
    return(
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Practicando Nextjs" />
        </Head>
        
    </>
    )
}