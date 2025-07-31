import '../styles/components/informationcontainer.sass';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';


const InformationContainer = () => {
    return (
        <section id="information-container">
            <div className="info-item">
                <AiFillPhone className="phone-icon" />
                <div>
                    <h3>Phone</h3>
                    <p>+55 11 9 9999-9999</p>
                </div>
            </div>
            <div className="info-item">
                <AiOutlineMail className="email-icon" />
                <div>
                    <h3>Email</h3>
                    <p>i.augustomz@gmail.com</p>
                </div>
            </div>
            <div className="info-item">
                <AiFillEnvironment className="location-icon" />
                <div>
                    <h3>Location</h3>
                    <p>Campinas, SP, Brazil</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer;