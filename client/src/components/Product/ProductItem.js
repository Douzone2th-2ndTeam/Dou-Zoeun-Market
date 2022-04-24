import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
  .thumbnail {
    img {
      width: 8rem;
      height: 8rem;
      margin: 0;
      margin-bottom: 1rem;
    }
  }
  .title {
    font-size: 16px;
  }
  .price_origin {
    color: gray;
    font-size: 13px;
  }
  .hot {
    width: 20% !important;
  }
`;

// eslint-disable-next-line react/prop-types
const ProductItem = ({ deliver, urlName }) => {
  // eslint-disable-next-line react/prop-types
  const [product, setProduct] = useState({});
  const [ProductImgs, setProductImg] = useState(deliver.ProductImgs);
  // const ProductImgs = deliver.ProductImgs;
  // const [ProductImgs, setProductImg] = useState(deliver.ProductImgs);

    const getAuthInfo = useSelector((state) => state);
    console.log("????", deliver);
    console.log("IMG!!!!!!!!!!", ProductImgs);

  console.log("urlName : ", urlName);
  useEffect(() => {
    urlName === `mypage/favorite/${getAuthInfo.user.idx}`
      ? isFav()
      : notFav()
  }, []);

  async function isFav(){
      setProduct({
          idx: deliver.Product.idx,
          title: deliver.Product.title,
          price: deliver.Product.price,
      });
      setProductImg(deliver.ProductImgs);
  }

  async function notFav(){
      setProduct({
          idx: deliver.idx,
          title: deliver.title,
          price: deliver.price,
      });
      setProductImg(deliver.ProductImgs);
  }

  return (
    <Container>
      <span>
        <div className="thumbnail">
          <Link to={`/${product.idx}`}>
            <img src={ProductImgs[0].imgUrl} alt="thumbnail" />
          </Link>
        </div>
        <span className="title">{product.title}</span>
        <img
          className="hot"
          src="https://static.wixstatic.com/media/a44461_00e151045404454199cdedcad7c72541~mv2.gif"
        />
        <br />
        <span className="price_origin">{product.price}원</span>
      </span>
    </Container>
  );
};

export default ProductItem;
