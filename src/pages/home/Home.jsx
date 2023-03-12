import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trusted/TrustedBy'
import "./Home.scss"
import { cards } from "../../data"
import { projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'



const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5} >
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertipe</h1>
            <div className="title">
              <img src="./img/2.jfif" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>

            <div className="title">
              <img src="./img/2.jfif" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>

            <div className="title">
              <img src="./img/2.jfif" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>

            <div className="title">
              <img src="./img/2.jfif" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>

          </div>
          <div className="item">
            <video src="3./img/.jfif" controls></video>
          </div>
        </div>
      </div>

      {/* ==============one more----------------- */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img src="./img/2.jfif" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/2.jfif" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/2.jfif" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="" alt="" />
            {/* img missing---------------------------- */}
            bapidas
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowScroll={4} >
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>

    </div>
  )
}

export default Home
