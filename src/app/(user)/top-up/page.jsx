"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./topup.module.css";
import Button from "../../../components/ui/Button/button";
import axios from "axios";
import { fetchGetData, getSessionToken } from "../../../utils/utils";
import { useRouter } from "next/navigation";

const TopUpPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      top_up_amount: "",
    },
  });

  const token = getSessionToken();

  const fetchData = async (data) => {
    return await axios
      .post("https://take-home-test-api.nutech-integrasi.com/topup", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert(`${response.data.message}`);
        fetchGetData("/balance", token);
      })
      .catch((error) => {
        throw error;
      });
  };

  const presetAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

  const handlePresetClick = (value) => {
    setValue("top_up_amount", value);
  };

  const onSubmit = (data) => {
    try {
      fetchData(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.textContainer}>
        <p>Silahkan masukan</p>
        <h2>Nominal Top Up</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            {...register("top_up_amount", {
              required: "Mohon isi jumlah topup",
              validate: {
                min: (value) =>
                  parseInt(value, 10) >= 10000 || "Minimal topup 10,000",
                max: (value) =>
                  parseInt(value, 10) <= 1000000 || "Maksimal topup 1,000,000",
              },
            })}
            type="text"
            placeholder="Masukkan nominal Top Up"
            className={styles.input}
          />
          <Button type="submit" className={styles.topUpButton}>
            Top Up
          </Button>
        </div>

        <div className={styles.presetButtonsContainer}>
          {presetAmounts.map((preset, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={styles.presetButton}
            >
              Rp{preset}
            </Button>
          ))}
        </div>
      </form>
      {errors.top_up_amount && (
        <p className={styles.error}>{errors.top_up_amount.message}</p>
      )}
    </div>
  );
};

export default TopUpPage;
