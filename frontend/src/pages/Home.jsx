import React from 'react'

export default function Home() {
  return (
    <>
      <main className='wrapper'>
        <div>
          <p className='text-fs-md'></p>
          <h1>Find Your Dream Home Today</h1>
          <p className='text-fs-md'></p>

          <form>
            <div>
              <input type='email' name='email' maxLength='256' placeholder='Enter your email' required></input>
              <input type='submit' data-wait='Please wait...' value='Get started'></input>
            </div>
          </form>

          <div>
            <img src='#' alt='greenestate_hero' loading='eager' />
          </div>
        </div>
      </main>

      <section className='wrapper'>
        <h2>Find Your Dream Home with Ease</h2>
        <div className='dream-section'>
          <div className='dream__card'>
            <svg>
              <path>
              </path>
            </svg>
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
          </div>
          <div className='dream__card'>
            <svg>
              <path>
              </path>
            </svg>
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
          </div>
          <div className='dream__card'>
            <svg>
              <path>
              </path>
            </svg>
            <h5>Explore Property Listings</h5>
            <p className='text-fs-base'>Our user-friendly search functionality allows you to easily find properties that match your criteria.</p>
          </div>
        </div>
      </section>

      <section className='wrapper'>
        <span>Luxury</span>
        <h2>Featured</h2>
        <p className='text-fs-md'>Discover our curated selection of luxury properties.</p>
        <div className='arrow-left'></div>
        <div className='arrow-right'></div>

        <div className='featured-slider'>
          <div className='featured__card'>
            <div className='properties-img'>
              <div className='properties__button'>
                <p className='text-fs-sm'></p>
                <svg><path></path></svg>
                <p className='text-fs-sm'>1/5</p>
              </div>
              <svg><path></path></svg>
            </div>

            <div className='properties__location'>
              <svg><path></path></svg>
              <span>Churchill Walk, London</span>
            </div>

            <div className='properties__price'>
              <span>$ <Number>2500</Number> </span>
              <span>Offer Available</span>
            </div>

            <div className='properties__heading'>
              <h3>3 bedroom detached house for sale</h3>
              <p>2bed 1bath 818sqdr 5,619sqft lot</p>
            </div>

          </div>

        </div>
      </section>

      <section className='wrapper'>
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
    </>

  )
}
