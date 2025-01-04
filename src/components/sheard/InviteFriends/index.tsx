import { Button, Flex, notification, Typography } from "antd";
import ShareButton from "../Share";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";

import './index.css';

const { Title, Text } = Typography;

const InviteFriends = () => {
    const { refferalCode } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.userData);

    const handleCopyLink = () => {
        const linkToCopy = import.meta.env.VITE_FIREBASE_APP_LINK;

        navigator.clipboard.writeText(linkToCopy) 
            .then(() => {
                notification.success({
                    message: 'Link copied!',
                    description: `The link ${linkToCopy} has been copied to your clipboard.`,
                });
            })
            .catch((error) => {
                notification.error({
                    message: 'Error copying link',
                    description: `There was an error copying the link: ${error.message}`,
                });
            });
    };

    const handleCopyCode = () => {
        const codeToCopy = refferalCode;

        navigator.clipboard.writeText(codeToCopy) 
            .then(() => {
                notification.success({
                    message: 'Link copied!',
                    description: `The code ${codeToCopy} has been copied to your clipboard.`,
                });
            })
            .catch((error) => {
                notification.error({
                    message: 'Error copying link',
                    description: `There was an error copying the link: ${error.message}`,
                });
            });
    };

return (
    <Flex gap={10} vertical align="center" justify="center" className="invite_container">
        <Title level={4}>Invite And Earn</Title>
        <Text>Share your referral code: {refferalCode}</Text>
        <Flex gap={10} className="button-container">
            <ShareButton />
            <Button onClick={handleCopyLink}>Copy Link</Button>
            <Button onClick={handleCopyCode}>Copy Code</Button>
        </Flex>
    </Flex>
)
};

export default InviteFriends;