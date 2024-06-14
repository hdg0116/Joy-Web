import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increase, decrease, removeItem, clearCart, calculateTotals} from '../redux/cartSlice'
import { open, close } from '../redux/modalSlice'
import styled from 'styled-components'
import { ChevronDown, ChevronUp } from '../constants/icons'

export default function cart() {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();

    console.log(cartItems);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    const handleIncrease = (id) => {
        dispatch(increase(id));
        dispatch(calculateTotals());
    };

    const handleDecreaseRemove = (id) => {
        dispatch(decrease(id));
        dispatch(removeItem(id));
        dispatch(calculateTotals());
    };

    const handleOpenModal = () => {
        dispatch(open());
    };

    const handleYesClearCart = () => {
        dispatch(clearCart());
        dispatch(close());
    }

    const handleNoClearCart = () => {
        dispatch(close());
    }

    console.log(totalAmount, totalPrice);

  return (
    <Wrap>
        <Title>당신이 선택한 음반</Title>
        <Container>
            {cartItems.map((album) => (
                <CartWrapper key={album.id}>
                    <AlbumInfo>
                        <ItemImg src={album.img} alt={album.title} />
                        <Item>
                            <MainInfo>{album.title} | {album.singer}</MainInfo>
                            <Price>&#8361; {album.price}</Price>
                        </Item>
                    </AlbumInfo>

                    <Amount>
                            <Count onClick={() => handleIncrease(album.id)}><ChevronUp  /></Count>
                            <Count><ItemAmount>{album.amount}</ItemAmount></Count>
                            <Count onClick={() => handleDecreaseRemove(album.id)}><ChevronDown  /></Count>
                    </Amount>
                </CartWrapper>
            ))}
        </Container>
        <Container2>
            <TotalWrapper>
                <Total>총 가격</Total>
                <Total>&#8361; {totalPrice}</Total>
            </TotalWrapper>
            <ButtonWrapper>
                <ClearButton onClick={() => handleOpenModal()}>장바구니 초기화</ClearButton>
            </ButtonWrapper>
        </Container2>
        {isModalOpen && (
            <ModalWrapper>
                <Modal>
                    <Text>달아두신 모든 음반을 삭제하시겠습니까?</Text>
                    <ButtonWrapper>
                        <YesButton onClick={handleYesClearCart}>네</YesButton>
                        <NoButton onClick={handleNoClearCart}>아니오</NoButton>
                    </ButtonWrapper>
                </Modal>
            </ModalWrapper>
        )}
    </Wrap>
  );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    margin-top: 6.5rem;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10rem;
    margin-left: 10rem;
`;

const CartWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainInfo = styled.div`
    padding-bottom: 0.5rem;
`;

const Price = styled.div`
    font-size: 0.95rem;
`;

const ItemImg = styled.img`
    height: 5rem;
    width: 5rem;

    padding-right: 1rem;

    object-fit: cover;
`;

const ItemAmount = styled.div`
    font-size: 1rem;
`;

const Amount = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AlbumInfo = styled.div`
    display: flex;
`;

const Count = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container2 = styled.div`
    margin-right: 10rem;
    margin-left: 10rem;
`;

const TotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 0.1rem solid purple;
    margin-top: 2rem;
`;

const Total = styled.div`
    font-size: 0.95rem;
    font-weight: bold;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const ClearButton = styled.button`
    width: 7rem;

    border: 0.1rem solid #ccc;
    border-radius: 0.4rem;
    background-color: transparent;
    cursor: pointer;

    padding-top: 0.2rem;
    padding-bottom: 0.2rem;

    margin-bottom: 3rem;
`;

const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color: #FFFFFF;
    border-radius: 0.5rem;

    width: 18rem;
    height: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
`;

const Text = styled.div`
    text-align: center;
    font-size: 0.9rem;
    padding: 1rem;
`;

const YesButton = styled.button`
    background-color: transparent;
    border-radius: 0.3rem;
    border: 0.1rem solid #00215E;

    color: #00215E;

    margin-right: 5rem;

    cursor: pointer;
`;

const NoButton = styled.button`
    background-color: transparent;
    border-radius: 0.3rem;
    border: 0.1rem solid #D71313;

    color: #D71313;

    cursor: pointer;
`;