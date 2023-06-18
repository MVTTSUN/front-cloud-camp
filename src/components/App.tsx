import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';
import FormScreen from '../pages/FormScreen';
import { useAppSelector } from '../hooks/useAppSelector';
import { FieldValues, Resolver, useForm } from 'react-hook-form';
import { FormDataType } from '../types';
import { userInfo } from '../mocks';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';
import { schema } from '../utils/yup';

export default function App() {
  const { phone, email } = userInfo;
  const stepNumber = useAppSelector((state) => state.reducer.stepNumber);
  const currentSchema: ObjectSchema<FieldValues> = schema[stepNumber];

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
    watch,
    control,
  } = useForm<FormDataType>({
    defaultValues: { phone, email },
    resolver: yupResolver(currentSchema) as unknown as Resolver<FormDataType>,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainScreen
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          }
        />
        <Route
          path="form"
          element={
            stepNumber > 0 ? (
              <FormScreen
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                setValue={setValue}
                reset={reset}
                control={control}
                watch={watch}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
