import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Guestbook from './Guestbook';

function App() {
  const images = [];
  for (let i = 0; i < 21; i++) images.push(`slide-images/${i+1}.jpg`)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGroomExpend, setIsGroomExpend] = useState(true);
  const [isBrideExpend, setIsBrideExpend] = useState(true);

  const copyText = async (texture) => {
    try {
      await navigator.clipboard.writeText(texture)
      alert("복사가 완료되었습니다.")
    } catch (e) {
      console.error("텍스트 복사 실패", e)
    }
  }

  return (
    <div className="App">
      <section className="cover">
        <img src="image1.jpg" />
      </section>

      <section className="intro">
        <div className="place">
          <p>
            2025.03.08 토요일 오후 1시<br />
            <span>남서울교회 2층 기쁨홀</span>
          </p>
        </div>
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
        <p>故 <span>조은상 · 정연실</span> 의 장남 <span>조항진</span></p>
        <p><span>진극권 · 정은희</span> 의 차녀 <span>진승혜</span></p>
      </section>

      <img src="slide-images/7.jpg" alt="" className="cover-img" />

      <section className="groom-bride">
        <div className="groom">
          <div className="groom-img">
            <img src="groom-img.jpg" alt="신랑" />
          </div>
          <h3>
            <span>신랑</span>
            조항진
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-7795-4500`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-7795-4500`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />
          <h3>
            <span>신랑 혼주</span>
          </h3>
          <p>
            <span>어머니</span>정연실
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-5690-2922`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-5690-2922`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
        </div>
        <div className="bride">
          <div className="bride-img">
            <img src="bride-img.jpg" alt="신부" />
          </div>
          <h3>
            <span>신부</span>
            진승혜
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-7795-4500`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-7795-4500`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />
          <h3>
            <span>신부 혼주</span>
          </h3>
          <p>
            <span>아버지</span>진극권
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-4119-4500`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-4119-4500`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <p>
            <span>어머니</span>정은희
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-4019-4500`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-4019-4500`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
        </div>
      </section>
      
      <div className="horizontal">
        <div></div>
        <div></div>
      </div>

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
        
        <div style={{ padding: '0 10px'}}>
          <p style={{
            color: "#aaa",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "10px",
            textAlign: 'center',            
          }}>
            {currentIndex} / {images.length}
          </p>
        </div>
        
        
      </section>

      <section className="route">
        <h2>오시는 길</h2>
        <Map
          center={{ lat: 37.5055, lng: 126.9140 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}
        >
          <MapMarker position={{ lat: 37.5055, lng: 126.9140 }}></MapMarker>
        </Map>
        
        <div style={{ backgroundColor: '#eee', padding: '30px 15px 40px'}}>
          <h3 className="place">남서울교회 기쁨홀</h3>
          <p>
            서울 영등포구 신풍로16길 1 <span onClick={() => copyText('서울 영등포구 신풍로16길 1')}>복사</span>
          </p>

          <h3 className="left" style={{ marginTop: '30px'}}>지하철</h3>
          <p className="left">신풍역 1번 출구, 보라매역 4번출구</p>

          <h3 className="left" style={{ marginTop: '30px'}}>버스</h3>
          <p className="left">보라매공원(농심 앞) 하차 : 150, 5523, 5531, 5633, 5536, 5623 <br />
          수녀원(신풍역) 하차 : 507, 760, 5616, 5620, 5625, 5627, 5713</p>

          <h3 className="left" style={{ marginTop: '30px'}}>주차</h3>
          <p className="left">남서울교회 B1, B2 지하주차장</p>

          <h3 className="left" style={{ marginTop: '30px'}}>대절버스 안내</h3>
          <p className="left">칠성교회 앞 > 남서울교회 앞 | 07:30 출발<br />
          남서울교회 앞 > 칠성교회 앞 | 15:00 출발</p>
        </div>
        
      </section>
      
      <section className="after-party">
        <h3>피로연 안내</h3>
        <p className="date">일시 | 2025.02.08 15:00 ~ 19:00</p>
        <p className="place">장소 | 천일식당</p>
        <p className="address">경남 함안군 칠서면 삼칠로 1387 <span onClick={() => copyText('경남 함안군 칠서면 삼칠로 1387')}>복사</span></p>
        <Map
          center={{ lat: 35.3215, lng: 128.4067 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}
        >
          <MapMarker position={{ lat: 35.3215, lng: 128.4067 }}></MapMarker>
        </Map>
      </section>

      <section className="bank-number">
        <h3>마음 전하실 곳</h3>
        <pre>
          멀리서도 축하의 마음을<br />
          전하고 싶으신 분들을 위해<br />
          계좌번호를 안내드립니다.<br />
          <br />
          소중한 축하를 보내주셔서 감사드리며,<br />
          따뜻한 마음에 깊이 감사드립니다
        </pre>
        <div className="groom">
          <h2>
            <div>
              <h3>신랑측</h3>
              <button onClick={() => setIsGroomExpend(!isGroomExpend)}>
                <div className={isGroomExpend ? 'arrow arrow-up' : 'arrow arrow-down'}></div>
              </button>
            </div>
          </h2>
          {isGroomExpend && (
            <>
            <div>  
              <div>  
                <h3>신랑 조항진</h3>
                <p>하나은행 40691082559007 조항진</p>
              </div>
              <button onClick={() => copyText("하나은행 40691082559007")}>복사</button>
            </div>
            <div style={{ borderTop: 'none'}}>  
              <div>  
                <h3>신랑 모) 정연실</h3>
                <p>하나은행 40691082559007 조항진</p>
              </div>
              <button onClick={() => copyText("하나은행 40691082559007")}>복사</button>
            </div>
            </>
          )}
          
        </div>

        <div className="bride" style={{ marginTop: '40px'}}>
          <h2>
            <div>
              <h3 style={{ color: '#ff85a1'}}>신부측</h3>
              <button onClick={() => setIsBrideExpend(!isBrideExpend)}>
                <div className={isBrideExpend ? 'arrow bride arrow-up' : 'arrow bride arrow-down'}></div>
              </button>
            </div>
          </h2> 
          <div>  
            <div>  
              <h3>신부 진승혜</h3>
              <p>카카오뱅크 3333122546350 진승혜</p>
            </div>
            <button onClick={() => copyText("카카오뱅크 3333122546350")}>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 부) 진극권</h3>
              <p>농협 80506052014445 진극권</p>
            </div>
            <button onClick={() => copyText("농협 80506052014445")}>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 모) 정은희</h3>
              <p>농협 74105552014186 정은희</p>
            </div>
            <button onClick={() => copyText("농협 74105552014186")}>복사</button>
          </div>
        </div>
      </section>

      <section className="guestbook">
        <p>
          Edited by<br />
          Hangjin & Seunghye
        </p>
        <img src="slide-images/22.jpg" alt="" />
        {/* <Guestbook /> */}
      </section>
    </div>
  );
}

export default App;
