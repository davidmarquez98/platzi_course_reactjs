import { FaGithubAlt as GitHubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon} from "react-icons/fa";

import './TodoIconos.css'

function TodoIconos(){
    return (
        <>
            <a href='https://github.com/davidmarquez98' target='_blank'>
                <button className='button-icon'>
                    <GitHubIcon className='icono'/>
                </button>
            </a>
            <a href='https://www.linkedin.com/in/david-ariel-marquez/' target='_blank'>
                <button className='button-icon'>
                    <LinkedinIcon className='icono'/>
                </button>
            </a>
        </>
    );
}

export { TodoIconos };
