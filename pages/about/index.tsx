import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "../../components/Main"

const AboutPage = () => {
    return (
    <div className="flex flex-col min-h-screen">
        <Header/>
            <Main>
                <div>About Page</div>
            </Main>
       <Footer/>
    </div>
    )
}

export default AboutPage