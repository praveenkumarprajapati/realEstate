import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark d-flex flex-column justify-content-center align-items-center p-5 ">
            <h6 className="lead text-light">Copyright &#169; All right reserved @praveenPrajapati</h6>
            <div className="d-flex justify-content-around align-items-center">
                <a href="https://github.com/pksoftcore" target="blank" className="p-3 m-4" >
                    <GitHubIcon></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/praveen-prajapati-17b69b196" className="p-1 m-1">
                    <LinkedInIcon></LinkedInIcon>
                </a>
            </div>
        </div>
    );
}

export default Footer;