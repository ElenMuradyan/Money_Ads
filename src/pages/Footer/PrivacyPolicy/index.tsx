import { Flex, Typography } from "antd"
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";

import BackToHome from "../../../components/sheard/BackToHome";

const { Text, Title } = Typography;

const PrivacyPolicy = () => {
    return(
        <Flex vertical className="container">
            <BackToHome/>
            <Title level={3}>Privacy Policy</Title>
            <Title level={5}>Effective Date: 04.01.2025</Title>
            <Text>We value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. Please read it carefully.</Text>
            <Title level={4}>1. Information We Collect</Title>
            <Title level={5}>1.1 Personal Information</Title>
            <Text>We may collect the following personal information: Name, Email address, Payment details (for payouts), Age verification (if required)</Text>


            <Title level={5}>1.2 Non-Personal Information</Title>
            <Text>We collect data that does not directly identify you, including:
                    Device information (e.g., device model, operating system)
                    Usage data (e.g., time spent on the app, features used)
                    Ad interaction data (e.g., ads watched, rewards earned)
            </Text>

            <Title level={5}>1.3 Data from Third Parties</Title>
            <Text>If you sign in using a third-party service (e.g., Google, Facebook), we may collect information associated with your account, such as your profile name and email address.</Text>

            <Title level={4}>2. How We Use Your Information</Title>
            <Text>We use your information to:
                Provide, maintain, and improve the app.
                Track rewards earned and process payouts.
                Personalize your experience, including ad recommendations.
                Communicate with you about updates, promotions, or issues.
                Detect and prevent fraudulent or unauthorized activity.
            </Text>

            <Title level={4}>3. Sharing Your Information</Title>
            <Text>We do not sell your personal information. However, we may share your data with:</Text>
            <Title level={5}>3.1 Service Providers</Title>
            <Text>Third-party vendors who assist with app functionality, such as ad networks, payment processors, and analytics services.</Text>
            <Title level={5}>3.2 Legal Compliance</Title>
            <Text>We may disclose your information if required by law or to protect our rights, users, or operations.</Text>

            <Title level={4}>4. Third-Party Ads and Links</Title>
            <Text>Our app may display ads provided by third-party networks. These networks may use cookies or similar technologies to serve ads based on your interests. Please review their privacy policies for more information.</Text>

            <Title level={4}>5. Data Storage and Security</Title>
            <Title level={5}>5.1 Data Storage</Title>
            <Text>Your data is stored securely on Firebase.</Text>
            <Title level={5}>5.2 Security Measures</Title>
            <Text>We use industry-standard security measures to protect your information. However, no system is 100% secure, and we cannot guarantee absolute security.</Text>

            <Title level={4}>6. Your Rights</Title>
            <Text>Depending on your location, you may have the following rights:
                Access your data.
                Request correction or deletion of your data.
                Opt-out of data collection for personalized ads.
                Withdraw consent for data processing (where applicable).
            </Text>

            <Title level={4}>7. Children’s Privacy</Title>
            <Text>We do not knowingly collect data from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.</Text>

            <Title level={4}>8. Changes to This Policy</Title>
            <Text>We may update this Privacy Policy from time to time. Significant changes will be communicated through the app.</Text>

            <Link to={ROUTE_PATHS.CABINET}><Title level={4}>9. Contact Us</Title></Link>
        </Flex>
    )
};

export default PrivacyPolicy;