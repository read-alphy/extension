(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];
  let counter = 0


  const newVideoLoaded = async () => {

    setTimeout(() => {

      let div
      let inner_div = document.getElementById("alphy-inner-div")
      let submit_button = document.getElementById("alphy-submit-button")
      let text = document.getElementById("alphy-message")


      const currentUrl = window.location.href;
      const videoId = new URL(currentUrl).searchParams.get("v")
      let parent = document.querySelector("#secondary.style-scope.ytd-watch-flexy")
      div = document.createElement("div");

      if (!document.getElementById("alphy-main-div")) {
        div.setAttribute("id", "alphy-main-div");
        div.style = "width: 100%"
        div.style.fontFamily = "Roboto"

        parent.insertBefore(div, parent.childNodes[0]);
      }




      if (!document.getElementById("alphy-call-button")) {
        btn = document.createElement("button");
        btn.setAttribute("id", "alphy-call-button");

        btn.innerHTML = 'Call Alphy <svg fill="#1a1a1a" height ="15px" width="15px" style = "padding-left: 30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"        viewBox="0 0 330 330" xml:space="preserve">     <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393       c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393       s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>     </svg>';
        btn.id = "AlphyButton";
        btn.type = "submit";
        btn.style.width = "100%";
        btn.style.height = "45px";
        btn.style.fontFamily = "Roboto";
        btn.style.cursor = "pointer"
        btn.style.fontSize = "18px"
        btn.style.fontWeight = "semi-bold"
        btn.style.borderRadius = "6px";
        btn.style.color = "#1a1a1a"
        btn.style.background = "#fff"
        btn.style.border = "solid 2px grey"

      }

      if (document.getElementById("alphy-main-div")) {
        div.appendChild(btn);
      }




      if (!inner_div) {
        inner_div = document.createElement("div");
        inner_div.setAttribute("id", "alphy-inner-div")
        inner_div.style = "display : none; background-color : white; width:99%; margin:auto; font-size: 20px; color: white; border-radius: 6px; padding-top: 10px;  padding-bottom:10px; max-height:350px; overflow-y:scroll;"
        div.appendChild(inner_div)

      }




      if (!submit_button) {
        submit_button = document.createElement("button");
        submit_button.setAttribute("id", "alphy-submit-button")
        submit_button.style.display = "none"
        submit_button.style.margin = "auto"
        submit_button.style = "color: #ced4da;     height:40px;  background: linear-gradient(90deg, #212529, #0b090a);        font-weight: 500; text-align: center;       margin:auto;     border: none; border-radius: 5px; cursor: pointer"

        submit_button.innerHTML = "Submit this video for summarization";

        submit_button.addEventListener("click", function () {

          fetch("https://backend-production-33df.up.railway.app/summaries/" + videoId, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
          }).then((response) => { console.log(response) })

        })


      }



      btn.addEventListener("click", function () {
        // Get the text to be displayed
        let inner_div = document.getElementById("alphy-inner-div");
        // Check if the div is visible


        fetch("https://backend-production-33df.up.railway.app/summaries/youtube/" + videoId, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
        }).then((response) => { console.log("fetching data"); return response.json() })
          .then(json => {
            console.log(json.summary)
            if (!text) {
              text = document.createElement("p");
              text.setAttribute("id", "alphy-message")
              text.style.fontSize = "14px";
              text.style.color = "#1a1a1a"
              text.style.marginTop = "10px"
              text.style.marginBottom = "10px"
              text.style.padding = "10px"

            }

            if (json.summary) {


              let raw_text = json.summary
              text.innerHTML = raw_text.replace(/(?:\r\n|\r|\n)/g, '<br>')
              if (!document.getElementById("alphy-message")) { inner_div.appendChild(text) }

              if (inner_div.style.display === "block") {
                // Hide the     div
                inner_div.style.display = "none";

              }
              else {
                inner_div.style.display = "block";
              }

            }

            //in case returns null
            else {
              text.innerHTML = "There was a problem fetching the summary."
              if (!document.getElementById("alphy-message")) { inner_div.appendChild(text) }

              submit_button.style.display = "block"
              inner_div.appendChild(submit_button)
              if (inner_div.style.display === "block") {
                // Hide the     div
                inner_div.style.display = "none";

              }
              else {
                inner_div.style.display = "block";
              }
            }
          }
          ).catch(error => {

            if (!text) {
              text = document.createElement("p");
              text.setAttribute("id", "alphy-message")
              text.style.fontSize = "14px";
              text.style.color = "#1a1a1a"
              text.style.marginTop = "10px"
              text.style.marginBottom = "10px"
              text.style.padding = "10px"

            }

            console.log("Error: ", error);
            text.innerHTML = "Couldn't find this video on our database. Please submit it for processing."
            if (!document.getElementById("alphy-message")) { inner_div.appendChild(text) }

            submit_button.style.display = "block"
            inner_div.appendChild(submit_button)
            if (inner_div.style.display === "block") {
              // Hide the     div
              inner_div.style.display = "none";

            }
            else {
              inner_div.style.display = "block";
            }

          });

        // Show the div




      });










      /* 
      
      
            const bookmarkBtn = document.createElement("img");
      
            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Click to bookmark current timestamp";
      
            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName('video-stream')[0];
      
            youtubeLeftControls.appendChild(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler); */
    }, 2000)

  }
    ;

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;



    const component = document.querySelector("#alphy-inner-div");


    if (component) {
      component.style.display = "none"


    }

    if (type === "NEW") {
      currentVideo = videoId
      newVideoLoaded();
    }





  });
  newVideoLoaded();

}




)();

const getTime = t => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substr(11, 8);
};
