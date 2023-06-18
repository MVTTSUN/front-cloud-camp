import { styled } from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { stepResetAction } from '../store/actions';

type PopupProps = {
  isSuccess: boolean;
  closePopup: () => void;
};

export default function Popup({ isSuccess, closePopup }: PopupProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    if (!isSuccess) {
      closePopup();
    } else {
      dispatch(stepResetAction());
      navigate('/');
    }
  };

  return (
    <ShadowLayer>
      <Container>
        <TopContainer $isSuccess={isSuccess}>
          <Heading $isSuccess={isSuccess}>
            {isSuccess ? 'Форма успешно отправлена' : 'Ошибка'}
          </Heading>
          {!isSuccess && <ButtonClose onClick={closePopup} />}
        </TopContainer>
        <Icon $isSuccess={isSuccess} />
        <ButtonIsSuccess
          $isSuccess={isSuccess}
          id={isSuccess ? 'button-to-main' : 'button-close'}
          onClick={clickHandler}
          isForwardType
        >
          {isSuccess ? 'На главную' : 'Закрыть'}
        </ButtonIsSuccess>
      </Container>
    </ShadowLayer>
  );
}

const ShadowLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  box-sizing: border-box;
  padding: 32px;
  width: 460px;
  background: #fff;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  @media screen and (max-width: 540px) {
    width: 260px;
    padding: 16px;
    gap: 24px;
  }
`;

const TopContainer = styled.div<{
  $isSuccess: boolean;
}>`
  align-self: stretch;
  display: flex;
  justify-content: ${({ $isSuccess }) =>
    $isSuccess ? 'center' : 'space-between'};
`;

const Heading = styled.h2<{
  $isSuccess: boolean;
}>`
  align-self: ${({ $isSuccess }) => !$isSuccess && 'flex-start'};
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: #333333;

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`;

const ButtonClose = styled.button`
  cursor: pointer;
  width: 28px;
  height: 28px;
  background: url(./img/close.svg) no-repeat center center rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  border: none;
`;

const Icon = styled.span<{
  $isSuccess: boolean;
}>`
  width: 80px;
  height: 80px;
  background: ${({ $isSuccess }) =>
    $isSuccess ? 'url(./img/success.svg)' : 'url(./img/error.svg)'};
`;

const ButtonIsSuccess = styled(Button)<{
  $isSuccess: boolean;
}>`
  align-self: ${({ $isSuccess }) => !$isSuccess && 'flex-end'};
`;
