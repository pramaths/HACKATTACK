import React from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "../styles/Table.module.css";
//
const Internal = ({ internalByAddrss, handleClick }) => {
  return (
    <div className={Style.dataTable}>
      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Hash</p>
        </div>
        <div className={Style.tableInfo}>
          {Array.isArray(internalByAddrss) && internalByAddrss.map((el, i) => (
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
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
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
          <p>TraceId</p>
        </div>
        <div className={Style.tableInfo}>
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.traceId}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>TimeStamp</p>
        </div>
        <div className={Style.tableInfo}>
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
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
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p className={Style.toLink}>
                <Link href={{ pathname: "/account/", query: el.from }}>
                  <a onClick={handleClick}>{el.from.slice(0, 10)}</a>
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
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
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
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
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
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.gasUsed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>isError</p>
        </div>
        <div className={Style.tableInfo}>
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.isError}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={Style.coloum}>
        <div className={Style.tableTitle}>
          <p>Gas</p>
        </div>
        <div className={Style.tableInfo}>
          {Array.isArray(internalByAddrss) &&internalByAddrss.map((el, i) => (
            <div key={i + 1} className={Style.transHash}>
              <p>{el.gas}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internal;