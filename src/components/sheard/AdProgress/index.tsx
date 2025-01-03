import { Typography, Progress, Flex, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";

import './index.css';

const { Title, Text } = Typography;

const AdProgress = () => {
    const { adNumber } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.adsInformation)
    let percent = 40 * 2;
    
    return(
        <Flex align="center" justify="space-between" className="ads_section_container"> 
            <Flex vertical align="center" justify="center" className="ad_text">
            <Title level={4}>Ad Progress</Title>
            <Text>Watched {adNumber}/50 ads today</Text>
            </Flex>
            <Flex gap="small" wrap align="center" vertical className="progress_container">
                <Progress type="circle" percent={percent} format={(percent) => `${percent} %`} />
                <Button>Watch An Ad</Button>
            </Flex>
        </Flex>
    )
};

export default AdProgress;