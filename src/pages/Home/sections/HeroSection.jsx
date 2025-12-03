import '../../../styles/HeroSection.css';

function HeroSection() {
    return(
        <section>
            <div className="container">
                <div className="hero-information">
                    <h1>Unlock the Web's Full Potential</h1>
                    <h4>“Making the internet comfortable for everyone.”</h4>
                    <p>AccessEase provides add-ons for a personalized experience. Overcomes color blindness, dyslexia, ADHD with smart, seamless integration.</p>
                    <div className="cta-buttons">
                        <button className="get-started">Get Started Free</button>
                        <button className="video">Watch the Video</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="hero-image.png" alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;