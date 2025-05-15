import React, {  useContext, useState, useEffect ,useRef} from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const userIconRef = useRef(null);

  // Fermer le menu si on clique ailleurs
  useEffect(() => {
    const handleClick = () => setContextMenuVisible(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
 
  // Ouvrir le menu au double-clic
  const handleDoubleClick = (e) => {
    e.preventDefault(); // Empêche le menu contextuel par défaut
    e.stopPropagation(); //  ça bloque le useEffect de tout fermer
    if (userIconRef.current) {
      const rect = userIconRef.current.getBoundingClientRect();
      const top = rect.bottom + window.scrollY + 8; // 8px d'espacement sous l'image
      const left = rect.right - 300; // on décale vers la gauche pour que le menu colle au bord droit de l'icône
  
      setContextMenuPosition({ x: left, y: top });
      setContextMenuVisible(true);
    }
  };

  // Actions des boutons du context menu lorsqu'on clique 
  const exploreGpts = () => alert('Explore GPTs');
  const customize = () => alert('Customize ChatGPT');
  const settings = () => alert('Settings');
  const upgrade = () => alert('Upgrade Plan');
  const extension = () => alert('Install Extension');
  const logout = () => alert('Logging out');
  return (
    <div className="main">
      <div className="nav">
        <p>Rev Assistance 1.0</p>
        <img ref={userIconRef} src={assets.user_icon} alt="" onClick={handleDoubleClick} />
        {contextMenuVisible && (
         <div
          className={`context-menu ${contextMenuVisible ? 'visible' : ''}`}
          style={{ top: `${contextMenuPosition.y}px`, left: `${contextMenuPosition.x}px` }}
         
         >
           <button onClick={exploreGpts}>
             <i className="bx bx-planet"></i> Explore REV
           </button>
           <button onClick={customize}>
             <i className="bx bx-slider-alt"></i> Customize REV
           </button>
           <button onClick={settings}>
             <i className="bx bx-cog"></i> Settings
           </button>
           <hr />
           <button onClick={upgrade}>
             <i className="bx bx-up-arrow-alt"></i> Upgrade Plan
           </button>
           {/* <button onClick={extension}>
             <i className="bx bx-extension"></i> Get Extension
           </button> */}
           <hr />
           <button className="logout" onClick={logout}>
             <i className="bx bx-log-out"></i> Log out
           </button>
         </div> 
       )} 
        
      </div>
      <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
          <p>
            <span>Hello ! welcome to Rev.</span>
          </p>
          <p>How can I help you today?</p>
         </div>
      
        </>
        :
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
           
          </div>


        </div>
        }
        
       
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="pose moi une question" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img  onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
              
            </div>
          </div>
          <p className="bottom-info">
             Rev Assistance @copyright
             Dev BrainTech Watibi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
