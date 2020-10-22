import { Navbar } from 'react-bootstrap'
import '../styles/globals.css'
import NavigationBar from '../pages/Partials/Navbar'
import Footer from '../pages/Partials/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavigationBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
