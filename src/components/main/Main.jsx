import "./Main.css";
import { assets } from "../../assets/assets";

import React, { useContext } from "react";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Olá, Dev</span>
              </p>
              <p>Como posso te ajudar?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Me pergunte sobre um local.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Precisa de ideias?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Precisa de ajuda para enviar aquela mensagem?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Me faça uma pergunta de programação.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Digite algo aqui..."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              value={input}
            />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">O Gemini pode apresentar informações imprecisas, inclusive sobre pessoas. Por isso, cheque as respostas.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
