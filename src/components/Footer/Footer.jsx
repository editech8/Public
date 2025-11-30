import React from "react";
import Exclusive from "./subComponents/Exclusive";
import "./css/Footer.css";
import Support from "./subComponents/Support";
import AccountBox from "./subComponents/AccountBox";
import QuickLinkBox from "./subComponents/QuickLinkBox";
import DownloadAppBox from "./subComponents/DownloadAppBox";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="topper">
          <Exclusive/>
          <Support/>
          <AccountBox/>
          <QuickLinkBox/>
          <DownloadAppBox/>
        </div>
        <div className="bottom">
          <p className="ccIcon">&copy;</p>
          <p className="ccText">Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
