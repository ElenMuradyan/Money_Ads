import { Button, Flex, Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import { Link } from "react-router-dom";

import './index.css';
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";

const { Title } = Typography;

const Earings = () => {
    const { balance } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.userData);

    return (
        <Flex vertical align="center" justify="center" className="earings_container">
            <Title level={3}>Earings</Title>
            <Title level={5}>Your Balance: {balance} AMD</Title>
            <Link to={ROUTE_PATHS.HISTORY}><Button>View history</Button></Link>
        </Flex>
    )
};

export default Earings;