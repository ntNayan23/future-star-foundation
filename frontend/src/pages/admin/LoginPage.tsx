import LoginForm from "../../components/admin/LoginForm";

const Login = () => {
  return (
     <div className="min-h-screen bg-[#F8FAFC] px-4 py-8 sm:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;