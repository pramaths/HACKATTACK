import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import Style from "../styles/Table.module.css";
import sorry from "../sorry.gif";

const BlockRange = ({ blockRangeTransaction, handleClick }) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <Image src={sorry} alt="No data" />
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) && blockRangeTransaction.map((el, i) => (
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
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
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
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
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
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/account/", query: el.from }}>
                       onClick={handleClick}{el.from.slice(0, 10)}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>To</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p className={Style.toLink}>
                    <Link href={{ pathname: "/account/", query: el.from }}>
                      <a onClick={handleClick}>{el.to.slice(0, 10)}</a>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Value</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
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
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gasUsed}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.input ? el.input : "No Data"}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.type}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TraceId</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.traceId}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>IsError</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.isError}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Contact Address</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockRangeTransaction) &&blockRangeTransaction.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.contractAddress ? el.contractAddress : "No Data"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockRange;