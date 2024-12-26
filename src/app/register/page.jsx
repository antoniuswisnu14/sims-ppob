"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./register.module.css";
import Image from "next/image";

import { AtSign, Eye, LockKeyhole, User } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/Button/button";
import { fetchData } from "../../utils/utils";
import axios from "axios";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConPassword, setShowConPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const fetchData = (data) => {
    return axios
      .post(
        "https://take-home-test-api.nutech-integrasi.com/registration",
        data
      )
      .then((response) => {
        console.log("Success:", response.data);
        return response.data; // Returning the data from response if needed
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error; // Rethrow the error so the calling function can handle it
      });
  };

  // onSubmit function to handle form data submission
  const onSubmit = async (data) => {
    try {
      const result = await fetchData(data);
      console.log("Data submitted successfully:", result);
    } catch (error) {
      console.error("Failed to submit data:", error);
      // Optionally, handle the error (e.g., display a user-friendly message)
    }
  };

  return (
    <div className={styles.registerLayout}>
      <div className={styles.registerFormLayout}>
        <h1 className={styles.titleForm}>
          <span>
            <Image src={"/logo.png"} alt="logo" width={20} height={20} />
          </span>
          SIMS PPOB
        </h1>
        <h2 className={styles.subTitleForm}>
          Lengkapi data untuk membuat akun
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.registerFormInputLayout}
        >
          <div className={styles.inputFormBorder}>
            <AtSign strokeWidth={3} size={15} color="#cecece" />
            <input
              type="email"
              placeholder="masukan email anda"
              {...register("email", {
                required: "Email harus diisi",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Format email salah",
                },
              })}
              className={styles.inputForm}
            />
          </div>
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
          <div className={styles.inputFormBorder}>
            <User strokeWidth={3} size={15} color="#cecece" />
            <input
              type="text"
              placeholder="nama depan"
              {...register("first_name", {
                required: "Nama depan harus diisi",
                maxLength: { value: 50, message: "Panjang maksimal 50 huruf" },
                minLength: { value: 3, message: "Panjang minimal 3 huruf" },
              })}
              className={styles.inputForm}
            />
          </div>
          {errors.namaDepan && (
            <p className={styles.error}>{errors.namaDepan.message}</p>
          )}
          <div className={styles.inputFormBorder}>
            <User strokeWidth={3} size={15} color="#cecece" />
            <input
              type="text"
              placeholder="nama belakang"
              {...register("last_name", {
                required: "Nama belakang harus diisi",
                maxLength: { value: 20, message: "Panjang maksimal 20 huruf" },
                minLength: { value: 3, message: "Panjang minimal 3 huruf" },
              })}
              className={styles.inputForm}
            />
          </div>
          {errors.namaBelakang && (
            <p className={styles.error}>{errors.namaBelakang.message}</p>
          )}
          <div className={styles.inputFormBorder}>
            <LockKeyhole strokeWidth={3} size={15} color="#cecece" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="buat password"
              {...register("password", {
                required: "Password harus diisi",
                minLength: { value: 8, message: "Panjang minimal 8 karakter" },
              })}
              className={styles.inputForm}
            />
            <Eye
              strokeWidth={3}
              size={18}
              color="#cecece"
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          {/* <div className={styles.inputFormBorder}>
            <LockKeyhole strokeWidth={3} size={15} color="#cecece" />
            <input
              type={showConPassword ? "text" : "password"}
              {...register("konfirmasiPassword", {
                required: "Konfirmasi password harus diisi",
                validate: (value) =>
                  value === password || "Password tidak cocok",
                minLength: { value: 8, message: "Panjang minimal 8 karakter" },
              })}
              placeholder="konfirmasi password"
              className={styles.inputForm}
            />
            <Eye
              strokeWidth={3}
              size={18}
              color="#cecece"
              className={styles.eyeIcon}
              onClick={() => setShowConPassword(!showConPassword)}
            />
          </div>
          {errors.konfirmasiPassword && (
            <p className={styles.error}>{errors.konfirmasiPassword.message}</p>
          )} */}
          <div className={styles.submitButton}>
            <Button type="submit">Registrasi</Button>
          </div>
        </form>
        <p className={styles.loginCTALayout}>
          sudah punya akun? login{" "}
          <Link href={"/login"}>
            <span className={styles.loginCTA}>di sini</span>
          </Link>
        </p>
      </div>
      <Image
        src={"/Illustrasi Login.png"}
        width={550}
        height={600}
        className={styles.registerImageLayout}
        alt="IllustrasiLogin"
      />
    </div>
  );
};

export default RegistrationPage;
