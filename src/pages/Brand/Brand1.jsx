import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      // { title: "브랜드 소개", url: "/brand/intro" }, 
      { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>평택 고덕 수자인풍경채 | 브랜드 소개</title>

  <meta
    name="description"
    content="평택 고덕 수자인풍경채 브랜드 소개. 평택 고덕국제신도시 수자인풍경채의 브랜드 가치, 주거 철학, 생활 인프라와 미래가치를 소개합니다."
  />

  <meta
    name="keywords"
    content="평택 고덕 수자인풍경채 브랜드소개, 고덕국제신도시 수자인풍경채, 평택 고덕 아파트, 평택 고덕 수자인풍경채 브랜드, 수자인 풍경채"
  />

  <link
    rel="canonical"
    href="https://www.diarivalencia.com/Brand/intro"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="평택 고덕 수자인풍경채" />

  <meta
    property="og:title"
    content="평택 고덕 수자인풍경채 | 브랜드 소개"
  />

  <meta
    property="og:description"
    content="평택 고덕국제신도시 수자인풍경채의 브랜드 가치와 주거 프리미엄을 소개합니다."
  />

  <meta
    property="og:url"
    content="https://www.diarivalencia.com/Brand/intro"
  />

  <meta
    property="og:image"
    content="https://www.diarivalencia.com/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
평택 고덕 수자인풍경채 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
평택 고덕 수자인풍경채 브랜드 소개 페이지입니다.
평택 고덕국제신도시 수자인풍경채의 브랜드 가치와 주거 철학,
생활 인프라, 쾌적한 단지 환경, 미래가치를 소개합니다.
평택 고덕 수자인풍경채는 실용적인 공간 설계와 품격 있는 주거 환경을 바탕으로
새로운 주거 가치를 제안합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>평택 고덕국제신도시의 생활을 가까이</div>
  <div>평택 고덕 수자인풍경채, 새로운 주거 가치</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="평택 고덕 수자인풍경채 브랜드 소개 및 고덕국제신도시 주거 가치 이미지"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
