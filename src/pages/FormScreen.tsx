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
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataType } from '../types';

export default function FormScreen() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const stepNumber = useAppSelector((state) => state.stepNumber);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm<FormDataType>({
    // defaultValues: {
    //   nickname: '',
    //   name: '',
    //   surname: '',
    //   sex: '',
    //   advantage: '',
    //   about: '',
    // },
  });

  const handleClickBack = () => {
    dispatch(stepBackAction());
    if (!stepNumber) {
      navigate(-1);
    }
  };

  const handleClickForward = () => {
    if (stepNumber < 3) {
      dispatch(stepForwardAction());
    }
    // eslint-disable-next-line no-console
    console.log(watch());
  };

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    // eslint-disable-next-line no-console
    // console.log(isValid);
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
                trigger={trigger}
                watch={watch}
              />
            )}
            {stepNumber === 2 && (
              <InputsStepTwo register={register} errors={errors} />
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
              onClick={handleClickForward}
              isForwardType
            >
              {stepNumber === 3 ? 'Отправить' : 'Далее'}
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
      <Popup isSuccess />
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
