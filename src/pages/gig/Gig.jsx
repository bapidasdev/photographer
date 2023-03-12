import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import "./Gig.scss"

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR GRAPHICS & DESIGN</span>
          <h1>Iwill create ai generated art for you</h1>

          <div className="user">
            <img src="/img/15.jfif" alt="" className='pp' />
            <span>Bapi das</span>
            <div className="stars">
              <img src="/img/19.jfif" alt="" />
              <img src="/img/19.jfif" alt="" />
              <img src="/img/19.jfif" alt="" />
              <img src="/img/19.jfif" alt="" />
              <img src="/img/19.jfif" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src="/img/15.jfif" alt="" />
            <img src="/img/15.jfif" alt="" />
            <img src="/img/15.jfif" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi, tenetur dolorum commodi perferendis
            officiis alias quia temporibus sint nobis itaque incidunt eligendi eveniet veniam nesciunt autem quo fugiat voluptatum reiciendis
            Nulla ipsam, iste illum dolore repellat sint doloremque magni earum. Consectetur ratione, tempore sequi accusamus rerum fugiat esse
            ipsam quas perspiciatis quam enim nesciunt. Accusamus in illum autem odit.
            Laudantium dolore voluptatem amet sed obcaecati veniam numquam consequuntur commodi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. A aliquam delectus ad eum consequuntur ratione ea libero iure corporis odit,
            aliquid velit dolore sint corrupti natus cumque nesciunt cum quos nam dolores dolor porro? Aspernatur, distinctio
            officiis. Ratione, inventore ullam incidunt illum sequi laboriosam accusantium itaque rem voluptatibus. Dolore id
            natus magnam consequuntur. Molestias reprehenderit hic reiciendis, tempore culpa soluta distinctio quasi!
            Perspiciatis beatae velit nisi repellendus sapiente eveniet ratione.</p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="/img/15.jfif" alt="" />
              <div className="info">
                <span>Bapi Das</span>
                <div className="stars">
                  <img src="/img/19.jfif" alt="" />
                  <img src="/img/19.jfif" alt="" />
                  <img src="/img/19.jfif" alt="" />
                  <img src="/img/19.jfif" alt="" />
                  <img src="/img/19.jfif" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>

                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2023</span>
                </div>

                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>

                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>

                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>My name is Bapi, I enjoy creating AI generated art in my
                spare time. I have a lot of
                experience using the AI program
                and tht means I 
                to prompt the AI with to get a agreat and incredibly
                detailed result.</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviws</h2>
            <div className="item">
              <div className="user">
                <img src="/img/15.jfif" alt="" className='pp' />
                <div className="info">
                  <span>Bapi Das</span>
                  <div className="country">
                    <img src="/img/14.jfif" alt="" />
                    <span>INDIA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <span>5</span>
              </div>
              <p>My name is Bapi, I enjoy creating AI generated art in my
                spare time. I have a lot of
                experience using the AI program
                and tht means I know what
                to prompt the AI with to get a agreat and incredibly
                detailed result.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                    <img src="/img/3.jfif" alt="" />
                  <span>Yes</span>
                    <img src="/img/21.jfif" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/img/15.jfif" alt="" className='pp'/>
                <div className="info">
                  <span>Bapi Das</span>
                  <div className="country">
                    <img src="/img/14.jfif" alt="" />
                    <span>INDIA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <span>5</span>
              </div>
              <p>My name is Bapi, I enjoy creating AI generated art in my
                spare time. I have a lot of
                experience using the AI program
                and tht means I know what
                to prompt the AI with to get a agreat and incredibly
                detailed result.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                    <img src="/img/3.jfif" alt="" />
                  <span>Yes</span>
                    <img src="/img/21.jfif" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/img/15.jfif" alt="" className='pp' />
                <div className="info">
                  <span>Bapi Das</span>
                  <div className="country">
                    <img src="/img/14.jfif" alt="" />
                    <span>INDIA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <img src="/img/19.jfif" alt="" />
                <span>5</span>
              </div>
              <p>My name is Bapi, I enjoy creating AI generated art in my
                spare time. I have a lot of
                experience using the AI program
                and tht means I know what
                to prompt the AI with to get a agreat and incredibly
                detailed result.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                    <img src="/img/3.jfif" alt="" />
                  <span>Yes</span>
                    <img src="/img/21.jfif" alt="" />
                  <span>No</span>
                </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image besed on a description that you give me</p>
          <div className="details">
            <div className="item">
            <img src="/img/12.jfif" alt="" />
            <span>2 days  Delivery</span>
            </div>
            <div className="item">
            <img src="/img/12.jfif" alt="" />
            <span>3 Revision</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/2.jfif" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/2.jfif" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/2.jfif" alt="" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Contiue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
