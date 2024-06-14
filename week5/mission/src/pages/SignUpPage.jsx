import {useState} from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/background.jpg';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function SignUpForm ()  {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();
    const [signUp, setSignUp] = useState(false);

    const onSubmit = (data) => {
        if (data) {
            console.log(data);
            setSignUp(true);
            alert('가입에 성공했습니다! 홈페이지로 이동합니다.');
            navigate('/');
        } else {
            console.error('회원가입 실패');
        }
    };

    return (
        <MainWrapper>
            <Wrapper2>
                <Container onSubmit = {handleSubmit(onSubmit)}>
                    <Title>Sign Up</Title>

                    <InputBox type='text' 
                        placeholder='이름을 입력해주세요'
                        {...register('name', {required: '이름을 입력해주세요!', pattern: {
                        value: /^[a-zA-Z가-힣\s]*$/,
                        message: '이름은 문자열이어야 합니다.'
                    }})}></InputBox>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <InputBox type='text'  
                        placeholder='이메일을 입력해주세요'
                        {...register('email', {required: '이메일을 입력해주세요!', pattern: {
                            value: /^\S+@\S+$/i,
                            message: '올바른 이메일 형식이 아닙니다.'
                        }})}></InputBox>
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <InputBox type='text' 
                        placeholder='나이를 입력해주세요'
                        {...register('age', {required: '나이를 입력해주세요!', 
                        validate: {
                            checkNumber: value => /^-?\d+(\.\d+)?$/.test(value) || '숫자로 입력해주세요!',
                            positive: value => parseFloat(value) >= 0 || '나이는 음수가 될 수 없습니다.',
                            integer: value => Number.isInteger(parseFloat(value)) || '나이는 소수가 될 수 없습니다.',
                            minAge: value => parseFloat(value) >= 19 || '미성년자는 가입할 수 없습니다.'
                        }})}></InputBox>
                    {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
                    
                    <InputBox type='text' 
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
                    })}></InputBox>
                    {errors.pw && <ErrorMessage>{errors.pw.message}</ErrorMessage>}

                    <InputBox type='text' 
                        placeholder='비밀번호 확인'
                        {...register('pwconfirm', {required: '비밀번호를 다시 입력해주세요!', 
                            validate: value => value === getValues('pw') || '비밀번호가 일치하지 않습니다.'
                        })}></InputBox>
                    {errors.pwconfirm && <ErrorMessage>{errors.pwconfirm.message}</ErrorMessage>}

                    <SubmitButton type='submit'>제출하기</SubmitButton>
                    <SubWrapper>
                        <SubText>이미 아이디가 있으신가요?</SubText>
                        <SubText>로그인 페이지로 이동하기</SubText>
                    </SubWrapper>
                </Container>
            </Wrapper2>
        </MainWrapper>
    );
}

export default SignUpForm;

const MainWrapper = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;

    width: 100vw;
    height: 100vh;

    font-family: Nanumsquare;
`;

const Wrapper2 = styled.div`
    background-color: rgba(0, 0, 0, 0.7);

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 37.5rem;
    height: 32rem;

    padding: 1.3rem;

    background-color: #1B1717;

    border-radius: 0.5rem;
`;

const Title = styled.div`
    text-align: center;
    font-weight: 1000;
    font-size: 1.6rem;
    color: white;

    padding-bottom: 1.8rem;
    padding-top: 1.3rem;
`;

const InputBox = styled.input`
    font-size: 0.75rem;
    color: white;

    background-color: #414141;

    border-radius: 1rem;
    border: none;

    margin: 0.6rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    width: 22rem;
    height: 1.6rem;

    &::placeholder {
        color: #E6DEDD;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.7rem;

    width: 22rem;
    height: 1rem;
`;

const SubmitButton = styled.button`
    border-radius: 1rem;
    border: none;

    background-color: #810000;
    color: white;
    font-size: 1rem;

    margin: 1rem;

    width: 23.1rem;
    height: 2.5rem;

    &:hover {
        cursor: pointer;
    }
`;

const SubWrapper = styled.div`
    display: flex;
`;

const SubText = styled.div`
    font-size: 0.75rem;
    color: white;

    padding: 1.25rem;
`;