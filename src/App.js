import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function App() {
  const images = [];
  for (let i = 0; i < 22; i++) images.push(`/slide-images/${i+1}.jpg`)
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <section className="cover">
        <img src="/image1.jpg" />
      </section>

      <section className="intro">
        <h3>결혼합니다</h3>
        <p>
          하나님의 은혜로<br />
          서로 다른 두 사람이 만나<br />
          한 가정을 이룹니다.<br />
          <br />
          주님의 사랑 안에서<br />
          거룩한 가정을 이룰 수 있도록<br />
          축복해 주시고 기도해주시면<br />
          감사하겠습니다.
        </p>
      </section>

      <section className="family">
        <p>故 조은상 · 정연실의 장남 조항진</p>
        <p>진극권 · 정은희의 차녀 진승혜</p>
      </section>

      <section className="groom-bride">
        <div className="groom">
          <div className="groom-img">
            <img src="/groom-img.jpg" alt="신랑" />
          </div>
          <h3>
            <span>신랑</span>
            조항진
            <button>📞</button>
          </h3>
          <pre>故 조은상·정연실의 아들</pre>
        </div>
        <div className="bride">
          <div className="bride-img">
            <img src="/bride-img.jpg" alt="신부" />
          </div>
          <h3>
            <span>신부</span>
            진승혜
            <button>📞</button>
          </h3>
          <pre>진극권·정은희의 딸</pre>
        </div>
      </section>
      
      <button className="call-parent">혼주에게 연락하기</button>

      <section className="gallery">
        <h3>갤러리</h3>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop
          spaceBetween={50}
          slideperview={1}
          onSlideChange={(swiper) => {
            const index = swiper.realIndex + 1;
            setCurrentIndex(index)
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{
          position: "relative",
          height: "10px",
          background: "#ccc",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "10px",
          marginTop: "20px",
        }}>
          <div style={{
            width: `${currentIndex / images.length * 100}%`,
            height: '100%',
            background: 'skyblue',
            transition: "width 0.3s ease-in-out",
          }}></div>
        </div>
        <p style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "10px"
          }}>
            {currentIndex} / {images.length}
          </p>
      </section>

      <section className="route">
        <h2>오시는 길</h2>
        <h3 className="place">남서울교회 기쁨홀</h3>
        <p>서울 영등포구 신풍로16길 1</p>
        <Map
          center={{ lat: 37.5055, lng: 126.9140 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}
        >
          <MapMarker position={{ lat: 37.5055, lng: 126.9140 }}></MapMarker>
        </Map>

        <h3 className="left">지하철</h3>
        <p className="left">신풍역 1번 출구, 보라매역 4번출구</p>

        <h3 className="left">버스</h3>
        <p className="left">보라매공원(농심 앞) 하차 : 150, 5523, 5531, 5633, 5536, 5623 수녀원(신풍역) 하차 : 507, 760, 5616, 5620, 5625, 5627, 5713</p>

        <h3 className="left">주차</h3>
        <p className="left">남서울교회 B1, B2 지하주차장</p>

        <h3 className="left">대절버스 안내</h3>
        <p className="left">칠성교회 앞 > 남서울교회 앞 | 07:30 출발<br />
        남서울교회 앞 > 칠성교회 앞 | 15:00 출발</p>
      </section>
      
      <section className="after-party">
        <h3>피로연 안내</h3>
        <p className="date">일시 | 2025.02.08 15:00 ~ 19:00</p>
        <p className="place">장소 | 천일식당</p>
        <p className="address">(경남 함안군 칠서면 삼칠로 1387)</p>
      </section>

      <section className="bank-number">
        <h3>마음 전하실 곳</h3>
        <pre>
          멀리서도 축하의 마음을<br />
          전하고 싶으신 분들을 위해<br />
          계좌번호를 안내드립니다.<br />
          <br />
          소중한 축하를 보내주셔서 감사드리며,<br />
          따뜻한 마음에 깊이 감사드립니다.
        </pre>
        <div className="groom">
          <h2>신랑측</h2> 
          <div>  
            <div>  
              <h3>신랑</h3>
              <p>하나은행 40691082559007 조항진</p>
            </div>
            <button>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신랑 어머님</h3>
              <p>카카오뱅크 3333122546350 조항진</p>
            </div>
            <button>복사</button>
          </div>
        </div>

        <div className="bride">
          <h2>신부측</h2> 
          <div>  
            <div>  
              <h3>신부</h3>
              <p>카카오뱅크 3333122546350 진승혜</p>
            </div>
            <button>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 아버님</h3>
              <p>농협 80506052014445 진극권</p>
            </div>
            <button>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 어머님</h3>
              <p>농협 74105552014186 정은희</p>
            </div>
            <button>복사</button>
          </div>
        </div>
      </section>

      <section className="guestbook">
        <img src="/slide-images/22.jpg" alt="" />
      </section>
    </div>
  );
}

export default App;
