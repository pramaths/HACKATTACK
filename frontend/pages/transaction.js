import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//Imternal
import StyleTransaction from "../styles/block.module.css";
import { Etherescan } from "../context/Ether";

const transaction = () => {
  const { provider } = useContext(Etherescan);
  const router = useRouter();
  const { query } = router;
  const hash = Object.keys(query)[0];

  const transDetail = [];
  const [transactionData, setTransactionData] = useState(transDetail);

  //CONVERTED STATE/

  const [gasPrice, setGasPrice] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [value, setValue] = useState("");

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash);
      setTransactionData(transactionDetails);
      console.log(transactionDetails);
      transDetail.push(transactionData);

      //CONVERTING TO ETHER
      const gasLimitePrice = ethers.utils.formatUnits(
        transactionDetails.gasLimit
      );
      setGasLimit(gasLimitePrice);

      const gasPriceCon = ethers.utils.formatUnits(transactionDetails.gasPrice);
      setGasPrice(gasPriceCon);

      const etherValue = ethers.utils.formatUnits(transactionDetails.value);
      setValue(etherValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataOfTransaction();
  });

  return (
    <div className={StyleTransaction.block}>
      <div className={StyleTransaction.box}>
        <div className={StyleTransaction.box__header}>
          <h3>Transaction Hash</h3>
          <p>{hash}</p>
        </div>
        <div className={StyleTransaction.blockTable}>
          <div>
            <div className={StyleTransaction.dataRow}>
              <p>Number</p>
              <Link
                href={{
                  pathname: "/block/",
                  query: transactionData.blockNumber,
                }}
              >
                <p className={StyleTransaction.color}>
                  {transactionData.blockNumber}
                </p>
              </Link>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Block Hash</p>
              <p>{transactionData.blockHash}</p>
            </div>

            <div className={StyleTransaction.dataRow}>
              <p>From</p>
              <Link
                href={{ pathname: "/account/", query: transactionData.from }}
              >
                <p className={StyleTransaction.color}>{transactionData.from}</p>
              </Link>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>To</p>
              <Link
                href={{ pathname: "/account/", query: transactionData.from }}
              >
                <p className={StyleTransaction.color}>{transactionData.to}</p>
              </Link>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Hash</p>
              <p>
                {transactionData.hash
                  ? transactionData.hash
                  : "No Data Avaliable"}
              </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Nonce</p>
              <p>{transactionData.nonce}</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Transaction Index</p>
              <p>
                {transactionData.transactionIndex
                  ? transactionData.transactionIndex
                  : "No Data Avaliable"}
              </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>R</p>
              <p>{transactionData.r}</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>S</p>
              <p>{transactionData.s}</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Gas Limit</p>
              <p>{gasLimit} ETH</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Gas Price</p>
              <p> {gasPrice} ETH</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Type</p>
              <p>{transactionData.type} </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>V</p>
              <p>{transactionData.v} </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Value</p>
              <p>{value} ETH</p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Chain Id</p>
              <p>{transactionData.chainId} </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Confirmations</p>
              <p>{transactionData.confirmations} </p>
            </div>
            <div className={StyleTransaction.dataRow}>
              <p>Transaction Index</p>
              <p>
                {transactionData.creates
                  ? transactionData.creates
                  : "No Data Avaliable"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transaction;


