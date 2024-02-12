import React from "react";
import port1 from "../../img/poert1.png";
import port2 from "../../img/port2.png";
import port3 from "../../img/port3.png";
import styles from "./Portofolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className={` text-center container h-100 pb-md-5 pt-md-4`}>
        <h2
          className={`${styles.icolors}text-center pt-md-5 text-uppercase  fs-1 fw-bolder `}
        >
  
          PORTFOLIO COMPONENT
        </h2>

        <div className={styles.design_parent}>
          <div className={styles.design}></div>
          <i className={`${styles.icolors} fa-solid fa-star   `}></i>
          <div className={styles.design}></div>
        </div>

        <div className={`{ row `}>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port1} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port2} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port3} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
        </div>
        <br />
        <div className={`row`}>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port1} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port2} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
          <div className={`col-md-6 col-12-sm col-lg-4`}>
            <div className={`${styles.card}`}>
              {" "}
              <img src={port3} alt={`${port1}`} className={` w-100`} />
              <div className={`${styles.overlay}`}>+</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
