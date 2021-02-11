import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    // const iconcr = <FontAwesomeIcon icon={copyright}/>
    return (
        <div>
            <div className="footer">
                <FontAwesomeIcon icon={faCopyright} />
                RicSny productions
            </div>
        </div>
    );
};
export default Footer;
