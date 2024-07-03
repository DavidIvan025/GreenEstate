import React from 'react'
import Button from '../components/ui/Button'
import { motion } from 'framer-motion'
import { containerMotion } from '../services/providers/componentsMotion'

export default function Home() {
  return (
    <>
      <main className='glb-Wrapper'>
        <div className='hc-Background grid grid-cols-1 lg:grid-cols-2 items-center rounded-xl'>
          <motion.div
            className='flex flex-col space-y-6 md:pl-8 md:py-28'
            {...containerMotion}
          >
            <p className='text-fs-md'>Welcome to Greenestates</p>
            <h1 className='font-bold'>Find Your Dream Home Today</h1>
            <p className='text-fs-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

            <form>
              <div>
                <input type='email' name='email' maxLength='256' placeholder='Enter your email' required></input>
                <input type='submit' data-wait='Please wait...' value='Get started'></input>
              </div>
            </form>
          </motion.div>

          <div>
            <img className='bg-cover object-cover aspect-[1/1]' src='images/img.jpg' alt='greenestate_hero' loading='eager' />
          </div>
        </div>
      </main>

      <section className='glb-Wrapper'>
        <h3 className='font-bold text-center'>Find Your Dream Home with Ease</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
          <div className='flex flex-col space-y-5'>
            <img src='./images/house-svgrepo-com.svg' alt="explore_property" width="35" height="35" />
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
          </div>
          <div className='flex flex-col space-y-5'>
            <img src='./images/house-svgrepo-com.svg' alt="explore_property" width="35" height="35" />
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
          </div>
          <div className='flex flex-col space-y-5'>
            <img src='./images/house-svgrepo-com.svg' alt="explore_property" width="35" height="35" />
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
            <Button intent="secondary" size="medium" >Primary button </Button>
          </div>
        </div>
      </section>

      <section className='glb-Wrapper'>
        <div className='flex flex-col space-y-6'>
          <span className='font-bold'>Luxury</span>
          <h2>Featured</h2>
          <div className='flex items-center'>
            <p className='text-fs-md grow'>Discover our curated selection of luxury properties.</p>
            <div className='cc-Button drop-shadow-sm'>
              <svg className='w-6 h-6 stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M15 7L10 12L15 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path></g>
              </svg>
            </div>
            <div className='cc-Button drop-shadow-sm'>
              <svg className='w-6 h-6 stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path></g>
              </svg>
            </div>
          </div>
        </div>
        <div className='featured-slider'>
          <div className='featured__card min-h-[450px] w-full relative'>
            <img className='absolute rounded-3xl object-cover object-center aspect[1/2] max-w-full' src="images/img.jpg" alt="feature_1" />
            <div className='properties-img'>
              <div className='properties__button inline-flex gap-3 bg-black rounded-full p-2'>
                <p className='text-fs-sm text-white'>Recently Added</p>
                <svg className='w-5 h-5 stroke-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  </path></g>
                </svg>
                <p className='text-fs-sm text-white'>1/5</p>
              </div>
              <svg className='w-5 h-5 stroke-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path></g>
              </svg>
            </div>

            <div className='properties__location flex ml-2'>
              <svg className='w-5 h-5 stroke-gray' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path> </g>
              </svg>
              <span>Churchill Walk, London</span>
            </div>

            <div className='properties__price flex ml-2'>
              <span>$ <Number>2500</Number> </span>
              <span>Offer Available</span>
            </div>

            <div className='properties__heading flex ml-2'>
              <h3>3 bedroom detached house for sale</h3>
              <p>2bed 1bath 818sqdr 5,619sqft lot</p>
            </div>

          </div>

        </div>
      </section>

      <section className='glb-Wrapper'>
        <span>Our Services</span>
        <div>
          <h2>Explore the myriad ways we can be of assistance.</h2>
          <button>See more</button>
        </div>
        <p>Discover our curated selection of luxury properties.</p>

        <div className='services-list'>
          <div className='services__card'>
            <span className='text-fs-base'>01</span>
            <h4>Buy Properties</h4>
            <p className='text-fs-base'>Discover a wide range of properties available for purchase. Our expert team will guide you through the buying process, ensuring a seamless experience from start to finish.</p>
            <button>Learn More <svg xmlns='http://www.w3.org/2000/svg' width="100%" viewBox='0 0 24 24' fill='none'><path d='M5 12.9983H16.17L11.29 17.8783C10.9 18.2683 10.9 18.9083 11.29 19.2983C11.68 19.6883 12.31 19.6883 12.7 19.2983L19.29 12.7083C19.3827 12.6158 19.4563 12.5059 19.5064 12.3849C19.5566 12.2639 19.5824 12.1342 19.5824 12.0033C19.5824 11.8723 19.5566 11.7426 19.5064 11.6216C19.4563 11.5007 19.3827 11.3908 19.29 11.2983L12.71 4.69827C12.6174 4.60569 12.5075 4.53225 12.3865 4.48214C12.2656 4.43204 12.1359 4.40625 12.005 4.40625C11.8741 4.40625 11.7444 4.43204 11.6235 4.48214C11.5025 4.53225 11.3926 4.60569 11.3 4.69827C11.2074 4.79085 11.134 4.90076 11.0839 5.02173C11.0338 5.14269 11.008 5.27234 11.008 5.40327C11.008 5.5342 11.0338 5.66385 11.0839 5.78481C11.134 5.90578 11.2074 6.01569 11.3 6.10827L16.17 10.9983H5C4.45 10.9983 4 11.4483 4 11.9983C4 12.5483 4.45 12.9983 5 12.9983Z' fill='currentColor'></path></svg> </button>
          </div>

        </div>

      </section>

      <section className='glb-Wrapper'>
        <div>
          <div>
            <img src='' alt='dicover_house' />
          </div>

          <div>
            <h3>Discover the Power of Our Proprietary Market Analysis Tool</h3>
            <p className='text-fs-md'>Gain valuable insights and make informed decisions with our advanced market analysis tool. It provides accurate and up-to-date information to help you navigate the real estate market with confidence.</p>
            <div>
              <svg><path></path></svg> <p className='text-fs-base'>Uncover hidden market trends and opportunities</p>
              <svg><path></path></svg> <p className='text-fs-base'>Make data-driven decisions for successful property transactions</p>
              <svg><path></path></svg> <p className='text-fs-base'>Get personalized support from our dedicated team of experts</p>
              <button>See more</button>
            </div>
          </div>
        </div>
      </section>

      <section className='glb-Wrapper'>
        <h2>Customer Testimonials</h2>
        <p className='text-fs-md'>Read what our clients have to say about us</p>

        <div>
          <div className='testimonials_Card'>
            <svg><path></path></svg>
            <p className='text-fs-base'>We had an exceptional experience with this real estate agency, and we highly recommend their services to others.</p>
            <div>
              <img src="" alt="person_id" />
              <p className='text-fs-base'>John Doe </p>
              <p className='text-fs-base'>CEO, ABC Company</p>
            </div>

          </div>
        </div>

      </section>

      <section className='glb-Wrapper'>
        <div>
          <div>
            <h2>Subscribe to our newsletter</h2>
            <p className='text-fs-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

            <form>
              <div>
                <input type='email' name='email' maxLength='256' placeholder='Enter your email' required></input>
                <input type='submit' data-wait='Please wait...' value='Get started'></input>
              </div>
            </form>
            <p className='text-fs-xs'>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
          </div>

          <div>
            <img src="" alt="newsletter_img" />
          </div>
        </div>
      </section>

      <section className='glb-Wrapper wrapper-Faq'>
        <h2>Frequently Asked Questions</h2>
        <p className='text-fs-md'>Find answers to commonly asked questions about real estate transactions and using our website.</p>

        <div>
          <p className='text-fs-md'>How do I search for properties?</p>
          <p className='text-fs-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div>
          <h4>Still have questions</h4>
          <p className='text-fs-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Contact</button>
        </div>
      </section>

      <section className='glb-Wrapper'>
        <h2>Read our latest articles</h2>
        <button>Browse all articles</button>
        <div className='article'>
          <div className='article-Card'>
            <div>
              <img src="" alt="article_id" />
            </div>
            <div>
              <p className='text-fs-sm'>March 5, 2024 * </p> <p className='text-fs-sm'>5 min read</p>
              <h5>Turning Dreams into Achievable Targets</h5>
              <p className='text-fs-base'>Discuss how virtual reality is revolutionizing the way potential buyers explore</p>
            </div>
          </div>
        </div>
      </section>

      <section className='glb-Wrapper'>
        <h2>Get in touch to schedule avisit to our open house</h2>
        <div>
          <div className='schedule'>
            <form>
              <label>Full name</label>
              <input type="text" name="full_name" id="" />

              <label>Your Email</label>
              <input type="email" name="email" id="" />

              <label>Phone number</label>
              <input type="tel" name="tel" id="" />

              <label>Message</label>
              <input type="text" name="msg" id="" />

              <button>Send Message</button>
            </form>

          </div>
          <div>
            <div className='contactBox'>
              <div><svg><path></path></svg></div>
              <h6>Our Office Location</h6>
              <p className='text-fs-base'>Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United Arab Emirates</p>
            </div>
            <div className='contactBox'>
              <div><svg><path></path></svg></div>
              <h6>Our Office Location</h6>
              <p className='text-fs-base'>Mauris at tincidunt mauris a, nisl mattis eu facilisi</p>
              <p className='text-fs-base'>Suport.airtachx@gmail.com</p>
            </div>
            <div className='contactBox'>
              <div><svg><path></path></svg></div>
              <h6>Our Office Location</h6>
              <p className='text-fs-base'>Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United Arab Emirates</p>
              <p className='text-fs-base'>(414) 946 - 4530</p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
