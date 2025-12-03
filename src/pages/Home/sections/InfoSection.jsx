import '../../../styles/InfoSection.css';

function InfoSection() {
    return (
        <section>
            <div className="info-container">
                <div className="info-header">
                    <h2>What is AccEase?</h2>
                    <p>AccesEase is an essential browser add-on dedicated to creating a truly inclusive internet experience for everyone. </p>
                </div>
                <div className="info-items-container">
                    <div className="info-item">
                        <img src="accessibility-icon.png" alt="Accessibility Icon" />
                        <p>Accessibility First</p>
                    </div>
                    <div className="info-item">
                        <img src="accessibility-icon.png" alt="Accessibility Icon" />
                        <p>Accessibility First</p>
                    </div>
                    <div className="info-item">
                        <img src="accessibility-icon.png" alt="Accessibility Icon" />
                        <p>Accessibility First</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;