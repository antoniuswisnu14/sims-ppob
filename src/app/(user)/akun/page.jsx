"use client";

import Image from "next/image";
import React from "react";
import styles from "./akun.module.css";
import { useForm } from "react-hook-form";
import { AtSign, User } from "lucide-react";
import Button from "../../../components/ui/Button/button";
import Cookies from "js-cookie";

const AkunPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleLogout() {
    Cookies.remove("session_token", {
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    window.location.href = "/login";
  }

  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registerFormInputLayout}
    >
      <div className={styles.imageTextLayout}>
        <Image
          src={"/profile photo.png"}
          width={100}
          height={100}
          alt="profile"
          className={styles.imageLayout}
        />

        <h2>Kristanto Wibowo</h2>
      </div>

      <p>Email</p>
      <div className={styles.inputFormBorder}>
        <AtSign strokeWidth={3} size={15} color="#cecece" />
        <input
          type="email"
          placeholder="masukan email anda"
          {...register("Email", {
            required: true,
            max: 20,
            min: 1,
            pattern: /^\S+@\S+$/i,
          })}
          className={styles.inputForm}
        />
      </div>
      <p>Nama Depan</p>
      <div className={styles.inputFormBorder}>
        <User strokeWidth={3} size={15} color="#cecece" />
        <input
          type="text"
          placeholder="nama depan"
          {...register("nama depan", {
            required: true,
            max: 20,
            min: 0,
            maxLength: 80,
          })}
          className={styles.inputForm}
        />
      </div>
      <p>Nama Belakang</p>
      <div className={styles.inputFormBorder}>
        <User strokeWidth={3} size={15} color="#cecece" />
        <input
          type="text"
          placeholder="nama belakang"
          {...register("nama belakang", { required: true, maxLength: 100 })}
          className={styles.inputForm}
        />
      </div>
      <Button type="submit" className={styles.editProfileButton}>
        Edit Profile
      </Button>
      <Button type="button" onClick={() => handleLogout()}>
        Logout
      </Button>
    </form>
  );
};

export default AkunPage;
