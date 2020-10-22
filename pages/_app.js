import { Navbar } from 'react-bootstrap'
import '../styles/globals.css'
import NavigationBar from '../pages/Partials/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
