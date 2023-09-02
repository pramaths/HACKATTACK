import React from "react";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "../styles/Table.module.css";
import sorry from "../sorry.gif";

const ERC20Token = ({ ERC20 }) => {
  return (
    <div>
      {ERC20.length === 0 ? (
        <div className={Style.sorry}>
          <h2>There is no transaction of ERC20 Token</h2>
          <Image src={sorry} alt="No data" width={200} height={200} />
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              { Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <AiFillEye />
                  <p>{el.hash.slice(0, 35)}..</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Block No</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                      {el.blockNumber}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Nonce</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.nonce}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>From</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.from.slice(0, 10)}..</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>To</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.to.slice(0, 10)}…</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Value</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.value.slice(0, 10)}.. ETH</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Token Name</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TokenSymbol</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenSymbol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Token Decimal</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.tokenDecimal}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Trans Index</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Cumulative Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.cumulativeGasUsed}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.input}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Confirmations</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.confirmations}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Contact Address</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(ERC20) &&ERC20.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.contractAddress}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERC20Token;