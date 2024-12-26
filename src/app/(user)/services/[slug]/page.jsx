"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./services.module.css";
import Button from "../../../../components/ui/Button/button";
import { Banknote } from "lucide-react";
import { fetchGetData, getSessionToken } from "../../../../utils/utils";
import Image from "next/image";
import axios from "axios";

const ServicesPage = ({ params }) => {
  const { slug } = React.use(params);
  const token = getSessionToken();
  const [paymentData, setPaymentData] = useState({
    servoce_code: "",
    service_name: "",
    service_icon: null,
    service_tariff: 0,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      service_icon: null,
      service_tariff: paymentData.service_tariff,
      service_code: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      register("service_code");
      const response = await fetchGetData("/services");
      const matchedService = response.data.data.find(
        (value) => value.service_code === slug.toUpperCase()
      );
      if (matchedService) {
        setPaymentData({
          service_code: matchedService.service_code,
          service_name: matchedService.service_name,
          service_icon: matchedService.service_icon,
          service_tariff: matchedService.service_tariff,
        });
        setValue("service_tariff", matchedService.service_tariff);
        setValue("service_code", matchedService.service_code);
      } else {
        console.warn("No service found with service_code");
        setPaymentData({});
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPostdata = async (data) => {
    return await axios
      .post(
        "https://take-home-test-api.nutech-integrasi.com/transaction",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert(`${response.data.message}`);
        fetchGetData("/balance", token);
      })
      .catch((error) => {
        throw error;
      });
  };

  const onSubmit = (data) => {
    try {
      fetchPostdata(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <p>PemBayaran</p>
      <div>
        <div className={styles.servicesContainer}>
          <Image
            src={paymentData.service_icon}
            alt={paymentData.service_name}
            width={30}
            height={30}
          />
          <h2 className={styles.serviceNameText}>{paymentData.service_name}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <div className={styles.inputButtonContainer}>
            <div className={styles.inputContainer}>
              <Banknote />
              <input
                {...register("service_tariff")}
                type="number"
                defaultValue={paymentData.service_tariff}
                className={styles.input}
              />
            </div>
            <Button type="submit" className={styles.topUpButton}>
              Bayar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicesPage;
