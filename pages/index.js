import { Carousel, Form, Button } from 'react-bootstrap'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [y_scroll, setScroll] = useState(0);
  const [contactMessage, setMessage] = useState({
        subject: "",
        message: ""
    });

    function handleChanges(event) {
        const { name, value } = event.target;

        setMessage((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

  function handleSubmit(event) {
      
        if (contactMessage.subject !== "" && contactMessage.message !== "") {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=" + contactMessage.subject + "&to=example@outlook.com&body=" + contactMessage.message);
    
        }
    }
  
  useEffect(() => {
    var img_element = document.getElementById('myImg');
    var text_element = document.getElementById(styles.home_text);
    var features_h1 = document.getElementById('features_h1');
    
    window.onscroll = (e) => {

      if (100 - window.scrollY > 0) {
        // Fade out effect
        img_element.style.filter = 'brightness(' + (100 - window.scrollY) + '%)';
        text_element.style.filter = 'brightness(' + (100 - window.scrollY) + '%)';

        // Movement
        img_element.style.top = 90 - window.scrollY + 'px';
        text_element.style.left = 150 - window.scrollY + 'px';

      } else {
        // Set brightness to 0 after certain point
        img_element.style.filter = 'brightness(0%)';
        text_element.style.filter = 'brightness(0%)';
      }

      if (window.scrollY > 100) {
        // Fade in effect in Features
        features_h1.style.filter = 'brightness(' + (window.scrollY * 0.17) + '%)';
      } else {
        // Set brightness to 0 after certain point
        features_h1.style.filter = 'brightness(0%)';
      }

      setScroll(Number(window.scrollY));
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

      <section id='features' className={styles.features}>
        <div>
          <h1 id='features_h1'>
            NEW FEATURES 
          </h1>
        </div>

        <div className={styles.grid}>
            <div id='feature_card' className={styles.card}>Feature 1</div>
            <div id='feature_card' className={styles.card}>Feature 2</div>
            <div id='feature_card' className={styles.card}>Feature 3</div>
            <div id='feature_card' className={styles.card}>Feature 4</div>
          </div>
      </section>

      {/* -------------------------------PRICING SECTION BELOW-------------------------------*/}

      <section id='testimonials' className={styles.testimonial}>
        
        <h1 style={{fontSize: '5vw'}}>
            OUR CONSUMERS
        </h1>
        
        <Carousel style={{marginTop: '5%'}}>
          <Carousel.Item interval={1000}>
            <img
                   style={{height: '250px', width: '250px', marginBottom: '200px'}}
                    src="/avatar.png"
                    alt="First slide"
                />
            <Carousel.Caption>
              <h3>First Testimonial</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
                   style={{height: '250px', width: '250px', marginBottom: '200px'}}
                    src="/avatar.png"
                    alt="First slide"
                />
            <Carousel.Caption>
              <h3>Second Testimonial</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
                   style={{height: '250px', width: '250px', marginBottom: '200px'}}
                    src="/avatar.png"
                    alt="First slide"
                />
            <Carousel.Caption>
              <h3>Third Testimonial</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>

      {/* -------------------------------CONTACT SECTION BELOW-------------------------------*/}

      <section id='contact' className={styles.contact}>
        
        <h1 style={{textAlign: 'center', fontSize: '5vw', marginBottom: '4%'}}>
          Contact Us
        </h1>
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={contactMessage.subject} onChange={handleChanges} name="subject" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control style={{resize: 'none'}} as="textarea" rows="8" value={contactMessage.message} onChange={handleChanges} name="message" required/>
          </Form.Group>
          <Button type="submit" variant="secondary" onClick={handleSubmit}>Send</Button>{' '}
        </Form>
      </section>

    </div>
  )
}
