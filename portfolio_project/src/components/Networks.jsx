import '../styles/components/socialnetworks.sass';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialNetworks = [
    { name: 'github', icon: <FaGithub />, url: 'https://github.com/IAugustoMZ'},
    { name: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/icaro-augusto-maccari-zelioli/' },
    { name: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/oficialprofessoricaro/' }
];

const Networks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a 
                    key={network.name} 
                    href={network.url} 
                    id={network.name}
                    className='social-btn'
                >
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default Networks;