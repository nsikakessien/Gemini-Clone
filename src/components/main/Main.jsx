import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    prompt,
    setPrompt,
    recentPrompt,
    showResult,
    isLoading,
    isTyping,
    result,
    onSend,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can i help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, impedit?
                </p>
                <img src={assets.compass_icon} alt="compass icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, impedit?
                </p>
                <img src={assets.bulb_icon} alt="bulb icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, impedit?
                </p>
                <img src={assets.message_icon} alt="message icon" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, impedit?
                </p>
                <img src={assets.code_icon} alt="code icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user icon" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {isLoading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              type="text"
              placeholder="Enter a prompt here"
            />

            {!isTyping || isLoading ? (
              <div>
                <img src={assets.gallery_icon} alt="gallery icon" />
                <img src={assets.mic_icon} alt="mic icon" />
                {prompt ? (
                  <img
                    onClick={() => onSend("")}
                    src={assets.send_icon}
                    alt="send icon"
                  />
                ) : null}
              </div>
            ) : null}
          </div>
          <p className="bottom-info">
            Gemini might display inacurate info, including about people so
            double its responses. Your privacy and Gemini apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
