import { Avatar, Badge, Flex, Typography } from "antd";
import avatar from '../../../core/Images/avatar.jpg';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state-management/store";
import { BellOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { fetchNotifications } from "../../../state-management/redux/slices/notifications";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../../core/utilis/constants/firestorePathNamex";
import { fetchUserData, setReadNotifications } from "../../../state-management/redux/slices/userData";

import './index.css';

const { Title } = Typography;

const Header = () => {
    const { userName, uid, readNotifications } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.userData);
    const { notifications } = useSelector((store: RootState) => store.notifications);
    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();

    const clearNotification = async () => {
        navigate(ROUTE_PATHS.NOTIFICATIONS);
        const createDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
        await updateDoc(createDoc, {
            readNotifications: notifications.length,
        });
        dispatch(setReadNotifications(notifications.length));
        dispatch(fetchUserData());
    };

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    return(
    <Flex align="center" justify="space-between" className="header_container">
        <Flex align="center" className="avatar_container">
            <Avatar src={avatar} size='large'></Avatar>
            <Title level={5}>{userName}</Title>
        </Flex>
        <Badge dot={notifications.length > readNotifications}>
    <BellOutlined
        onClick={clearNotification}
        className="icon"
    />
    </Badge>
    </Flex>
    )
}

export default Header;