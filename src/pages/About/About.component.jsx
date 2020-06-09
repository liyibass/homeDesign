import React, { useState, useEffect } from "react";
import "./About.style.scss";
import Button from "../../components/Button/Button.component";
import { motion } from "framer-motion";

function About() {
  const [page, setPage] = useState([true, false, false, false]);
  useEffect(() => {
    const aboutSection = document.querySelectorAll(".aboutSection");
    const aboutSectionSwitchs = document.querySelectorAll(".sectionSwitch");

    for (let i = 0; i < aboutSection.length; i++) {
      // console.log(aboutSectionSwitchs[i].children[0]);

      if (page[i]) {
        aboutSection[i].classList.remove("sectionHide");
        aboutSectionSwitchs[i].children[0].classList.add("btn-selected");
      } else {
        aboutSection[i].classList.add("sectionHide");
        aboutSectionSwitchs[i].children[0].classList.remove("btn-selected");
      }
    }
  }, [page]);
  return (
    <motion.div
      className="aboutPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="aboutSectionSwitchs">
        <span
          className="sectionSwitch"
          onClick={() => setPage([true, false, false, false])}
        >
          <Button enTitle="About" chTitle="關於" />
        </span>
        <span
          className="sectionSwitch"
          onClick={() => setPage([false, true, false, false])}
        >
          <Button enTitle="Design" chTitle="設計" />
        </span>
        <span
          className="sectionSwitch"
          onClick={() => setPage([false, false, true, false])}
        >
          <Button enTitle="Process" chTitle="流程" />
        </span>
        <span
          className="sectionSwitch"
          onClick={() => setPage([false, false, false, true])}
        >
          <Button enTitle="Toll" chTitle="收費" />
        </span>
      </div>
      <div className="aboutSection aboutSection-about sectionHide">
        <h4>關於八德</h4>
        <p>
          空間 <br />
          是個多元多面向的有機體 <br />
          設計 <br />
          不妨視為揣想生活的積極態度 <br />
          八德設計 <br />
          成立超過十餘年 <br />
          我們深知築巢有夢的深切 <br />
          因此始終秉持熱誠 <br />
          專業與豐富實作經驗 <br />
          讓所有的夢想不再遙遠 <br />
          <br />
          我們有一系列可以根據不同客層需求 <br />
          逐一量身訂做的服務流程 <br />
          公開而且透明 <br />
          不管您對家有任何想法 <br />
          我們都準備好隨時傾聽 <br />
          期待有機會與您一起編寫關於『家』的精彩故事 <br />
        </p>
      </div>
      <div className="aboutSection aboutSection-design ">
        <h4>八德設計</h4>
        <p>
          空間 <br />
          不只是上下四方的水泥載體 <br />
          更是傳承延續人類文明的潘朵拉盒子 <br />
          <br />
          關於設計 <br />
          我們不想用艱澀搞怪標新立異 <br />
          而是將巧思直接訴諸感官身心 <br />
          讓使用者自然心領神會 <br />
          <br />
          關於設計 <br />
          不能是沒有理由的神來一筆 <br />
          我們堅持機能為先、實用至上 <br />
          然後才是美學 <br />
          才有概念 <br />
          <br />
          總之 <br />
          我們想創造一個容器 <br />
          蒐集人與人、人與時間 <br />
          人與美學交會的瞬間 <br />
        </p>
      </div>
      <div className="aboutSection aboutSection-process sectionHide">
        {" "}
        <h4>八德流程</h4>
        <p>
          <br />
          住宅設計、透天大宅、中古屋翻新、辦公室空間、商業空間 <br />
          <br />
          各項項目服務流程表 <br />
          第一次約談 了解使用者風格喜好，巳完工案例介紹，約現場丈量時間 <br />
          第二次約談 平面配置圖初步討論 <br />
          第三次約談 討論修改後平面配置圖 <br />
          第四次約談 平面設計圖確認定案，簽設計合約 <br />
          第五次約談
          初步設計簡報、水電圖、天花板燈具圖、立面設計圖、3D圖，各類材質討論{" "}
          <br />
          第六次約談 各項圖面定案，各類細項材質確認 <br />
          第七次約談 提供各項工程細部估價單，簽工程合約，確定施工日期 <br />
        </p>
      </div>
      <div className="aboutSection aboutSection-toll sectionHide">
        <h4>八德收費</h4>
        <p>
          講求材質及施工品質，由設計師群設計規劃，替居家環境開創新價值，為八德之理念。{" "}
          <br />
          下列為本公司收費標準，僅供參考，實際價格依工地現場做調整。 <br />
          (如:圖面修改，施工期間延遲...等) <br />
          註:　每個估價將詳細列單價、尺寸、材質等明細，實報實銷責任施工。 <br />
          <br />
          項目 概算每坪施工單價 <br />
          ▾商業 空間費用視整體空間而定 <br />
          ▾設計費用 8,000/坪(若承接工程，設計費折扣4,000) <br />
          ▾監工程造費 以總工程款8~10%計算(視個案而定) <br />
        </p>
      </div>
    </motion.div>
  );
}

export default About;
