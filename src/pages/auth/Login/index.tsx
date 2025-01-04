import { Typography, Form, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state-management/store";
import { inputValues } from "../../../typescript/interfase/inputValues";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../../services/firebase";
import { fetchUserData, setLoading } from "../../../state-management/redux/slices/userData";
import { GoogleOutlined } from "@ant-design/icons";
import { doc, setDoc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utilis/constants/firestorePathNamex";
import { generateReferralCode } from "../../../core/helpers/refferalCode";

const { Title } = Typography;

const Login = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<AppDispatch>();

    const handleGoogleSignUp = async () => {
        const currentDate = new Date();
        const lastFixedDate = `${String(currentDate.getDate()).padStart(2, '0')}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${currentDate.getFullYear()}`;

        try{
            dispatch(setLoading(true));
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const { uid, displayName, email } = user;

            const createDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
            await setDoc(createDoc, {
                uid, userName: displayName || 'Anonymous', email, readNotifications: 0,  balance: 0,  adsInformation: {
                    history: [],
                    adNumber: 0,
                    lastFixedDate: lastFixedDate
                },
                refferalCode: generateReferralCode(),
            })
            dispatch(fetchUserData());
        }catch{
            notification.error({
                message: 'Google Sign-In Error',
            });
        }finally{
            dispatch(setLoading(false));
        }
    };    

    const handleLogin = async (values: inputValues) => {        
        try{
            dispatch(setLoading(true));
            const { email, password } = values;
            await signInWithEmailAndPassword(auth, email, password);
            dispatch(fetchUserData());
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
        <Button 
            type="primary" 
            icon={<GoogleOutlined />}  
            onClick={handleGoogleSignUp}
            >
            Sign Up with Google
            </Button>

        </div>    )
}

export default Login;