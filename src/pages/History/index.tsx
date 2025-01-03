import { Flex, Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";

const { Text, Title } = Typography;

const History = () => {
    const { history } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo.adsInformation)
    return (
        <Flex>
            {history.map(item => {
                return(
                    <div>
                        <Title level={5}>{item.date}</Title>
                        <Text>{item.balance} AMD</Text>
                    </div>
                )
            })}
        </Flex>
    )
};

export default History;