import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ethers } from "ethers";
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";
//INTERNAL IMPORT//
import { Etherescan } from "../context/Ether";
import Style from "../styles/index.module.css";
import etherLogo from "../eth.png";

const Home = () => {
  const router = useRouter();
  const { yourBlockTrans, transaction } = useContext(Etherescan);
  const [userAccount, setUserAccount] = useState("");

  const convertIntoETH = (amount) => {
    const ETH = ethers.utils.formatEther(amount, "ether");
    return ETH;
  };

  const accountAddress = (event) => {
    event.preventDefault();
    address = document.getElementById("accountAddress").value.trim();
    setUserAccount(address);
    router.push(`/account?${address}`);
    address = "";
  };

  //JSX CODE//////////////////////////////////////////////////////////////
  return (
    <div>
      <div className={Style.header}>
        <form className={Style.accountAddress}>
          <input
            type="text"
            placeholder="Enter Account Addrss"
            id="accountAddress"
          />
          <Link href={{ pathname: "/account", query: userAccount }}>
             onClick={(event) => accountAddress(event)}
              <SiMinutemailer />
            
          </Link>
        </form>
      </div>
      <div className={Style.container}>
        <div className={Style.container__box}>
          <h3>Latest Blocks</h3>
          <div className={Style.container__block}>
            {yourBlockTrans.map((el, i) => (
              <div key={i + 1} className={Style.oneBlock}>
                <div className={Style.block}>
                  <div className={Style.info}>
                    <p className={Style.bk}>BK</p>
                    <Link href={{ pathname: "/block", query: el.number }}>
                      {el.number}
                    </Link>
                  </div>
                  <p>{el.timestamp} Tsm</p>
                </div>
                <div>
                  <div className={Style.miner}>
                    <p>
                      {/* ////s///// */}
                      <span>
                        Miner:&nbsp;&nbsp;
                        <Link
                          className={Style.link}
                          href={{ pathname: "/account/", query: el.miner }}
                        >
                          {el.miner.slice(0, 35)}..
                        </Link>
                      </span>
                    </p>
                    <span>
                      <Link href={{ pathname: "/block", query: el.number }}>
                        {el.transactions.length}
                      </Link>
                      &nbsp;TNS in 3sec
                    </span>
                  </div>

                  <div className={Style.reward}>
                    <p>
                      {convertIntoETH(el.baseFeePerGas)} <span>ETH</span>
                    </p>
                    <Image
                      className={Style.eth}
                      src={etherLogo}
                      alt="ether logo"
                      width={10}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.container__box}>
          <h3>Latest Transaction</h3>
          <div className={Style.container__block}>
            {transaction.map((el, i) => (
              <div key={i + 1} className={Style.oneBlock}>
                <div className={Style.info}>
                  <div>
                    <p className={Style.bk}>TS</p>
                  </div>
                  <Link href={{ pathname: "/transaction", query: el }}>
                    Hash: {el.slice(0, 55)}..
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
