import React, { useState, useEffect } from "react";

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");


  // 초기화: LocalStorage에서 데이터 불러오기
  useEffect(() => {
  }, []);

  const handleAddEntry = async () => {
  };

  // 방명록 목록 렌더링
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>방명록</h1>
      {entries.length === 0 ? (
        <p style={{ textAlign: "center" }}>아직 작성된 방명록이 없습니다.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {entries.map((entry) => (
            <li
              key={entry.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <strong>{entry.name}</strong> <small>({entry.timestamp})</small>
              <p>{entry.message}</p>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: '20px'}}>
      <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            style={{
              padding: "10px",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지"
            style={{
              padding: "10px",
              width: "100%",
              height: "100px", // 높이 증가
              border: "1px solid #ccc",
              borderRadius: "5px",
              resize: "none", // 사용자가 크기 조정하지 못하도록 설정
            }}
          />
        </div>
      </div>
      <button
          onClick={handleAddEntry}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: '20px',
          }}
        >
          추가하기
        </button>
    </div>
  );
}

export default Guestbook;