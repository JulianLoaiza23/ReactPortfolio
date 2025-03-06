import "./Home.scss"

export default function Home() {
    return (
        <>
            <div className="section-ctn" id="home">
                <div className="bg-animation">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="stars4"></div>
                </div>
                <div className="container">
                    <h1> Hey, I'm Julian</h1>
                    <div className ='console-container'>
                        <span id='text'></span>
                        <div className='focus-cursor' id='focusCursor'>&#124;</div>
                    </div>
                    <a className="limited-behavior" href="#gallery">
                        <button> View My Work</button>
                    </a>
                </div>
            </div>
        </>
    )
}