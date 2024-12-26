"use client";

import React, { useEffect, useState } from "react";
import styles from "./transaction.module.css";
import Card from "../../../components/ui/Card/card";
import { fetchGetData, getSessionToken } from "../../../utils/utils";
const TransactionPage = () => {
  const [topUpDataHistory, setTopUpDataHistory] = useState([
    {
      transaction_type: "",
      total_amount: 0,
      created_on: new Date(),
      description: "",
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetchGetData("transaction/history");

      if (Array.isArray(response.data.data.records)) {
        const records = response.data.data.records.map(
          (value) =>
            ({
              ...value,
              created_on: new Date(value.created_on),
            } || [])
        );

        setTopUpDataHistory(records);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h2 className={styles.transactionText}>Semua Transaksi</h2>

      {}
      <div className={styles.cardLayout}>
        {topUpDataHistory.map((value) => (
          <Card key={value.created_on}>
            <div className={styles.cardContentLayout}>
              <div className={styles.cardTextContent}>
                {value.transaction_type === "TOPUP" ? (
                  <h2 className={styles.topUpBalance}>
                    + Rp.{value.total_amount}
                  </h2>
                ) : (
                  <h2 className={styles.paymentBalance}>
                    - Rp.{value.total_amount}
                  </h2>
                )}
                <p className={styles.dateAndTimeText}>
                  {value.created_on.toLocaleString()}
                </p>
              </div>
              <div>
                <p>{value.description}</p>
              </div>
            </div>
          </Card>
        ))}
        <div className={styles.buttonLayout}>
          <p className={styles.ctaButton}>Show more</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
