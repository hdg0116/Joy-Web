import {useState} from 'react';
import * as s from '../styles/styles';
import styled from 'styled-components';
import {useNavigate, Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios'

function SignUpForm ()  {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isError, setIsError] = useState('');

    const handleRegister = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/signup',{
                "name": data.name,
                "email": data.email,
                "age": data.age,
                "username": data.username,
                "password": data.pw,
                "passwordCheck": data.pwconfirm,
            });
            setIsSignUp(true);
            console.log(response);
            } catch (error) {
                setIsError(error.response.data.message);
                console.error(error);
                console.log(error.response.data.message);
            }
    };

    const onSubmit = (data) => {
        console.log(data);
        if (data) {
            setIsSignUp(true);
            handleRegister(data);
        } else {
            console.error('회원가입 실패');
        }
    };

    const onLogin = () => {
        navigate('/login');
    };

    return (
        <s.MainWrapper>
            <s.Wrapper2>
                <s.Container onSubmit = {handleSubmit(onSubmit)}>
                    <s.Title>Sign Up</s.Title>

                    <s.InputBox type='text' 
                        placeholder='이름을 입력해주세요'
                        {...register('name', {required: '이름을 입력해주세요!', pattern: {
                        value: /^[a-zA-Z가-힣\s]*$/,
                        message: '이름은 문자열이어야 합니다.'
                    }})}></s.InputBox>
                    {errors.name && <s.ErrorMessage>{errors.name.message}</s.ErrorMessage>}

                    <s.InputBox type='text'  
                        placeholder='아이디를 입력해주세요'
                        {...register('username', {required: '아이디를 입력해주세요!', pattern: {
                            value: /^[a-zA-Z0-9가-힣\s]*$/,
                            message: '아이디는 문자열이어야 합니다.'
                        }})}></s.InputBox>
                    {errors.username && <s.ErrorMessage>{errors.username.message}</s.ErrorMessage>}

                    <s.InputBox type='text'  
                        placeholder='이메일을 입력해주세요'
                        {...register('email', {required: '이메일을 입력해주세요!', pattern: {
                            value: /^\S+@\S+$/i,
                            message: '올바른 이메일 형식이 아닙니다.'
                        }})}></s.InputBox>
                    {errors.email && <s.ErrorMessage>{errors.email.message}</s.ErrorMessage>}

                    <s.InputBox type='text' 
                        placeholder='나이를 입력해주세요'
                        {...register('age', {required: '나이를 입력해주세요!', 
                        validate: {
                            checkNumber: value => /^-?\d+(\.\d+)?$/.test(value) || '숫자로 입력해주세요!',
                            positive: value => parseFloat(value) >= 0 || '나이는 음수가 될 수 없습니다.',
                            integer: value => Number.isInteger(parseFloat(value)) || '나이는 소수가 될 수 없습니다.',
                            minAge: value => parseFloat(value) >= 19 || '미성년자는 가입할 수 없습니다.'
                        }})}></s.InputBox>
                    {errors.age && <s.ErrorMessage>{errors.age.message}</s.ErrorMessage>}
                    
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

                    <s.InputBox type='text' 
                        placeholder='비밀번호 확인'
                        {...register('pwconfirm', {required: '비밀번호를 다시 입력해주세요!', 
                            validate: value => value === getValues('pw') || '비밀번호가 일치하지 않습니다.'
                        })}></s.InputBox>
                    {errors.pwconfirm && <s.ErrorMessage>{errors.pwconfirm.message}</s.ErrorMessage>}

                    <s.SubmitButton type='submit'>제출하기</s.SubmitButton>
                    <s.SubWrapper>
                        <s.SubText>이미 아이디가 있으신가요?</s.SubText>
                        <s.LoginText onClick={onLogin}>로그인 페이지로 이동하기</s.LoginText>
                    </s.SubWrapper>
                </s.Container>
            </s.Wrapper2>

            { isSignUp &&
            <ModalWrapper>
                <Modal>
                    <SuccessText>가입되었습니다!</SuccessText>
                    <ButtonWrapper>
                        <HomeButton to='/'>홈으로</HomeButton>
                        <LoginButton to='/login'>로그인하기</LoginButton>
                    </ButtonWrapper>
                </Modal>
            </ModalWrapper>
            }

            {isError &&
            <ModalWrapper>
                <Modal>
                    <SuccessText>{isError}</SuccessText>
                    <ButtonWrapper>
                        <LoginButton onClick={()=> window.location.reload()}>닫기</LoginButton>
                    </ButtonWrapper>
                </Modal>
            </ModalWrapper>
            }
        </s.MainWrapper>
    );
}

export default SignUpForm;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content : center;
    align-items : center;

    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
    position: relative;
    padding: 1rem;

    display: flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;

    width: 13rem;
    height: 10rem;

    background : white;
    border-radius: 1rem;
    box-shadow: 0rem 0.2rem 0.9rem rgba(0, 0, 0, 0.4);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const HomeButton = styled(Link)`
    display: flex;
    justify-content : center;
    align-items : center;

    padding: 0.3rem;
    margin-right: 2rem;
    color: white;
    height: 1rem;

    background-color: #810000;
    border: none;
    border-radius: 0.3rem;

    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;

    cursor: pointer;
`;

const LoginButton = styled(Link)`
    display: flex;
    justify-content : center;
    align-items : center;

    padding: 0.3rem;
    color: white;
    height: 1rem;

    background-color: #810000;
    border: none;
    border-radius: 0.3rem;

    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;

    cursor: pointer;
`;

const SuccessText = styled.div`
    margin-bottom: 2rem;
`;