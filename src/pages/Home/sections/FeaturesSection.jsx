import AddOnElement from "../../../components/UI/AddOnElement";
import './../../../styles/featuresSection.css';

function FeaturesSection() {
  return (
    <section>
        <div className="features-container">
            <div className="features-header">
                <h2>Look at our add - ons/extension</h2>
            </div>
            <div className="features-items-container">
                <AddOnElement
                img=""
                altText="feature1"
                heading="Color Blindness"
                text="Adjusts colors and contrast for clear distinction of all webpage elements."
                btnText="Get Add-On"
                />
                <AddOnElement
                img=""
                altText="feature2"
                heading="Dyslexia"
                text="Reformats text with specialized fonts and spacing for easier reading."
                btnText="Soon"
                />
                <AddOnElement
                img=""
                altText="feature3"
                heading="Keyboard Nav"
                text="Enables full, mouse-free website navigation using only the keyboard."
                btnText="Soon"
                />
            </div>    
        </div>
    </section>
  );
}

export default FeaturesSection;