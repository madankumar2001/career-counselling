import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand" >Career Counselling</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact Us</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" href="#">About Us</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/disclaimer">
                <a className="nav-link" href="#">Disclaimer</a>
              </Link>

            </li>
          </ul>
        </div>
      </nav>


      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image className="d-block w-100" src="https://www.baccalaureateclassName.com/newimages/CAREER-COUNSELLING.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <Image className="d-block w-100" src="https://www.edumilestones.com/blog/images/career-counselling-importance.png" alt="Second slide" />
          </div>
          {/* <div className="carousel-item">
      <img className="d-block w-100" src="" alt="Third slide"/>
    </div> */}


        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <blockquote className="blockquote text-center">
        <p className="mb-0">Enter Your Details</p>

      </blockquote>

      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Full Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Phone Number</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="9000000000" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Current Education</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ex - 12th PCM" />
        </div>
        <button type="submit" className="btn btn-primary mb-2 mt-2">Suggest Me</button>


      </form>




    </div>
  )
}
