import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  useEffect(() => {
    var img_element = document.getElementById('myImg');
    var text_element = document.getElementById(styles.home_text);

    window.onscroll = (e) => {

      if (100 - window.scrollY > 0) {

        img_element.style.filter = 'brightness(' + (100 - window.scrollY) + '%)';
        text_element.style.filter = 'brightness(' + (100 - window.scrollY) + '%)';

        img_element.style.top = 90 - window.scrollY + 'px';
        text_element.style.left = 150 - window.scrollY + 'px';

      } else {
        img_element.style.filter = 'brightness(0%)';
        text_element.style.filter = 'brightness(0%)';
      }
    }

  }, []);

  return (
    <div className={styles.container}>
      
      <Head>
        <title>My Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*-------------------------------HOME SECTION BELOW-------------------------------*/}

      <section id='home' className={styles.home}>
        
        {/* <div id={styles.home_content}> */}
          
          <div id={styles.home_text}>
            <h1>
              Introducing our product!
            </h1>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>  

          <img id='myImg' src='/product.png' />
          
        {/* </div> */}

      </section>

      {/* -------------------------------FEATURES SECTION BELOW-------------------------------*/}

      <section className={styles.features}>

      </section>

      {/* -------------------------------PRICING SECTION BELOW-------------------------------*/}

      <section>

      </section>

      {/* -------------------------------ABOUT SECTION BELOW-------------------------------*/}

      <section>

      </section>

      {/* -------------------------------CONTACT SECTION BELOW-------------------------------*/}

      <section>

      </section>

    </div>
  )
}
