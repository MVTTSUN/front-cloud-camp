import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormDataType } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp',
  }),
  endpoints: (build) => ({
    formPost: build.mutation<FormDataType, FormDataType>({
      query: (dataForm) => ({
        url: 'frontend',
        method: 'POST',
        body: dataForm,
      }),
    }),
  }),
});
