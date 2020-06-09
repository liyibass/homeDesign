import React, { useState, useEffect } from "react";
import "./Awards.style.scss";
import Button from "../../components/Button/Button.component";
import { motion } from "framer-motion";

function Awards() {
  return (
    <motion.div
      className="awardsPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="awardsSection">
        <h4>關於獎項</h4>
        <p>
          2019德國ELSE大獎 <br />
          2019德國設計獎 <br />
          2019義大利BDESIGN 銅獎 <br />
          2019韓國 J-DESIGN AWARD <br />
          2018德國G-Iconic Award Best of Best金獎 <br />
          2018德國ELSE大獎 <br />
          2018德國ELSE大獎 <br />
          2018TAD獎 <br />
          2018韓國 J-DESIGN AWARD 金獎 <br />
          2018韓國 J-DESIGN AWARD WINNER <br />
          2018義大利BDESIGN 銀獎 <br />
          2018義大利BDESIGN 銅獎 <br />
          2017美國 HAL 國際設計獎 金獎 <br />
          2017美國 HAL 國際設計獎 金獎 <br />
          2017美國 HAL 國際設計獎 銀獎 <br />
          2017德國ELSE大獎 <br />
          2017德國ELSE大獎 <br />
        </p>
      </div>
    </motion.div>
  );
}

export default Awards;
