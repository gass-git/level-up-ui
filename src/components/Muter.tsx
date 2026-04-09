export default function Muter({ambience, setAmbience}){
    return <>
      <div className="sound-icon" onClick={() => setAmbience({...ambience, muted: !ambience.muted})}>
        {
            [1,2,3,4].map((n) => <span key={n} style={{animationDelay: `${n}s`, animationPlayState: ambience.muted ? `paused` : `running` }}></span>)
        }
      </div>  
    </>
}