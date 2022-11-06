import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import Footer from '../components/footer'
import Slider from '../components/slider'

import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Vetted Nutrition - Home</title>
        <link rel='canonical' href='https://vettednutrition.org/' />

      </Head>
      <main className={homeStyles.body}>

        <section className=' py-5 introSectionHome'>
        <div class="mobileSpacer d-md-none pt-5"></div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 text-center opacity-block'>
                <img className='mx-auto img-fluid w-75' src='/images/vn-white-logo.png' alt='Woman doing barbell squats in front of a mirror with a personal trainer' />
                <h3>Our Mission is to help the world
<br />
Eat Better, Feel Better, and Live Better.</h3>
                <a className='btn btn-alt btn-lg' href='https://calendly.com/vettednutrition/go-time-onboarding'>Learn More</a>

              </div>
              <div className='col-md-6 heroBannerVeg d-none d-md-flex' />
            </div>
          </div>
        </section>

        <section className="servicesHeaderBlock text-center ">

        <h2 className="py-5">Services</h2>

        </section>
        <section>
          <div className='row'>
            <div className='col-md-6 px-0'>
              <img className='mx-auto img-fluid w-100' src='/images/ModelonScanner_Longshot.jpg' alt='Woman doing barbell squats in front of a mirror with a personal trainer' />
            </div>
            <div className='col-md-6 px-0'>
              <div className='container d-flex justify-content-center align-items-center h-100 flex-column w-75 py-5'>
                <h2 className='text-light mt-2 mb-3'>Styku Body Scan</h2>
                <p>We start with objective data. The Styku scanner uses a platform that rotates and an infrared scanner to make a 3d model of you. This gives you the most accurate body composition, within 1% error of a DEXA scan. Lets know where we started, so we know where we are going. This option is currently available in Frederick Maryland.</p>
                <a className='btn btn-cta btn-lg' href='https://calendly.com/vettednutrition/go-time-onboarding'>Learn More</a>

              </div>
            </div>
          </div>

          <div className='row'>
          <div className='col-md-6 px-0 order-md-2'>
            <img className='mx-auto img-fluid w-100' src='/images/Butt Math (3).png' alt='Woman doing barbell squats in front of a mirror with a personal trainer' />
          </div>

            <div className='col-md-6 px-0'>
              <div className='container d-flex justify-content-center align-items-center h-100 flex-column w-75 py-5'>
                <h2 className='text-light mt-2 mb-3'>Core Concepts</h2>
                <p>Time for your customized meal plan! Your Vetted Nutrition Practitioner will sit down with you to create a customized meal plan with your goals and gut sensitivity in mind. We use proprietary systems like "Butt Math" to teach you simple ways to make good decisions with your food. It is ESSENTIAL to complete this step to run any of our programs.</p>
                <a className='btn btn-cta btn-lg' href='https://calendly.com/vettednutrition/go-time-onboarding'>Learn More</a>

              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col-md-6 px-0'>
              <img className='mx-auto img-fluid w-100' src='/images/vh-group-edited.jpg' alt='Woman doing barbell squats in front of a mirror with a personal trainer' />
            </div>
            <div className='col-md-6 px-0'>
              <div className='container d-flex justify-content-center align-items-center h-100 flex-column w-75 py-5'>
                <h2 className='text-light mt-2 mb-3'>Go-Time Groups</h2>
                <p>Go-time groups are small groups that utilize your Core Concepts to achieve your weight loss and body composition goals. One of our passionate practitioners will be guiding you through your nutritional journey on a daily basis. These programs last from 2 to 3 months long. Are you Ready to Change your Life?</p>
                <a className='btn btn-cta btn-lg' href='https://calendly.com/vettednutrition/go-time-onboarding'>It's Go Time!</a>

              </div>
            </div>
          </div>

        </section>

        <section className={homeStyles.mail}>
          <div className={homeStyles.overlay}>
            <div class="py-5">
              <h3>Keep up with your fitness goals</h3>
              <p>Enter your email to join our mailing list and receive the latest training videos, excercises, promotions, and more. </p>

              <HubspotForm />

            </div>

            <div />
          </div>
        </section>

        <section className='testimonialsSection bg-white'>
            <div class="row">
                <div class="col-md-4 testimonialColumn px-5 py-4 d-flex flex-column align-items-center align-content-center justify-content-center text-center">
                <div class="testimonialsBody w-75">
                    <img class="img-fluid mx-auto quoteImg w-50" src='images/quotation-mark.png' />
                    <h3><strong>Johannes B, MD</strong></h3>
                    <img class="img-fluid testimonialImg w-50 mx-auto my-4" src="images/johannes-testimonial.png" />
                    <p>VN changed my Life! I started with them to correct an immune issue and ended up losing 70lbs! I no longer have sleep apnea, people treat me differently, and it's so easy to move!</p>
                    </div>
                </div>

                <div class="col-md-4 testimonialColumn px-5 py-5 d-flex flex-column align-items-center align-content-center justify-content-center text-center">
                <div class="testimonialsBody w-75">
                    <img class="img-fluid mx-auto quoteImg w-50" src="images/quotation-mark.png" />
                    <h3><strong>Deborah M, CO</strong></h3>
                    <img class="img-fluid testimonialImg" src="" />
                    <p>I started with Vetted Nutrition because a friend of mine had told me that they helped her increase her bone density. Zach sat down with me and made a plan, which I followed, and now I have osteopenia, instead of osteoporosous! </p>
                    </div>
                </div>

                <div class="col-md-4 testimonialColumn px-5 py-5 d-flex flex-column align-items-center align-content-center justify-content-center text-center">
                <div class="testimonialsBody w-75">
                    <img class="img-fluid mx-auto quoteImg w-50" src="images/quotation-mark.png" />
                    <h3><strong>Cynthia W, FL</strong></h3>
                    <img class="img-fluid testimonialImg" src="" />
                    <p>I was plagued with symptoms from an auto immune disease that I have and I heard from a family member that VN could help me. They explained to my gut controls my immune response and now I know what causes the onset of symptoms. Thank you VN!</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

      </main>
    </Layout>
  )
}
