export default function ConsoleContainer() {
  
    function initTypingAnimation() {
        const words = ["Software Engineer", "Stabbin Dude", "Made with Love <3"];
    
        let target = document.getElementById("text");
        let con = document.getElementById("focusCursor");
    
        let visible = true;
        let waiting = false;
    
        let x = 1;
        let letterCount = 1;
    
        window.setInterval(() => {
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.textContent = words[0].substring(0, letterCount);
            window.setTimeout(() => {
              let usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              letterCount += x;
              waiting = false;
            }, 1000);
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(() => {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000);
          } else if (waiting === false) {
            target.textContent = words[0].substring(0, letterCount);
            letterCount += x;
          }
        }, 120);
        window.setInterval(() => {
          if (visible === true) {
            con.className = "focus-cursor flicker";
            visible = false;
          } else {
            con.className = "focus-cursor";
    
            visible = true;
          }
        }, 800);
      }
    
    return (
    <>
      <div className="console-container">
        <span id="text"></span>
        <div className="focus-cursor" id="focusCursor">
          &#124;
        </div>
      </div>
    </>
  );
}
