import React from "react";
import "../css/DownloadAppBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const DownloadAppBox = () => {
  return (
    <>
      <div className="downloadAppBox">
        <div className="downloadAppBoxTopper">
          <div className="downloadAppBoxTitle">
            <h3>Download App</h3>
          </div>
          <div className="downloadAppBoxMain">
            <p>Save $3 with App New User Only</p>
            <div className="downloadAppBoxQRCodeAndLinks">
              <div className="downloadAppBoxQRCode">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
                  alt="QR Code" className="downloadAppBoxQRCode"
                />
              </div>
              <div className="downloadAppBoxLinks">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="downloadAppBoxBottom">
          <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
          <FontAwesomeIcon icon={faXTwitter} className="socialIcon" />
          <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
          <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
        </div>
      </div>
    </>
  );
};

export default DownloadAppBox;
