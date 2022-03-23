import Link from 'next/link'



export default function Disclaimer() {
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

            <h1>Disclaimer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio quasi iusto cum aspernatur totam, provident libero beatae at exercitationem. Consequuntur aspernatur eius voluptate expedita iste placeat alias aliquam sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia expedita inventore, consectetur perferendis dicta nemo eligendi, molestiae iusto officia accusantium ratione dolore sint pariatur sequi impedit quod, esse non maiores?</p>

        </div>
    )
}