import React from "react";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

import Style from "../styles/Table.module.css";
import sorry from "../sorry.gif";

const MindedBlock = ({ blockMindedByAddress }) => {
  return (
    <div>
      {blockMindedByAddress.length === 0 ? (
        <div className={Style.sorry}>
          <Image src={sorry} alt="No data" />
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>Block Number</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockMindedByAddress) &&blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <AiFillEye />
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
              <p>Block Reward</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockMindedByAddress) &&blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.blockReward}..</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.coloum}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {Array.isArray(blockMindedByAddress) &&blockMindedByAddress.map((el, i) => (
                <div key={i + 1} className={Style.transHash}>
                  <p>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindedBlock;