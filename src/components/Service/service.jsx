import Link from "next/link";
import React from "react";
import styles from "./service.module.css";
import Image from "next/image";

const Service = () => {
  const service = [
    {
      photo: <Image src={"/PBB.png"} alt="pbb" width={50} height={50} />,
      link: "/services/pajak",
      title: "PBB",
    },
    {
      photo: (
        <Image src={"/listrik.png"} alt="listrik" width={50} height={50} />
      ),
      link: "/services/pln",
      title: "Listrik",
    },
    {
      photo: <Image src={"/pulsa.png"} alt="pulsa" width={50} height={50} />,
      link: "/services/pulsa",
      title: "Pulsa",
    },
    {
      photo: <Image src={"/pdam.png"} alt="pdam" width={50} height={50} />,
      link: "/services/pdam",
      title: "PDAM",
    },
    {
      photo: <Image src={"/pgn.png"} alt="pgn" width={50} height={50} />,
      link: "/services/pgn",
      title: "PGN",
    },
    {
      photo: (
        <Image src={"/Televisi.png"} alt="televisi" width={50} height={50} />
      ),
      link: "/services/tv",
      title: "TV Langganan",
    },
    {
      photo: <Image src={"/musik.png"} alt="musik" width={50} height={50} />,
      link: "/services/musik",
      title: "Musik",
    },
    {
      photo: <Image src={"/game.png"} alt="game" width={50} height={50} />,
      link: "/services/voucher_game",
      title: "Voucher Game",
    },
    {
      photo: (
        <Image
          src={"/voucher makanan.png"}
          alt="voucher makanan"
          width={50}
          height={50}
        />
      ),
      link: "/transaksi/voucher_makanan",
      title: "Voucher Makanan",
    },
    {
      photo: <Image src={"/kurban.png"} alt="kurban" width={50} height={50} />,
      link: "/transaksi/qurban",
      title: "Kurban",
    },
    {
      photo: <Image src={"/zakat.png"} alt="zakat" width={50} height={50} />,
      link: "/transaksi/zakat",
      title: "Zakat",
    },
    {
      photo: (
        <Image
          src={"/paket data.png"}
          alt="Paket data"
          width={50}
          height={50}
        />
      ),
      link: "/transaksi/paket-data",
      title: "Paket Data",
    },
  ];
  return (
    <div className={styles.serviceLayout}>
      {" "}
      {service.map((value, index) => (
        <div key={index}>
          <Link href={value.link} className={styles.serviceCTA}>
            <div>{value.photo}</div>
            <p className={styles.serviceText}>{value.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Service;
