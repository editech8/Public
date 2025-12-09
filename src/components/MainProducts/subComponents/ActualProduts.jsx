import React, { useEffect, useState } from "react";
import "../css/ActualProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActualProduts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="loadingTrue">Loading products...</div>;

  const discountGenerator = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <>
      <div className="productGridWrapper">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <div className="productCard">
                  <div className="cardTopper">
                    <div className="discondAndLikeButton">
                      <div className="discount">
                        <div> -{discountGenerator()}%</div>
                      </div>
                      <div className="likeButton">
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </div>
                    </div>
                    <div className="productImg">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                  <div className="cardBottom">
                    <div className="cartBotton">
                      <button>Add To Cart</button>
                    </div>
                    <div className="productInfo">
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ActualProduts;
