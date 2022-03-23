import Link from 'next/link'
export default function Contact() {
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
            <h1>Contact Us</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="fullname"
                     placeholder="Full Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    )
}