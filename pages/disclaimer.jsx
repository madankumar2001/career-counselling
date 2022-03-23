import Link from 'next/link'



export default function Disclaimer() {
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

            <h1>Disclaimer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio quasi iusto cum aspernatur totam, provident libero beatae at exercitationem. Consequuntur aspernatur eius voluptate expedita iste placeat alias aliquam sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia expedita inventore, consectetur perferendis dicta nemo eligendi, molestiae iusto officia accusantium ratione dolore sint pariatur sequi impedit quod, esse non maiores?</p>

        </div>
    )
}