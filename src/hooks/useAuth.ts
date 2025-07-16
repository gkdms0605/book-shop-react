import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlert"
import { useAuthStore } from "@/store/authStore";
import { LoginProps } from "@/pages/Login";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { SignupProps } from "@/pages/Signup";
import { useState } from "react";

export const useAuth =() => {
  const {showAlert} = useAlert();
  const navigate = useNavigate();

  const [resetRequested, setResetRequested] = useState(false);

  const {storeLogin} = useAuthStore();
  useAuthStore();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);

        showAlert("로그인 완료되었습니다.");
        navigate("/");
      },
      (error) => {
        showAlert("로그인에 실패하였습니다.");
      }
    );
  }

  const userSignup = (data: SignupProps) => {
    signup(data).then((res) => {
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  }

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    })
  }

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
        setResetRequested(true);
      })
  }

  return { userLogin, userSignup, userResetPassword, userResetRequest, resetRequested }
}