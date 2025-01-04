import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { Typography } from "antd";

import './index.css';

const { Title } = Typography;

const BackToHome = () => {
    return (
        <div>
            <Link to={ROUTE_PATHS.CABINET} className="back-to-home">
                <Title level={5}><FaArrowLeft /> HOME</Title>
            </Link>
        </div>
    );
}

export default BackToHome;