import styled from 'styled-components';
import UserLink from '../components/UserLink';
import { userInfo, userLinks } from '../mocks';
import { Input } from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { stepForwardAction } from '../store/actions';
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { FormDataType } from '../types';
import ErrorsField from '../components/ErrorsField';

type MainScreenProps = {
  handleSubmit: UseFormHandleSubmit<FormDataType>;
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
};

export default function MainScreen({
  handleSubmit,
  register,
  errors,
}: MainScreenProps) {
  const { name, surname } = userInfo;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataType> = () => {
    dispatch(stepForwardAction());
    navigate('form');
  };

  return (
    <Container>
      <Header>
        <Avatar>
          <AvatarAbbreviation>
            {`${name.charAt(0)}${surname.charAt(0)}`}
          </AvatarAbbreviation>
        </Avatar>
        <Info>
          <Name>{`${name} ${surname}`}</Name>
          <nav>
            <Links>
              {userLinks.map((userLink, i) => (
                <UserLink key={`${i + 1}`} userLink={userLink} />
              ))}
            </Links>
          </nav>
        </Info>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormList>
            <li>
              <Input
                {...register('phone')}
                width={400}
                labelText="Номер телефона"
                id="field-number"
                placeholder="+7 999 999-99-99"
                isDisabled
                type="tel"
              />
            </li>
            {errors.phone && <ErrorsField>{errors.phone.message}</ErrorsField>}
            <li>
              <Input
                {...register('email')}
                width={400}
                labelText="Email"
                id="field-email"
                placeholder="tim.jennings@example.com"
                isDisabled
                type="email"
              />
            </li>
            {errors.email && <ErrorsField>{errors.email.message}</ErrorsField>}
          </FormList>
          <Button id="button-start" isForwardType>
            Начать
          </Button>
        </Form>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 25px 24px 0px;
  margin: 0 auto;
  max-width: 900px;
  min-height: 704px;
  background-color: #fff;
  border-radius: 12px 12px 0 0;
`;

const Header = styled.header`
  padding: 0 0 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 540px) {
    gap: 12px;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #d5e4f7;
  border-radius: 50%;

  @media screen and (max-width: 540px) {
    width: 40px;
    height: 40px;
  }
`;

const AvatarAbbreviation = styled.p`
  margin: 0;
  font-family: 'SB Sans Text Mono';
  color: #212830;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;

  @media screen and (max-width: 540px) {
    font-size: 25px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Name = styled.h1`
  margin: 0;
  color: #333333;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;

  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  padding: 24px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

const FormList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
