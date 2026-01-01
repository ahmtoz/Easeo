import "../styles/valuesSection.css";
import ValueOne from "../../../assets/images/value1.png";
import ValueTwo from "../../../assets/images/value2.png";
import ValueThree from "../../../assets/images/value3.png";

function ValuesSection() {
    return (
        <section>
            <div className="values-section">
                <h2>Our Values</h2>
                <div className="values-list">
                    <ul>
                        <li>
                            <img src={ValueOne} alt="Integrity Icon" />
                            <div className="divider"></div>
                            <h3>Mission</h3>
                            <p>We uphold the highest standards of integrity in all of our actions.</p>
                        </li>
                        <li>
                            <img src={ValueTwo} alt="Innovation Icon" />
                            <div className="divider"></div>
                            <h3>Vision</h3>
                            <p>We foster innovation to create value for our customers.</p>
                        </li>
                        <li>
                            <img src={ValueThree} alt="Teamwork Icon" />
                            <div className="divider"></div>
                            <h3>Values</h3>
                            <p>We work together, across boundaries, to meet the needs of our customers.</p>
                        </li>
                    </ul>
                </div>
                <p>
                    That’s all about us.
                    <br />
                    Feel free to say hi! 
                </p>
            </div>
        </section>
    );
}

export default ValuesSection;