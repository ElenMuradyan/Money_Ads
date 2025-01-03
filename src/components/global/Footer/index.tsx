import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { Flex } from "antd";
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

import './index.css';

const Footer = () => {
    return (
        <Flex align="center" justify="center" vertical className="footer">
            <Link to={ROUTE_PATHS.SERVICE}>Terms Of Service</Link>
            <Link to={ROUTE_PATHS.PRIVACYPOLICY}>Privacy Policy</Link>
            <Link to={ROUTE_PATHS.CONTACT}>Contact Us</Link>
            
            <div className="social-links">
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
                </a>
                
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
                </a>
                
                <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
                </a>
                
                {/* <a href="https://t.me/your-profile" target="_blank" rel="noopener noreferrer">
                    <TelegramOutlined style={{ fontSize: '24px', margin: '0 10px' }} />
                </a> */}
            </div>
        </Flex>
    );
};

export default Footer;
