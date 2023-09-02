import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";
import axios from "axios";
import Link from "next/link";

//INYERNAL Import
import { Etherescan } from "../context/Ether";
import Style from "../styles/NavBar.module.css";
import { ethers } from "ethers";
import user from "../avatar.png";
import etherLogo from "../eth.png";
import logo from "../logo.png";
import logoTop from "../footerLogo.png";

const NavBar = () => {
  const { provider } = useContext(Etherescan);
  const [userAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState();
  const [count, setCount] = useState();
  const [openModel, setOpenModel] = useState(true);
  const [price, setPrice] = useState([]);
  const [etherSupply, setEtherSupply] = useState([]);
  const [updatedPriceDate, setUpdatedPriceDate] = useState("");

  const openUserInfo = () => {
    if (openModel) {
      setOpenModel(false);
      console.log(openModel);
    } else if (!openModel) {
      setOpenModel(true);
    }
  };

  ////GET ETHER PRICE UPDATE
  const getEtherPrice = async () => {
    try {
      const API_ETHER = "HVHTPWF3UJ8P5ZEDNUZYMT28ZZNEEURRD4";
      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER}`
        )
        .then((response) => {
          setPrice(response.data.result);
          console.log(response.data.result)
        

         
        });

      axios
        .get(
          `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER}`
        )
        .then((response) => {
          setEtherSupply(response.data.result);
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkAccountExist = async () => {
    if (!window.ethereum) return console.log("Install MataMask");

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      setUserAccount(accounts[0]);

      //GET AACCOUNT DETAILS
      const getBlance = await provider.getBalance(accounts[0]);
      const transactionCount = await provider.getTransactionCount(accounts[0]);
      setCount(transactionCount);
      const showBalance = ethers.utils.formatUnits(getBlance);
      setBalance(showBalance);
    } else {
      console.log("Sorry you do not have account");
    }
  };
  useEffect(() => {
    getEtherPrice();
  }, []);

  useEffect(() => {
    checkAccountExist();
  });

  // //console.log(price);

  const connectWallet = async () => {
    if (!window.ethereum) return console.log("Install MataMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length) {
      setUserAccount(accounts[0]);
    } else {
      console.log("Sorry you do not have account");
    }

    window.location.reload();
  };
  return (
    <div>
      <div className={Style.navbar}>
        <div className={Style.navbar__container}>
          <div className={Style.left}>
            <Link href="/">
              <div>
                <h1 className={Style.desktop}>CRYPTO INVESTIGATION</h1>
                <h1 className={Style.mobile}>
                  <Image src={logoTop} alt="logo" width={50} height={50} />
                </h1>
              </div>
            </Link>
          </div>
          <div className={Style.right}>
            {userAccount.length ? (
              <div className={Style.connected}>
                <button onClick={() => openUserInfo()}>
                  Acc: {userAccount.slice(0, 10)}..
                </button>
                {openModel ? (
                  <div className={Style.userModal}>
                    <div className={Style.user_box}>
                      <div className={Style.closeBtn}>
                        <MdOutlineClose onClick={() => openUserInfo()} />
                      </div>
                      <Image
                        src={user}
                        alt="user account"
                        width={50}
                        height={50}
                      />
                      <p>Acc:&nbsp;{userAccount.slice(0, 20)}..</p>
                      <p>Balance:&nbsp;{balance} ETH</p>
                      <p>Total Trans:&nbsp;{count} </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <button onClick={() => connectWallet()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>
      <div className={Style.price}>
        <div className={Style.price__box}>
          <div className={Style.etherPrice}>
            <div>
              <Image src={etherLogo} alt="Ether price" width={30} height={50} />
            </div>
            <div>
              <h4>ETHER PRICE</h4>
              <p>$ &nbsp;{price.ethusd}</p>
              <p>{price.ethbtc} &nbsp;BTC ₿</p>
             
            </div>
          </div>
          <div className={Style.supplyEther}>
            <div>
              <TbChartArrowsVertical className={Style.supplyIcon} />
            </div>
            <div>
              <h4>TOTAL ETHER SUPPLY</h4>
              <p>{etherSupply}</p>
             
              <p>&nbsp;</p>
            </div>
          </div>
        </div>

        <div className={Style.price__box}>
          <div className={Style.tokenBox__logo}>
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>

          <div className={Style.logoWidth}>
            <p>ERC20 TOKEN</p>
            <p>ERC21 TOKEN</p>
            <p>ERC1155 TOKEN</p>
            <p>CONTRACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;