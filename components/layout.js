import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import MediaQuery from 'react-responsive'

const name = 'Vetted Nutrition'
export const siteTitle = 'Vetted Nutrition'
import Footer from './footer'
import Slider from './slider'
import MobileMenu from './mobileMenu'

export default function Layout({ children, home }) {
  return (
    <html lang="en" className={styles.container}>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/vt-favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />


        <meta
          name="description"
          content="Vetted Nutrition is a group of personal trainers that give you dedicated workout and training programs to help you achieve your fitness goals."
        />
        <meta
          property="og:image"
          content="http://vettednutrition.org/images/vn-white-logo.png"
        />
        <meta
          property="og:image:secure_url"
          content="http://vettednutrition.org/images/vn-white-logo.png"
        />
        <meta property="og:title" content="Vetted Nutrition" />
        <meta property="og:type" content="website" />

        <meta property="og:description" content="Vetted Trainers is a group of experienced personal trainers that create dedicated workout and training programs to help you achieve your fitness goals." />
        <meta property="og:url" content="https://vettednutrition.org" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Vetted Nutrition" />
        <meta name="twitter:description" content="Personal Nutrition programs tailored to your fitness needs" />
        <meta name="twitter:image" content="http://vettednutrition.org/images/vn-white-logo.png" />
        <meta name="twitter:site" content="@TrainersVetted" />
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0095/9894.js" async="async"></script>

      </Head>

      <header className={styles.header}>

      <MobileMenu />


<MediaQuery minDeviceWidth={768}>
        {home ? (
          <>

            <Link href="/" ><img
              src="/images/vn-black-logo.jpg"
              className={`${styles.headerHomeImage} `}
              alt={name}
            /></Link>
            <div class="headerSpacer"></div>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Home</a>
              </Link>
            </h2>


            <h2 className={utilStyles.headingLg}>
              <Link href="/about-us">
                <a className={utilStyles.colorInherit}>About</a>
              </Link>
            </h2>

            <h2 className={utilStyles.headingLg}>
              <Link href="/general-training-intake">
                <a className={` ${utilStyles.colorInherit} ${utilStyles.navButton} `}>Contact Us</a>
              </Link>
            </h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/vn-white-logo.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Home</a>
              </Link>
            </h2>


            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Services</a>
              </Link>
            </h2>



            <h2 className={utilStyles.headingLg}>
              <Link href="https://calendly.com/vettednutrition/go-time-onboarding">
                <a className={utilStyles.colorInherit}>Contact Us</a>
              </Link>
            </h2>
          </>
        )}

        </MediaQuery>
      </header>



      <main>{children}

        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7981288.js"></script>

      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </html>


  )
}
