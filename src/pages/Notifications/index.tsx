import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state-management/store";
import { useEffect } from "react";
import { fetchNotifications } from "../../state-management/redux/slices/notifications";
import { Flex, Typography } from "antd";

import './index.css';

const { Text, Title } = Typography;

const Notifications = () => {
    const { notifications } = useSelector((store: RootState) => store.notifications)
    const dispatch =  useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchNotifications());
    }, []);

    return(
        <Flex className="notifications" vertical> 
            {notifications.map(item => {                
                return(
                    <div className="notification_container">
                        <Title level={5}>{item.message}</Title>
                        <Text className="text">{item.date}</Text>
                    </div>
                )
            })}
        </Flex>
    )
}

export default Notifications;