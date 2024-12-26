"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className={styles.navbarLayout}>
        <Link href={"/"} className={styles.logoLayout}>
          <Image src={"/logo.png"} alt="logo" width={20} height={20} />
          <h2>SIMS PPOB</h2>
        </Link>
        <div className={styles.navlinkLayout}>
          <Link
            href="/top-up"
            className={
              pathname === "/top-up" ? styles.ctaAfter : styles.ctaBefore
            }
          >
            Top Up
          </Link>
          <Link
            href="/transaction"
            className={
              pathname === "/transaction" ? styles.ctaAfter : styles.ctaBefore
            }
          >
            Transaction
          </Link>
          <Link
            href="/akun"
            className={
              pathname === "/akun" ? styles.ctaAfter : styles.ctaBefore
            }
          >
            Akun
          </Link>
        </div>
      </div>
      <div className={styles.navbarBorder}></div>
    </div>
  );
};

export default Navbar;
