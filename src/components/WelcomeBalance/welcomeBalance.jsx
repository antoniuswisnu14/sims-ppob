"use client";

import React, { useEffect, useState } from "react";
import styles from "./welcomeBalance.module.css";
import Image from "next/image";
import { Eye } from "lucide-react";
import { fetchGetData, getSessionToken } from "../../utils/utils";
import Loader from "../ui/Loader/loader";
import axios from "axios";
const WelcomeBalance = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [nameAndBalance, setNameAndBalance] = useState({
    first_name: "",
    last_name: "",
    balance: "",
  });

  function handleBalanceVisibility() {
    if (isBalanceVisible) {
      setIsBalanceVisible(false);
    } else if (!isBalanceVisible) {
      setIsBalanceVisible(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameResponse = await fetchGetData("/profile");
        const balanceResponse = await fetchGetData("/balance");

        setNameAndBalance({
          first_name: nameResponse.data.data.first_name,
          last_name: nameResponse.data.data.last_name,
          balance: balanceResponse.data.data.balance,
        });
      } catch (error) {
        alert("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.dashboardLayout}>
        <div className={styles.welcomeLayout}>
          <Image
            src={"/Profile Photo.png"}
            alt="Profile Photo"
            width={50}
            height={50}
          />
          <div>
            <p>Selamat datang,</p>
            <h2>
              {nameAndBalance.first_name}
              {nameAndBalance.last_name}
            </h2>
          </div>
        </div>
        <div className={styles.balanceLayout}>
          <Image
            src={"/Background Saldo.png"}
            alt="Background Saldo"
            width={1000}
            height={1000}
            className={styles.balanceBackgroundLayout}
          />
          <div className={styles.balanceTextLayout}>
            <p>Saldo anda</p>
            <h2>
              {isBalanceVisible ? (
                <p>Rp {nameAndBalance.balance}</p>
              ) : (
                <p>Rp • • • • • • •</p>
              )}
            </h2>
            <p className={styles.balanceCTA}>
              Lihat Saldo{" "}
              <span>
                <Eye
                  strokeWidth={3}
                  size={10}
                  onClick={() => handleBalanceVisibility()}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBalance;
