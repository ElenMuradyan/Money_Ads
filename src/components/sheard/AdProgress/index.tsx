import { Typography, Progress, Flex, Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import { AdMob } from '@capacitor-community/admob';

import './index.css';
import { useEffect } from "react";

const { Title, Text } = Typography;

const AdProgress = () => {
    const { adNumber } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.adsInformation);
    const percent = 50 * 2;

    useEffect(() => {
        const initializeAdMob = async () => {
            try {
                await AdMob.initialize();
                console.log("AdMob initialized successfully.");
            } catch (error) {
                console.error("AdMob Initialization Error:", error);
            }
        };

        initializeAdMob();

        return () => {};
    }, []);

    const handleWatchAd = async () => {
        try {
            await AdMob.showRewardVideoAd();
            alert('You earned a reward!');
        } catch (error) {
            console.error('AdMob Error:', error);
            alert('Failed to load or show ad.');
        }
    };

    return (
        <Flex align="center" justify="space-between" className="ads_section_container">
            <Flex vertical align="center" justify="center" className="ad_text">
                <Title level={4}>Ad Progress</Title>
                <Text>Watched {adNumber}/50 ads today</Text>
            </Flex>
            <Flex gap="small" wrap align="center" vertical className="progress_container">
                <Progress type="circle" percent={percent} format={(percent) => `${percent} %`} className="progress" />
                <Button onClick={handleWatchAd}>Watch An Ad</Button>
            </Flex>
        </Flex>
    );
};

export default AdProgress;
