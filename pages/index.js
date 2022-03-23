import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a class="navbar-brand" >Career Counselling</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link href="/">
                <a class="nav-link">Home</a>
              </Link>

            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link">Contact Us</a>
              </Link>

            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link" href="#">About Us</a>
              </Link>

            </li>
            <li class="nav-item">
              <Link href="/disclaimer">
                <a class="nav-link" href="#">Disclaimer</a>
              </Link>

            </li>
          </ul>
        </div>
      </nav>


      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://www.baccalaureateclass.com/newimages/CAREER-COUNSELLING.png" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://www.edumilestones.com/blog/images/career-counselling-importance.png" alt="Second slide" />
          </div>
          {/* <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Third slide"/>
    </div> */}


        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <blockquote class="blockquote text-center">
        <p class="mb-0">Enter Your Details</p>

      </blockquote>

      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Full Name</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone Number</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="9000000000" />
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlInput1">Current Education</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex - 12th PCM" />
        </div>
        <button type="submit" class="btn btn-primary mb-2 mt-2">Suggest Me</button>


      </form>




    </div>
  )
}
