import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import JoinOurTeamForm from '../components/joinOurTeamForm'

import utilStyles from '../styles/utils.module.css'
import ownerStyles from '../styles/owners.module.css'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>About Us - Vetted Nutrition</title>
        <link rel="canonical" href="https://vettedtrainers.com/about-the-owners" />
      </Head>
      <body className={ownerStyles.body}>

<section class="bg-white">
      <div class="row py-5 mobile-fix">
      <div class="col-lg-6 aboutVegBlock order-lg-2">

      </div>
        <div class="col-lg-6">
        <div class="columnBody w-75 mx-auto">
          <h2 class="green-header">Our Health Mission</h2>
          <p>Our Mission is to teach the world to Eat better, Feel better, and Live Better! We are spreading the most valuable asset that humans have, knowledge. You will be eating food as long as you are alive, we want you to learn more and get better at it.</p>

          <h2 class="green-header">Experience and Professionalism</h2>
          <p>With years of experience, our nutritional team will assess you and create a custom meal plan that's right for you. We understand the importance of educating you on the "WHY", so you can make informed decisions when selecting food items to put in your body</p>

          <h2 class="green-header">What is a Gut Activist</h2>
          <p>Many of the problems that plague our modern-day society such as; obesity, type-two diabetes, heart disease, and other chronic issues are caused by an imbalance in our guts. Our gut is the "home sweet home" of our immune system. If you have any of these issues you need a Gut Activist to help you make an internal revolution!</p>
        </div>
        </div>

      </div>

</section>



<Footer />

      </body>
    </Layout>
  )
}
