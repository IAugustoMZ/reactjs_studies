import AboutContainer from './AboutContainer';
import '../styles/components/maincontent.sass';
import ProjectContainer from './ProjectContainer';
import TechnologiesContainer from './TechnologiesContainer';

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectContainer />
        </main>
    )
}

export default MainContent;
