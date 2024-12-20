import { Typography, Form, Input, Button, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state-management/store";
import { inputValues } from "../../../typescript/interfase/inputValues";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { fetchUserData, setIsAuth, setLoading } from "../../../state-management/redux/slices/userData";

const { Title } = Typography;

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = async (values: inputValues) => {        
        try{
            dispatch(setLoading(true));
            const { email, password } = values;
            await signInWithEmailAndPassword(auth, email, password);
            dispatch(setIsAuth(true));
            navigate(ROUTE_PATHS.CABINET);
            await dispatch(fetchUserData());
        }catch(e){
            console.log(e);
            notification.error({
                message:'Invalid Login Credentials', 
            })
        }finally{
            dispatch(setLoading(false));
        }
    };

    return(
        <div className="formContainer">
        <Title level={3}>Sign In</Title>
        <Form layout="vertical" onFinish={handleLogin} form={form} autoComplete="off">
            <Form.Item
            label='Email'
            className="formItem"
            name='email'
            rules={[{
                required: true,
                message: 'Enter your email!'
            }]}
            >
                <Input className="Input" placeholder="Enter your email" type="email"/>
            </Form.Item>
            <Form.Item
            label='Password'
            className="formItem"
            name='password'
            rules={[{
                required: true,
                message: 'Enter your password!'
            }]}
            >
                <Input.Password className="Input" placeholder="Enter your password"/>
            </Form.Item>
            <Button type="primary" htmlType="submit">Sign in</Button>
            <Title level={5}>Don't have an account?</Title>
            <Link to={ROUTE_PATHS.REGISTER}>Sign up</Link>
        </Form>
        </div>    )
}

export default Login;