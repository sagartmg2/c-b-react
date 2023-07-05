import Footer from "./Footer"
import Header from "./Header"

function Index(props) {
    return <>
        <Header />
        {
            props.children
        }
        <Footer />
    </>
}
export default Index