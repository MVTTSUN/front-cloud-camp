import { styled } from 'styled-components';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { stepBackAction, stepForwardAction } from '../store/actions';
import { useAppSelector } from '../hooks/useAppSelector';
import InputsStepOne from '../components/InputsStepOne';
import InputsStepTwo from '../components/InputsStepTwo';
import InputsStepThree from '../components/InputsStepThree';
import Popup from '../components/Popup';
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { FormDataType } from '../types';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

type FormScreenProps = {
  handleSubmit: UseFormHandleSubmit<FormDataType>;
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  setValue: UseFormSetValue<FormDataType>;
  reset: UseFormReset<FormDataType>;
  watch: UseFormWatch<FormDataType>;
};

export default function FormScreen({
  handleSubmit,
  register,
  errors,
  setValue,
  reset,
  watch,
}: FormScreenProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const stepNumber = useAppSelector((state) => state.reducer.stepNumber);
  const [formPost, { isLoading, isSuccess }] = api.useFormPostMutation();
  const textButtonSend = isLoading ? 'Отправка...' : 'Отправить';
  const [sendIsSuccess, setSendIsSuccess] = useState(isSuccess);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    setSendIsSuccess(isSuccess);
  }, [isSuccess]);

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleClickBack = () => {
    dispatch(stepBackAction());
    if (!stepNumber) {
      navigate(-1);
    }
  };

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    if (stepNumber < 3) {
      dispatch(stepForwardAction());
    }

    if (stepNumber === 3) {
      await formPost({ data, body: data } as unknown as FormDataType);
      reset({}, { keepErrors: true });
      setIsOpenPopup(true);
    }

    // eslint-disable-next-line no-console
    console.log(watch());
  };

  return (
    <>
      <Container>
        <StatusBar />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormList>
            {stepNumber === 1 && (
              <InputsStepOne
                register={register}
                errors={errors}
                setValue={setValue}
              />
            )}
            {stepNumber === 2 && (
              <InputsStepTwo
                register={register}
                errors={errors}
                setValue={setValue}
              />
            )}
            {stepNumber === 3 && (
              <InputsStepThree register={register} errors={errors} />
            )}
          </FormList>
          <ButtonContainer>
            <Button id="button-back" type="button" onClick={handleClickBack}>
              Назад
            </Button>
            <Button
              id={stepNumber === 3 ? 'button-send' : 'button-next'}
              isForwardType
            >
              {stepNumber === 3 ? textButtonSend : 'Далее'}
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
      {isOpenPopup && (
        <Popup closePopup={handleClosePopup} isSuccess={sendIsSuccess} />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 62px 110px 80px;
  margin: 0 auto;
  max-width: 900px;
  background-color: #fff;
  border-radius: 23px;

  @media screen and (max-width: 540px) {
    padding: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 64px;
  justify-content: space-between;
  flex-direction: column;
  flex: auto;
`;

const FormList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;
