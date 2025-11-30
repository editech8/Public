import React from "react";
import "./css/UserActions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const UserActions = () => {
  return (
    <>
      <div className="user-actions-container">
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" className="search-input-btn"/>
          <button >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="user-actions">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </>
  );
};

export default UserActions;
