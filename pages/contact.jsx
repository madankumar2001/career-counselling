import Link from 'next/link'
export default function Contact() {
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
            <h1>Contact Us</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="fullname"
                     placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone Number</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}