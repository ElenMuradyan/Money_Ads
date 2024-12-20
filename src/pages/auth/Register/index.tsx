import { Form, Typography, Input, Button, notification } from "antd";
import { ROUTE_PATHS } from "../../../core/utilis/constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { regexpValidation } from "../../../core/utilis/constants/passwordValidation";
import { inputValues } from "../../../typescript/interfase/inputValues";
import { setLoading } from "../../../state-management/redux/slices/userData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state-management/store";
import { doc, setDoc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../core/utilis/constants/firestorePathNamex";

const { Title } = Typography;

const Register = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [ form ] = Form.useForm();

    const handleRegister = async (values: inputValues) => {  
        const { userName, email, password } = values;
      
        try{
            dispatch(setLoading(true));
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const { uid } = response.user;
            const createDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
            await setDoc(createDoc, {
                uid, userName, email
            });
            form.resetFields();

            navigate(ROUTE_PATHS.LOGIN);
        }catch(e){
            console.log(e);
            notification.error({
                message: 'Invalid Register Credentials'
            })
        }finally{
            dispatch(setLoading(false));
        }
    }
    return(
        <div className="formContainer">
            <Title level={3}>Sign Up</Title>
            <Form layout="vertical" form={form} onFinish={handleRegister} autoComplete="off">
            <Form.Item
            className="userName"
            label='Username'
            name='userName'
            rules={[{
                required:true,
                message: 'Enter the username'
            }]}
            >
                <Input className="Input" placeholder="Username" type="text"/>
            </Form.Item>
            <Form.Item
            className="formItem"
            label='Email'
            name='email'
            rules={[{
                required:true,
                message: 'Enter your email'
            }]}
            >
                <Input className="Input" placeholder="Email" type="text"/>
            </Form.Item>
            <Form.Item
            className="formItem"
            label='Password'
            name='password'
            tooltip={'The password must contain at least 6 to 16 characters, including at least one digit and one special character (e.g., !, @, #, $, %, ^, &, *).'}
            rules={[{
                required:true,
                message:'Enter the password'
            },
            {
                pattern:regexpValidation,
                message:'Too simple password'
            }
            ]}
            >
                <Input.Password className="Input" placeholder="Password"/>
            </Form.Item>
            <Button htmlType="submit" type='primary'>Sign up</Button>
            <Title level={5}>Already have an account?</Title>
            <Link to={ROUTE_PATHS.LOGIN}>Sign in</Link>  
            </Form>
        </div>
    )
}

export default Register;