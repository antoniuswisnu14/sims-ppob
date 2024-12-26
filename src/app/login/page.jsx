"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import Image from "next/image";

import { AtSign, Eye, LockKeyhole, User } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { storeSessionToken } from "../../utils/utils";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    return await axios
      .post("https://take-home-test-api.nutech-integrasi.com/login", data)
      .then((response) => {
        const token = response.data.data.token;
        storeSessionToken(token);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error.response.data?.message;
      });
  };

  const onSubmit = async (data) => {
    try {
      const result = await handleLogin(data);
      if (result.message === "Login Sukses") {
        router.push("/");
        alert("login berhasil");
      }
    } catch (error) {
      alert(error ? error : "error");
    }
  };

  return (
    <div className={styles.loginLayout}>
      <div className={styles.loginFormLayout}>
        <h1 className={styles.titleForm}>
          <span>
            <Image src={"/logo.png"} alt="logo" width={20} height={20} />
          </span>
          SIMS PPOB
        </h1>
        <h2 className={styles.subTitleForm}>
          Masuk atau buat akun untuk memulai
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.loginFormInputLayout}
        >
          <div className={styles.inputFormBorder}>
            <AtSign strokeWidth={3} size={15} color="#cecece" />
            <input
              type="email"
              placeholder="masukan email anda"
              {...register("email", {
                required: true,
                max: 20,
                min: 1,
                pattern: /^\S+@\S+$/i,
              })}
              className={styles.inputForm}
            />
          </div>

          <div className={styles.inputFormBorder}>
            <LockKeyhole strokeWidth={3} size={15} color="#cecece" />
            <input
              type="password"
              placeholder="masukan password anda"
              {...register("password", { max: 20, min: 1, maxLength: 20 })}
              className={styles.inputForm}
            />
            <Eye
              strokeWidth={3}
              size={18}
              color="#cecece"
              className={styles.eyeIcon}
            />
          </div>
          <div className={styles.submitButton}>
            <Button type="submit">Masuk</Button>
          </div>
        </form>
        <p className={styles.loginCTALayout}>
          belum punya akun? registrasi{" "}
          <Link href={"/register"}>
            <span className={styles.loginCTA}>di sini</span>
          </Link>
        </p>
      </div>
      <Image
        src={"/Illustrasi Login.png"}
        width={550}
        height={600}
        className={styles.loginImageLayout}
        alt="IllustrasiLogin"
      />
    </div>
  );
};

export default LoginPage;
