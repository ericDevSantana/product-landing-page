import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>My Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*-------------------------------HOME SECTION BELOW-------------------------------*/}

      <section id='home' className={styles.home}>
        
        <div id={styles.home_content}>
          
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

          <img src='/product.jpg' />
          
        </div>

      </section>

      {/* -------------------------------FEATURES SECTION BELOW-------------------------------*/}

      <section className={styles.features}>
<div id={styles.home_content}>
          
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

          <img src='/product.jpg' />
          
        </div>
      </section>

      {/* -------------------------------PRICING SECTION BELOW-------------------------------*/}

      <section>
<div id={styles.home_content}>
          
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

          <img src='/product.jpg' />
          
        </div>
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
