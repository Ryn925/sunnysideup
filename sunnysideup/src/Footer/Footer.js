import './Footer.css';

import HomeIcon from '../icons/home.svg'
import FeedIcon from '../icons/feed.svg'
import MessageIcon from '../icons/message.svg'
import AccountIcon from '../icons/account.svg'

function Footer() {
    return (
        <div className='AppFooter'>
            <div className='footer-tab'>
                <img src={HomeIcon} alt="Home Logo" />
            </div>
            <div className='footer-tab'>
                <img src={FeedIcon} alt="Feed Logo" />
            </div>
            <div className='footer-tab'>
                <img src={MessageIcon} alt="Message Logo" />
            </div>
            <div className='footer-tab'>
                <img src={AccountIcon} alt="Account Logo" />
            </div>
        </div>
    );
}

export default Footer;
