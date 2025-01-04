import { Flex, Typography } from "antd"
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";

import './index.css';
import BackToHome from "../../../components/sheard/BackToHome";

const { Text, Title } = Typography;

const TermsOfService = () => {
    return(
        <Flex vertical className="container">
            <BackToHome/>
            <Title level={3}>Terms of Service</Title>
            <Title level={5}>Effective Date: 04.01.2025</Title>
            <Text>Welcome to Easy Money App! By accessing or using our app, you agree to the following terms and conditions. Please read them carefully before using the service.</Text>
            <Title level={4}>1. General Terms</Title>
            <Title level={5}>1.1 Agreement:</Title>
            <Text>By using our app, you agree to be bound by these Terms of Service (ToS). If you do not agree, please do not use the app.</Text>
            <Title level={5}>1.2 Changes to Terms:</Title>
            <Text>We reserve the right to update or modify these terms at any time. Continued use of the app after any changes indicates your acceptance of the updated terms.</Text>
        
            <Title level={4}>2. Eligibility</Title>
            <Title level={5}>2.1 Age Restriction:</Title>
            <Text>You must be at least 13 years old to use this app. Users under 18 must have parental or guardian consent.</Text>
            <Title level={5}>2.2 Compliance:</Title>
            <Text>You agree to comply with all applicable laws and regulations while using the app.</Text>

            <Title level={4}>3. Earning Rewards</Title>
            <Title level={5}>3.1 Watching Ads:</Title>
            <Text>Users can earn rewards by watching ads provided within the app.</Text>
            <Title level={5}>3.2 Conditions for Rewards:</Title>
            <Text>Ads must be watched completely to receive the reward.Any attempt to manipulate or misuse the ad-watching process will result in account suspension or termination.</Text>
            <Title level={5}>3.3 Reward Limits:</Title>
            <Text> The app may set daily or monthly limits on rewards earned.</Text>

            <Title level={4}>4. Payments</Title>
            <Title level={5}>4.1 Payouts:</Title>
            <Text>Rewards earned will be accumulated in your account and can be withdrawn after reaching the minimum payout threshold.</Text>
            <Title level={5}>4.2 Payment Methods:</Title>
            <Text>Payments will be processed through Idram. Ensure your account information is accurate.</Text>
            <Title level={5}>4.3 Processing Time:</Title>
            <Text>Payments may take up to 7 days to process.</Text>

            <Title level={4}>5. Prohibited Activities</Title>
            <Title level={5}>5.1 Cheating:</Title>
            <Text>Any use of bots, automation, or fraudulent activities to generate rewards is strictly prohibited.</Text>
            <Title level={5}>5.2 Harmful Behavior:</Title>
            <Text>Do not attempt to harm, disrupt, or exploit the app or its services.</Text>

            <Title level={4}>6. Privacy</Title>
            <Title level={5}>6.1 Data Collection:</Title>
            <Text>We collect and use your data in accordance with our Privacy Policy.</Text>
            <Title level={5}>6.2 Third-Party Ads:</Title>
            <Text>Ads provided within the app may come from third-party networks. By using the app, you agree to their terms and policies.</Text>

            <Title level={4}>7. Account Suspension or Termination</Title>
            <Title level={5}>7.1 Violation of Terms:</Title>
            <Text>Accounts found violating these terms may be suspended or permanently banned.</Text>
            <Title level={5}>7.2 Fraudulent Activity:</Title>
            <Text>Any fraudulent behavior will result in forfeiture of rewards.</Text>

            <Title level={4}>8. Limitation of Liability</Title>
            <Title level={5}>8.1 No Guarantees: </Title>
            <Text>We do not guarantee the availability of ads or specific earnings.</Text>
            <Title level={5}>8.2 App Downtime:</Title>
            <Text>We are not liable for losses incurred due to app downtime or technical issues.</Text>

            <Link to={ROUTE_PATHS.CABINET}><Title level={4}>9. Contact Us</Title></Link>
        </Flex>
    )
};

export default TermsOfService;