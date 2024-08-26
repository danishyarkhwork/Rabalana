import dynamic from "next/dynamic";

const LoginComponent = dynamic(() => import("@/components/login/Login"), {
  ssr: false, // Disable server-side rendering for this component
});

const LoginPage = () => {
  return <LoginComponent />;
};

export default LoginPage;
