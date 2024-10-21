import gitHub from '../../img/icons/gitHub-black.svg';
import './styles.css';

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
            <img src={gitHub} alt=""/>
            GitHub repo
        </a>
    );
};
 
export default BtnGitHub;