import { useEffect, useState } from "react";

class Drop {
  left: number;
  duration: number; // ms
  delay: number; // ms

  constructor(){
    this.left = Math.random() * 100;
    this.duration = (1 + Math.random())*1000;
    this.delay = Math.random()*1000;
  }
}

export default function Drops() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {

    // the time interval should be greater than the sum of the max animation delay and max animation duration.
    const interval = setInterval(() => {
      const rand = Math.random();
      const dropList = [];

      // the quantity of drops through time will fluctuate
      if(rand < 0.1){
        setDrops(dropList);
        return;
      }
      else if(rand < 0.4){
        dropList.push(new Drop());
      }
      else if(rand < 0.6){
        dropList.push(new Drop(), new Drop());
      }
      else{
        dropList.push(new Drop(), new Drop(), new Drop());
      }

      setDrops(dropList)
    }, 3000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div style={{ zIndex: -1 }}>
      {drops.map((drop, i) => (
        <div
          key={i}
          className="water-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}ms`,
            animationDelay: `${drop.delay}ms`,
            animationIterationCount: 1}}
        />
      ))}
    </div>
  );
}
