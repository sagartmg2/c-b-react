import Footer from "./Footer"
import Header from "./Header"

function Index(props) {
    return <>
        <Header cartCount = {props.cartCount}  />
        {
            props.children
        }
        <Footer />
    </>
}
export default Index