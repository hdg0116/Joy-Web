import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as s from '../styles/styles';
import axios from 'axios';

export default function LoginPage(props) {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login',{
                "username": data.username,
                "password": data.pw,
            });
            setIsLogin(true);
            console.log(response);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage);
            navigate('/');
            } catch (error) {
                console.error(error);
            }
    }

    const onSubmit = (data) => {
        console.log(data);
        if (data) {
            handleLogin(data);
        }
    };

    return (
        <s.MainWrapper>
            <s.Wrapper2>
                <s.Container onSubmit = {handleSubmit(onSubmit)}>
                    <s.Title>Login</s.Title>

                    <s.InputBox type='text'  
                        placeholder='아이디를 입력해주세요'
                        {...register('username', {required: '아이디를 입력해주세요!', pattern: {
                            value: /^[a-zA-Z0-9가-힣\s]*$/,
                            message: '아이디는 문자열이어야 합니다.'
                        }})}></s.InputBox>
                    {errors.username && <s.ErrorMessage>{errors.username.message}</s.ErrorMessage>}
                    
                    <s.InputBox type='text' 
                        placeholder='비밀번호를 입력해주세요'
                        {...register('pw', {required: '비밀번호를 입력해주세요!', 
                        minLength: {
                            value: 4,
                            message: '비밀번호는 최소 4자리 이상이어야 합니다.'
                        }, 
                        maxLength: {
                            value: 12,
                            message: '비밀번호는 최대 12자리까지 가능합니다.'
                        }, 
                        validate: {
                            combination: value => {
                                const numberRegex = /\d/.test(value);
                                const letterRegex = /[a-zA-Z]/.test(value);
                                const specialCharRegex  = /[~!@#$%^&*()_+|<>?:{}]/.test(value);
                                return numberRegex && letterRegex && specialCharRegex || '비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요.';
                            }
                        }
                    })}></s.InputBox>
                    {errors.pw && <s.ErrorMessage>{errors.pw.message}</s.ErrorMessage>}

                    <s.SubmitButton type='submit'>로그인</s.SubmitButton>
                </s.Container>
            </s.Wrapper2>
        </s.MainWrapper>
    );
}