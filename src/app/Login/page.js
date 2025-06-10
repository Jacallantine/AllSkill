// app/login/page.tsx (App Router) or pages/login.tsx (Pages Router)
import { Suspense } from 'react';
import LoginComp from '@/Components/LoginComp';
import Loading from '@/Components/Loading';

export default function Login() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginComp />
    </Suspense>
  );
}