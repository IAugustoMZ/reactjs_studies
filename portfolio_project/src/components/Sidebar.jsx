import Networks from './Networks';
import Avatar from '../img/photo_mine.jpg';
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Icaro Augusto Maccari Zelioli" />
            <p className="title">AI and Machine Learning Tech Lead</p>
            <Networks />
            <InformationContainer />
            <a href="" className="btn">Download CV</a>
        </aside>
    )
}

export default Sidebar;