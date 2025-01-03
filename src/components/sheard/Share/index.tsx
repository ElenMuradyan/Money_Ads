import React from "react";
import { Button, Modal, notification } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

import './index.css';

const ShareButton: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const url = "https://yourapp.com";  // The URL to share

    const showShareModal = () => {
        setIsModalVisible(true);
    };

    const handleShareViaFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        setIsModalVisible(false);
        notification.success({ message: "Shared on Facebook!" });
    };

    const handleShareViaTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
        setIsModalVisible(false);
        notification.success({ message: "Shared on Twitter!" });
    };

    const handleShareViaWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
        setIsModalVisible(false);
        notification.success({ message: "Shared on WhatsApp!" });
    };
    const handleShareViaMessenger = () => {
        window.open(`https://www.messenger.com/t/?link=${encodeURIComponent(url)}`, "_blank");
        setIsModalVisible(false);
        notification.success({ message: "Shared on Messenger!" });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button 
                icon={<ShareAltOutlined />} 
                onClick={showShareModal} 
                type="primary"
            >
                Share
            </Button>

            <Modal
                title="Share This App"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Button type="primary" block onClick={handleShareViaFacebook}>
                    Share on Facebook
                </Button>
                <Button type="primary" block onClick={handleShareViaTwitter} style={{ marginTop: 10 }}>
                    Share on Twitter
                </Button>
                <Button type="primary" block onClick={handleShareViaWhatsApp} style={{ marginTop: 10 }}>
                    Share on WhatsApp
                </Button>
                <Button type="primary" block onClick={handleShareViaMessenger} style={{ marginTop: 10 }}>
                    Share on Messenger
                </Button>
            </Modal>
        </>
    );
};

export default ShareButton;
