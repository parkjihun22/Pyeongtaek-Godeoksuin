import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택 고덕 수자인풍경채 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '평택 고덕 수자인풍경채') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시에서 만나는 새로운 프리미엄 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕 수자인풍경채, 우수한 입지와 생활 인프라를 누리는 브랜드 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·생활·미래가치를 모두 갖춘 고덕국제신도시 프리미엄 라이프.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시 중심 입지에 조성되는 평택 고덕 수자인풍경채.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          브랜드 프리미엄과 함께 편리한 교통·교육·생활 환경을 누릴 수 있는 주거 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          실거주와 미래가치를 함께 고려한 고덕국제신도시 대표 주거 선택지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕 수자인풍경채
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕국제신도시가 누리는 풍부한 생활 인프라와 미래 성장 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          광역 교통망과 직주근접 환경으로 더욱 편리한 생활 프리미엄을 제공합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 주거 환경과 효율적인 공간 설계를 고려한 평택 고덕 수자인풍경채.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          다양한 커뮤니티와 조경 특화 설계로 일상 속 여유를 제공합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕 수자인풍경채, 새로운 주거 기준을 제안합니다.
        </div>
      </>
    );
  }
};
