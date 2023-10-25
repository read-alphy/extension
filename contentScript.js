const yt_light_active_el_bg = "#fafafa";
const yt_light_active_el_color = "#3f3f46";
const yt_light_inactive_el_bg = "#f4f4f5";
const yt_light_inactive_el_color = "#27272a";

const yt_dark_active_el_bg = "#18181b";
const yt_dark_active_el_color = "#f4f4f5  ";
const yt_dark_inactive_el_bg = "#18181b";
const yt_dark_inactive_el_color = "f4f4f5";

const search_bar_border_color = "#C6C7C7";
const search_bar_border_color_dark = "#303131";
const search_bar_button_dark_bg = "#232223";
const search_bar_dark_inner_bg = "#131213";



let theme = "";

const injectButton = (container) => {
  if (document.querySelector(".alphy-button")) {
    return;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "alphy-button";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.padding = "12px";
  wrapper.style.margin = "12px 0px";
  wrapper.style.border = `1px solid ${borderColor}`;
  wrapper.style.borderRight = "none";
  wrapper.style.borderLeft = "none";

  const prompt = document.createElement("div");
  prompt.innerText =
    "Looks like this spaces haven't been summarized yet. Would you like to summarize it now?";
  prompt.style.marginBottom = "10px";
  prompt.style.fontSize = "15px";

  const button = document.createElement("button");
  button.innerText = "Unlock with Alphy";
  button.addEventListener("click", () => {
    window.location.href = "https://alphy.app";
  });
  /* button.style.backgroundColor = "#EFF3F4"; */
  button.style.backgroundColor = theme==="yt-light" ? yt_dark_active_el_bg  : yt_light_active_el_bg
  button.style.border = "none";
  button.style.borderRadius = "9999px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  /* button.style.color = "rgb(56,61,64)"; */
  button.style.color = theme==="yt-light" ?yt_light_active_el_color : yt_light_active_el_color;

  button.onmouseover = function () {
    button.style.backgroundColor = "#E7E9EA";
  };
  button.onmouseout = function () {
    button.style.backgroundColor = "#EFF3F4";
  };

  // Add custom button styles here
  wrapper.appendChild(prompt);
  wrapper.appendChild(button);
  container.appendChild(wrapper);
};

const createQAToggle = (question, answer) => {
  const id = window.location.href.split("/").pop();
  const qaElement = document.createElement("div");
  const horizontalDiv = document.createElement("div");
  const textContainer = document.createElement("div");
  const questionElement = document.createElement("div");
  const answerElement = document.createElement("div");
  const rightDiv = document.createElement("div");
  const watermark = document.createElement("div");
  const shareDiv = document.createElement("div");

  watermark.innerHTML = "AI answer powered by ";
  //   add @alphy a link
  const waterMarkLink = document.createElement("a");
  waterMarkLink.style.color = "rgb(29,155,240)";
  waterMarkLink.style.textDecoration = "none";
  waterMarkLink.style.fontSize = "15px";
  //   on mouseover
  waterMarkLink.onmouseover = function () {
    waterMarkLink.style.textDecoration = "underline";
  };
  waterMarkLink.onmouseout = function () {
    waterMarkLink.style.textDecoration = "none";
  };

  // inner html is @alphy
  waterMarkLink.innerHTML = "@alphyapp";
  //   add a link to the alphy app
  waterMarkLink.href = "https://twitter.com/alphyapp";
  watermark.appendChild(waterMarkLink);

  watermark.style.fontSize = "15px";
  watermark.style.color = "rgb(113, 118, 123)";
  watermark.style.margin = "5px 0px";

  // Set up the main container
  qaElement.style.display = "flex";
  qaElement.style.borderBottom = `0.1px solid ${borderColor}`;
  qaElement.style.padding = "12px";
  qaElement.style.transition = "background-color 0.3s ease-in-out";

  // Set up the horizontal div
  horizontalDiv.style.width = "48px";
  horizontalDiv.style.flexShrink = "0"; // Prevent the div from shrinking

  // craeate an image with 48 48 with full round and add it to the horizontal div as flex items start
  const img = document.createElement("img");
  img.src =
    "https://ph-files.imgix.net/ae970805-5426-4545-802e-c8e54546463a.png";
  img.style.width = "48px";
  img.style.height = "48px";
  img.style.borderRadius = "50%";
  img.style.objectFit = "cover";
  img.style.cursor = "pointer";
  //   href to the alphy app
  img.onclick = function () {
    // window.open("https://twitter.com/alphyapp"); this is the old way
    window.location.href = "https://twitter.com/alphyapp";
  };

  horizontalDiv.appendChild(img);

  // Set up the text container
  textContainer.style.display = "flex";
  textContainer.style.flexDirection = "column";
  textContainer.style.justifyContent = "flex-start";
  //   1.5 is the default line height
  textContainer.style.lineHeight = "1.3";

  shareDiv.style.display = "flex";
  shareDiv.style.justifyContent = "space-around";
  shareDiv.style.width = "calc(100% - 48px)";
  const shareWrapper = document.createElement("div");
  shareWrapper.style.display = "flex";
  shareWrapper.style.justifyContent = "center";
  shareWrapper.style.alignItems = "center";
  shareWrapper.style.width = "35px";
  shareWrapper.style.height = "35px";
  shareWrapper.style.borderRadius = "50%";

  const linkWrapper = document.createElement("div");
  linkWrapper.style.display = "flex";
  linkWrapper.style.justifyContent = "center";
  linkWrapper.style.alignItems = "center";
  linkWrapper.style.width = "35px";
  linkWrapper.style.height = "35px";
  linkWrapper.style.borderRadius = "50%";

  // Create the share icon SVG element
  const shareIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  shareIcon.setAttribute("viewBox", "0 0 24 24");
  shareIcon.style.width = "18.75px";
  shareIcon.style.height = "18.75px";

  // Create the share icon path element
  const shareIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  shareIconPath.setAttribute("fill", "#575A5E");
  shareIconPath.setAttribute(
    "d",
    "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
  );

  // Append the share icon path to the share icon SVG
  shareIcon.appendChild(shareIconPath);
  shareWrapper.appendChild(shareIcon);
  shareWrapper.style.cursor = "pointer";
  //   on click, share a tweet with the question and answer
  shareWrapper.onclick = function () {
    const maxTweetLength = 280;
    let baseText = "";
    const initialLength =
      `🤔 ${question}\n\n@alphyapp 🤖: ${answer}\n\nhttps://alphy.app/sp/${id}`
        .length;
    if (initialLength < maxTweetLength) {
      baseText = `🤔 ${question}\n\n@alphyapp 🤖: ${answer}\n\nhttps://alphy.app/sp/${id}`;
    } else {
      baseText = `🤔 ${question} - a 🧵 by @alphyapp\n\n 🤖: ${answer}`;
    }

    const words = baseText.split(" ");
    let currentTweet = "";
    let tweetParts = [];

    words.forEach((word) => {
      if ((currentTweet + word).length > maxTweetLength - 4) {
        tweetParts.push(currentTweet.trim() + "👇");
        currentTweet = "";
      }

      currentTweet += word + " ";
    });

    tweetParts.push(currentTweet.trim());
    const encodedTweetParts = tweetParts.map((part) =>
      encodeURIComponent(part)
    );
    const tweet = `https://twitter.com/intent/tweet?text=${encodedTweetParts.join(
      "%0A%0A"
    )}`;

    window.open(tweet);
  };

  shareWrapper.addEventListener("mouseover", () => {
    shareWrapper.style.backgroundColor = "rgba(0,186,124,0.1)";
    shareIconPath.setAttribute("fill", "green");
  });
  shareWrapper.addEventListener("mouseout", () => {
    shareWrapper.style.backgroundColor = "transparent";
    shareIconPath.setAttribute("fill", "#575A5E");
  });

  shareDiv.appendChild(shareWrapper);

  const linkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  linkIcon.setAttribute("viewBox", "0 0 24 24");
  linkIcon.style.width = "18.75px";
  linkIcon.style.height = "18.75px";

  const linkIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  linkIconPath.setAttribute("fill", "#575A5E");
  linkIconPath.setAttribute(
    "d",
    "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
  );

  linkIcon.appendChild(linkIconPath);
  linkWrapper.appendChild(linkIcon);
  linkWrapper.style.cursor = "pointer";
  linkWrapper.addEventListener("mouseover", () => {
    linkWrapper.style.backgroundColor = "rgba(29,155,240,0.1)";
    linkIconPath.setAttribute("fill", "rgb(29,155,240)");
  });
  linkWrapper.addEventListener("mouseout", () => {
    linkWrapper.style.backgroundColor = "transparent";
    linkIconPath.setAttribute("fill", "#575A5E");
  });

  linkWrapper.addEventListener("click", () => {
    window.open(`https://alphy.app/sp/${id}`, "_blank");
  });

  shareDiv.appendChild(linkWrapper);

  // Set up the question and answer elements
  questionElement.textContent = question;
  questionElement.style.fontWeight = "bold";
  questionElement.style.cursor = "pointer";

  answerElement.innerHTML = answer;
  answerElement.style.display = "block";

  qaElement.addEventListener("mouseover", () => {
    // bgLayer.style.filter = "brightness(0.5)";
  });

  qaElement.addEventListener("mouseout", () => {
    // bgLayer.style.filter = "brightness(1)";
  });

  questionElement.addEventListener("click", () => {
    answerElement.style.display =
      answerElement.style.display === "none" ? "block" : "none";
    horizontalDiv.style.display =
      horizontalDiv.style.display === "none" ? "block" : "none";
    watermark.style.display =
      watermark.style.display === "none" ? "block" : "none";
    shareDiv.style.display =
      shareDiv.style.display === "none" ? "flex" : "none";
  });

  // Append the elements to their respective containers
  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "column";
  rightDiv.style.paddingLeft = "12px";
  rightDiv.appendChild(questionElement);
  rightDiv.appendChild(watermark);
  rightDiv.appendChild(answerElement);

  textContainer.appendChild(rightDiv);
  textContainer.appendChild(shareDiv);
  qaElement.appendChild(horizontalDiv);
  qaElement.appendChild(textContainer);

  return qaElement;
};

const renderQA = (qaData, container) => {
  const loading = document.createElement("div");


  const askQuestion = document.createElement("form");
  askQuestion.style.display = "flex";
  askQuestion.style.alignItems = "center";
  askQuestion.style.padding = "12px 0px";
  askQuestion.style.margin = "0px 12px";
  askQuestion.style.borderTop = `0.1px solid ${borderColor}`;

  const askQuestionImage = document.createElement("img");
  askQuestionImage.src =
    "https://ph-files.imgix.net/ae970805-5426-4545-802e-c8e54546463a.png";
  askQuestionImage.style.width = "48px";
  askQuestionImage.style.height = "48px";
  askQuestionImage.style.borderRadius = "50%";
  askQuestionImage.style.objectFit = "cover";
  askQuestionImage.style.marginRight = "12px";

  const askQuestionInput = document.createElement("input");
  askQuestionInput.type = "text";
  askQuestionInput.placeholder = "Ask a Question to the trancript...";
  askQuestionInput.style.width = "100%";
  askQuestionInput.style.border = "none";
  askQuestionInput.style.borderRadius = "4px";
  askQuestion.style.height = "50px";
  askQuestionInput.style.padding = "12px 0px";
  askQuestionInput.style.fontSize = "20px";
  askQuestionInput.style.backgroundColor = "transparent";
  askQuestionInput.style.color = `${textColor}`;
  //   on focus no border
  askQuestionInput.addEventListener("focus", () => {
    askQuestionInput.style.border = "none";
    askQuestionInput.style.outline = "none";
  });

  const askQuestionButton = document.createElement("button");
  askQuestionButton.type = "submit";
  askQuestionButton.textContent = "Ask!";
  askQuestionButton.style.fontSize = "15px";
  askQuestionButton.style.fontWeight = "bold";
  askQuestionButton.style.border = "none";
  askQuestionButton.style.borderRadius = "9999px";
  askQuestionButton.style.padding = "0 16px";
  askQuestionButton.style.backgroundColor = `${buttonColor}`;
  askQuestionButton.style.color = "white";
  askQuestionButton.style.cursor = "pointer";
  askQuestionButton.style.marginLeft = "12px";
  askQuestionButton.style.height = "36px";
  askQuestionButton.disabled = true;
  askQuestionButton.style.filter = "brightness(80%)";
  //   if the input is empty, or if the input is more than 1000 characters, then disable the button
  askQuestionInput.addEventListener("input", () => {
    if (askQuestionInput.value.length === 0) {
      askQuestionButton.disabled = true;
      askQuestionButton.style.filter = "brightness(80%)";
    } else if (askQuestionInput.value.length > 1000) {
      askQuestionButton.disabled = true;
      askQuestionButton.style.filter = "brightness(80%)";
    } else {
      askQuestionButton.disabled = false;
      askQuestionButton.style.filter = "brightness(100%)";
    }
  });

  askQuestionButton.addEventListener("mouseover", () => {
    askQuestionButton.style.backgroundColor = `${buttonColorHover}`;
  });
  askQuestionButton.addEventListener("mouseout", () => {
    askQuestionButton.style.backgroundColor = `${buttonColor}`;
  });

  askQuestion.appendChild(askQuestionImage);
  askQuestion.appendChild(askQuestionInput);
  askQuestion.appendChild(askQuestionButton);

  //   make the request to the backend
  askQuestion.addEventListener("submit", (e) => {
    e.preventDefault();
    // first check if the question is empty or is more than 1000 characters
    if (askQuestionInput.value.length === 0) {
      alert("Please enter a question");
      return;
    }
    if (askQuestionInput.value.length > 1000) {
      alert("Please enter a question that is less than 1000 characters");
      return;
    }

    loading.style.display = "flex";
    const id = window.location.pathname.split("/").pop();
    const url = `https://backend-dev-f8aa.up.railway.app/summaries/sp/${id}/question`;
    const body = askQuestionInput.value;
    const question = askQuestionInput.value;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((res) => res.json())
      .then((data) => {
        // update the qaData
        qaData[question] = data;
        // clear the input
        askQuestionInput.value = "";
        // render the new qa
        const qaToggle = createQAToggle(question, data.answer);
        const qaContainer = document.getElementById("qa-container");
        // qaContainer.appendChild(qaToggle);
        qaContainer.insertBefore(qaToggle, qaContainer.firstChild);
      })
      .finally(() => {
        loading.style.display = "none";
      });
  });
  const hrLine = document.createElement("hr");

  hrLine.style.border = "none";
  hrLine.style.borderTop = `0.1px solid ${borderColor}`;

  const qaContainer = document.createElement("div");
  qaContainer.id = "qa-container";

  for (const question in qaData) {
    const answer = qaData[question].answer;
    const qaToggle = createQAToggle(question, answer);
    qaContainer.appendChild(qaToggle);
  }

  container.appendChild(askQuestion);
  container.appendChild(loading);
  container.appendChild(hrLine);
  container.appendChild(qaContainer);
};

const waitForElement = async (selector) => {
  while (!document.querySelector(selector)) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};

const fetchData = async (id, source) => {
  let sourceData = ""
  await fetch(
    `https://backend-dev-f8aa.up.railway.app/sources/${source}/${id}`,{
      method: 'GET',
  headers: {
    'accept': 'application/json'
  }
    }
  ).then(response => response.json())
  .then(data =>  
    sourceData=data
   
  )
 
  .catch((err) => {
    console.log(err)
    return null
  });


if(sourceData.summaries!==undefined){
  return sourceData;
}


};

const appendTwitterUI = async (id, container, data) => {
  backgroundColor = theme === "tw-light" ? "#EDF1F2" : "#1F2224";
  borderColor = theme === "tw-light" ? "#EFF3F4" : "#2F3336";
  buttonColor = "#1C9BF1";
  buttonColorHover = "#1F8BD8";
  container.style.fontFamily = "Roboto, sans-serif";
  textColor = theme === "tw-light" ? "#0F1419" : "#E7E9EA";

  container.style.color = `${textColor}`;
  container.style.padding = "12px 0px";
  container.style.margin = "16px 0px";
  container.style.borderRadius = "12px";
  if (id) {
    if (!data) {
      injectButton(container);
    } else {
      renderQA(data, container);
    }
  }
};

const toggleTabs = (tab, container) => {

  const qaArea = document.getElementsByClassName("qa-area")[0];
  const summaryArea = document.getElementsByClassName("summary-area")[0];
  const keyTakeawaysArea = document.getElementsByClassName("key-takeaways-area")[0];
  const transcriptArea  = document.getElementsByClassName("transcript-area")[0];

  const summaryTab = document.getElementsByClassName("summary")[0];
  const qaTab = document.getElementsByClassName("qa")[0];
  const keyTakeawaysTab = document.getElementsByClassName("keyTakeaways")[0];
  const transcriptTab = document.getElementsByClassName("transcript")[0];



  if (tab === "summary") {
    /* summaryTab.style.backgroundColor = "#27272a";
    qaTab.style.backgroundColor = "#27272a"; */
    summaryArea.style.display="block"
    qaArea.style.display = "none";
    keyTakeawaysArea.style.display="none"
    transcriptArea.style.display="none"

    summaryTab.style.fontWeight = "bold";
    qaTab.style.fontWeight = "normal";
    keyTakeawaysTab.style.fontWeight = "normal";
    transcriptTab.style.fontWeight = "normal";



    
    
  } else if (tab === "qa") {
/*     
    summaryTab.style.backgroundColor = "#27272a";
    qaTab.style.backgroundColor = "#27272a"; */

    qaArea.style.display = "block";

    keyTakeawaysArea.style.display="none"
    transcriptArea.style.display="none"
    summaryArea.style.display="none";

    qaTab.style.fontWeight = "bold";
    summaryTab.style.fontWeight = "normal";
    keyTakeawaysTab.style.fontWeight = "normal";
    transcriptTab.style.fontWeight = "normal";
    

  
  }
  else if (tab === "keyTakeaways") {

    keyTakeawaysArea.style.display="block"
    transcriptArea.style.display="none"
    summaryArea.style.display="none";
    qaArea.style.display = "none";

    keyTakeawaysTab.style.fontWeight = "bold";
    summaryTab.style.fontWeight = "normal";
    qaTab.style.fontWeight = "normal";
    transcriptTab.style.fontWeight = "normal";


  }

  else if (tab === "transcript") {

    keyTakeawaysArea.style.display="none"
    transcriptArea.style.display="block"
    summaryArea.style.display="none";
    qaArea.style.display = "none";

    transcriptTab.style.fontWeight = "bold";
    summaryTab.style.fontWeight = "normal";
    qaTab.style.fontWeight = "normal";
    keyTakeawaysTab.style.fontWeight = "normal";
  }

}


const createTopSide = (container, id) => {

  const topSide = document.createElement("div");
  topSide.style.display = "flex";
  topSide.style.flexDirection = "row";  // Corrected the typo 'flexDireciton' to 'flexDirection'
  topSide.style.width = "100%";
  topSide.style.borderBottom = "1px solid #6b7280";

  const createTab = (text) => {
    const tab = document.createElement("div");

    tab.textContent = text;
    tab.style.cursor = "pointer";
    tab.style.padding = "10px 10px";
    tab.style.margin = "5px";
    

    /* tab.style.backgroundColor = "#27272a"; */
    //underline
    
    tab.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;  // Dark grey text
    
    tab.style.width = "25%";
    tab.classList.add("tab");
    if(text==="Summary"){
      tab.classList.add("summary")
    }
    else if(text==="Q&A"){
      tab.classList.add("qa")
    }
    else if(text==="Takeaways"){
      tab.classList.add("keyTakeaways")
    }
    else if(text==="Transcript"){
      tab.classList.add("transcript")
    }
    

    // Hover effect
/*    tab.addEventListener("mouseenter", () => {
      tab.style.color = "#fff";  // Slightly darker grey on hover
    });
    tab.addEventListener("mouseleave", () => {
      tab.style.color = "#d4d4d8";  // Return to original color
    });  */

    return tab;
  };

  const keyTakeawaysTab = createTab("Takeaways");
  const summaryTab = createTab("Summary");
  const transcriptTab = createTab("Transcript");
  const qaTab = createTab("Q&A");

  // Add event listeners for click events
  summaryTab.addEventListener("click", () => {
    toggleTabs("summary",container)
  });

  qaTab.addEventListener("click", () => {
    // Handle the Q&A tab click here
    toggleTabs("qa",container)
  });

  transcriptTab.addEventListener("click", () => {
    // Handle the transcript tab click here
    toggleTabs("transcript",container)
  });

  keyTakeawaysTab.addEventListener("click", () => {
    // Handle the key takeaways tab click here
    toggleTabs("keyTakeaways",container)
  });

  

  topSide.appendChild(keyTakeawaysTab);
  topSide.appendChild(summaryTab);
  topSide.appendChild(transcriptTab);
  topSide.appendChild(qaTab);

  return topSide;

}

const createAlphyBanner = (container, id,title) => {
  const alphyBanner = document.createElement("div");
  alphyBanner.style.display = "flex";
  alphyBanner.style.flexDirection = "row";  
  alphyBanner.style.width = "80%";
  alphyBanner.style.margin="auto";
  alphyBanner.style.paddingBottom = "6px";
  alphyBanner.style.marginBottom = "6px";
  alphyBanner.style.alignContent = "center";
  alphyBanner.style.justifyContent = "center";
  alphyBanner.style.alignItems = "center";
  alphyBanner.style.textAlign = "center";

  
  const disclaimer = document.createElement("p");
  disclaimer.innerHTML = `<p>Visit <a href="https://alphy.app/yt/${id}" target="_blank" style="color:${theme==="yt-light?" ? "#4ade80":"#86efac"};"> Alphy</a> to ask questions and create an Arc with "${title}"</p>`;

  disclaimer.style.margin = "0";
  disclaimer.style.paddingLeft = "5px";
  disclaimer.style.fontSize = "12px"
  //opacity
  disclaimer.style.opacity = "0.6";
  /* disclaimer.style.fontStyle = "italic";  */
  disclaimer.style.color = theme === "yt-light" ? yt_light_active_el_color  : yt_dark_active_el_color;

  alphyBanner.appendChild(disclaimer);

  return alphyBanner


}

const appendYoutubeUI = async (id, container, data) => {

  const summaryData = data.summaries[0]
  
  addStyles();

  container.classList.add("youtube-container");
 const summaryText= summaryData.summary_prettified ? summaryData.summary_prettified : summaryData.summary;


  
  container.prepend(createQAArea(container,id, summaryData))
  container.prepend(createKeyTakeawaysArea(summaryData.key_takeaways))
  container.prepend(createTranscriptArea(data.transcript))
  container.prepend(createSummaryArea(summaryText))
  container.prepend(createTopSide(container, id));
  container.prepend(createAlphyBanner(container, id,data.title));
  
 
  const watermark = document.createElement("div");
  watermark.innerHTML =
    "Powered by <a href='https://alphy.app' style='color:grey'> <img src='https://alphy.app/favicon.ico' style='width: 15px; height: 15px; margin-bottom: -3px; margin-right: 3px; margin-left: 3px; '/>Alphy</a>";

  watermark.style.fontSize = "14px";
  watermark.style.color = "grey";
  watermark.style.marginTop = "10px";
  watermark.style.marginBottom = "20px";
  watermark.style.textAlign = "center";
  
  container.appendChild(watermark);

  const logo = document.createElement("div");
  logo.innerHTML = 
  `<a href='https://alphy.app' target='_blank' style='color:${theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color}; text-decoration:none'> <img src='https://alphy.app/favicon.ico' style='width: 20px; height: 20px; margin-bottom: -3px; margin-right: 3px; margin-left: 3px; padding-right: 3px;'/>ALPHY</a>`;
  logo.style.fontSize = "16px";
  logo.style.fontFamily = "'roboto', sans-serif";
  logo.style.fontWeight = "bold";
  logo.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;
  
  logo.style.marginBottom = "20px";
  logo.style.marginTop = "10px";
  logo.style.textAlign = "center";
  
  container.prepend(logo)

};


document.addEventListener("click", handleTimestampClick);



// Youtube player timestamp functions
const onPlay = async timestamp => {
  const youtubePlayer = document.getElementsByClassName('video-stream')[0];
  youtubePlayer.currentTime=timestamp

};


function handleTimestampClick(event) {
  if (event.target.classList.contains("timestamp-link")) {
    const timestamp = event.target.getAttribute("data-timestamp");
    onPlay(timestamp)

  }
}







const addStyles = () => {
  const styles = `

    .youtube-container {
      background: rgba(122,122,122,0.1);
      padding: 10px;
      border-radius: 5px;
      color: white;
      font-size: 14px;
      font-family: Segoe UI, sans-serif;
    }
    .form {
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 10px;
    }
    .input {
      width: 100%;
      font-size: 14px;
      border-radius: 999px 0px 0px 999px;
      padding: 10px 10px 10px 15px;
    }
    input:focus {
      outline: none;
    }

    .button {
      height: 38px;
      font-size: 14px;
      padding: 0px 15px 0px 13px;  
      border-left: 0px;
      border-radius: 0px 999px 999px 0px;
    }
    .loading {
      display: none;
      color: blue;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
    .question-answer-list {
      padding: 10px;
      padding-top: 3px;
      margin-bottom: 10px;
      max-height: 500px;
      overflow-y: auto;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .question {
      cursor: pointer;
      margin-top: 10px;
      border-radius: 5px;
      padding: 6px 8px;
    }

    .question:hover {
      transition: background-color 0.3s ease-in-out;
      filter: brightness(95%);

    }
    .answer {
      font-size: 13px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 0px 0px 5px 5px;
      max-height: 0px;
      transition: max-height 0.3s ease-in-out;
    }

    .answer.show {
      max-height: 1000px;
      padding: 10px;
      transition: max-height 0.3s ease-in-out; /* added */
    }
    
    .answer.hide {
      max-height: 0px;
      transition: max-height 0.3s ease-in-out; /* added */
    }

  `;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
};



function convertMarkupToHTML(markup) {
  // Split the text into lines
  const lines = markup.split('\n');
  
  let html = '';
  for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Check for headings based on ##
      if (line.startsWith('#') || line.startsWith('##') || line.startsWith('###') || line.startsWith('#####') ) {
          // Close any previous open <ul> tags
          if (html.endsWith('</li>')) {
              html += '</ul><br/>';
          }

          // Add the heading
          html += `<h3>${line.substring(2).trim()}</h3> <br/>`;
      } 
      // Check for bullet points based on -
      else if (line.startsWith('-')) {
          // Open a <ul> tag if it's not already open
          if (!html.endsWith('</li>') && !html.endsWith('<ul>')) {
              html += '<ul>';
          }

          // Add the list item
          html += `<li>${line.substring(1).trim()}</li>`;
      }
  }

  // Close any remaining open <ul> tags
  if (html.endsWith('</li>')) {
      html += '</ul>';
  }

  return html;
  
}


const createKeyTakeawaysArea = (keyTakeaways) => {
  
  const keyTakeawaysArea = document.createElement("div");
  keyTakeawaysArea.classList.add("key-takeaways-area");
  keyTakeawaysArea.style.display = "none";
  keyTakeawaysArea.style.flexDirection = "column";
  keyTakeawaysArea.style.maxHeight = "500px";
  keyTakeawaysArea.style.overflowY = "auto";
  keyTakeawaysArea.style.padding = "10px";
  keyTakeawaysArea.style.margin = "10px";
  keyTakeawaysArea.style.borderRadius = "5px";
  /* keyTakeawaysArea.style.backgroundColor = "#27272a"; */
  keyTakeawaysArea.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;
  keyTakeawaysArea.style.fontSize = "14px";
  keyTakeawaysArea.style.fontFamily = "Roboto, sans-serif";

  
  /* const html = convertMarkupToHTML(keyTakeaways) */
  let bulletPoints = keyTakeaways.map((takeaway, index) => {
    return `<li>${index+1}) ${takeaway}</li> <br/>`;
  }).join('');
  
keyTakeawaysArea.innerHTML = `<p>Here are the key takeaways for the video:</p> <br/><ul>${bulletPoints}</ul>`;
  

  return keyTakeawaysArea;
}
const createTranscriptArea = (transcript) => {
  const transcriptArea = document.createElement("div");
  transcriptArea.classList.add("transcript-area");
  transcriptArea.style.display = "none";
  transcriptArea.style.flexDirection = "column";
  transcriptArea.style.maxHeight = "500px";
  transcriptArea.style.overflowY = "auto";
  transcriptArea.style.padding = "10px";
  transcriptArea.style.margin = "10px";
  transcriptArea.style.borderRadius = "5px";
  /* transcriptArea.style.backgroundColor = "#27272a"; */
  transcriptArea.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;
  transcriptArea.style.fontSize = "14px";
  transcriptArea.style.fontFamily = "Roboto, sans-serif";

  const transcriptText = document.createElement("p");
  /* const html = convertMarkupToHTML(transcript) */
  const standardizedTranscript = transcript.replace(/\n{3,}/g, '\n\n');


const blocks = standardizedTranscript.split('\n\n');  // Assuming two newlines separate each block
let processedTimestamps = [];
let processedSentences = [];
blocks.forEach((block) => {
  const lines = block.split('\n');
  const timestamps = lines[1];
  const sentence = lines.slice(2).join(' ');  // Joining in case a sentence is spread over multiple lines

  processedTimestamps.push(timestamps);
  processedSentences.push(sentence);
});
let mergedData = processedTimestamps.map((timestamp, index) => {
  return {
      timestamp,
      sentence: processedSentences[index]
  };
});


let finalMergedData = [];

function timestampToSeconds(timestamp) {
  const parts = timestamp.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);
  return hours * 3600 + minutes * 60 + seconds ;
}



for (let i = 0; i < mergedData.length -1 ; i += 6) {
  let batch = mergedData.slice(i, i + 6);

  let rawStartTimestamp
  try{ 
    rawStartTimestamp = batch[0].timestamp.split(' --> ')[0];
}
catch {
  console.log("error")
}
  let cleanStartTimestamp = rawStartTimestamp.split(',')[0]; 
  let startTimestamp = timestampToSeconds(cleanStartTimestamp);
  let endTimestamp = (batch[batch.length - 1] || batch[0]).timestamp.split(' --> ')[1];
  let mergedTimestamp = `${rawStartTimestamp} --> ${endTimestamp}`;

  let mergedSentence = batch.map(obj => obj.sentence).join(' ');

  finalMergedData.push({
      index: Math.floor(i / 6) + 1,
      startTimestamp,
      cleanStartTimestamp : cleanStartTimestamp,
      timestamp: mergedTimestamp,
      sentence: mergedSentence
  });
}

let htmlString = finalMergedData.map((obj) => {
  return `<div><strong>
  <p class="timestamp-link" data-timestamp="${obj.startTimestamp}" style="cursor:pointer">
  ${obj.cleanStartTimestamp}
  </p>
  </strong><br>${obj.sentence}</div>
  <br/>`;
}).join('');


  transcriptArea.innerHTML = htmlString;  


  transcriptArea.appendChild(transcriptText);

  return transcriptArea;

   
}



const createSummaryArea = (summary) => {
  const summaryArea = document.createElement("div");
  summaryArea.classList.add("summary-area");
  summaryArea.style.display = "flex";
  summaryArea.style.flexDirection = "column";
  summaryArea.style.maxHeight = "500px";
  summaryArea.style.overflowY = "auto";
  summaryArea.style.padding = "10px";
  summaryArea.style.margin = "10px";
  summaryArea.style.borderRadius = "5px";
  /* summaryArea.style.backgroundColor = "#27272a"; */
  summaryArea.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color
  summaryArea.style.fontSize = "14px";
  summaryArea.style.fontFamily = "Roboto, sans-serif";

  const summaryText = document.createElement("p");
  const html = convertMarkupToHTML(summary)
  
  summaryArea.innerHTML = html;
  

  summaryArea.appendChild(summaryText);

  return summaryArea;

}



const createQAArea = (container, id, data) => {

  
  
  const qaArea = document.createElement("div");
  qaArea.classList.add("qa-area");
  qaArea.style.display="none"

  const questionAnswerList = document.createElement("div");
  questionAnswerList.classList.add("question-answer-list");
  
  


  for (let key in data.key_qa) {
    if (data.key_qa.hasOwnProperty(key)) {     
      const questionDiv = createQuestion(key);
      //const answer = ` ${data[key].answer} <br></br> ${Math.floor(data[key].sources[0]["start"] / 3600)} : ${Math.floor(data[key].sources[0]["start"] / 60)} : ${Math.floor(data[key].sources[0]["start"])} <br></br> ${data[key].sources[0]["text"]} <br></br> ${data[key].sources[1]["text"]} <br></br> ${data[key].sources[2]["text"]} <br></br> ${data[key].sources[3]["text"]}`
      const answer = data.key_qa[key].answer
      const formattedAnswer = answer.replace('**', '');
      
      let sources = `<div style="display:flex; flex-direction:row">`

      for (let i = 0; i < data.key_qa[key].sources.length; i++) {
        
        //sources += `<a href='/watch?v=${id}&${data[key].sources[i]["start"]}'>Source ${i + 1}</a> <br></br>${data[key].sources[i]["text"]} <br></br>`
        sources += `<p class="timestamp-link" data-timestamp="${data.key_qa[key].sources[i].start}" style="cursor:pointer; width:40px"> [${i+1}]
        </p>
      `
      if (i === data.key_qa[key].sources.length - 1) {
        sources += `</div>`
      }
    }
//  ${data[key].sources[i]["text"]} 


      const answer_and_sources = `${formattedAnswer} <br></br> <strong> <span style="fontSize:16px">Sources</span></strong> <br></br>  ${sources}`
      const answerDiv = createAnswer(answer_and_sources);

      questionDiv.addEventListener("click", () => {
        toggleAnswerVisibility(answerDiv, questionDiv, container);
      });

      for (let i = 0; i < data.key_qa[key].sources.length; i++) {
        const sourceLinks=document.getElementById(`source-${i}`)
      }
      questionAnswerList.appendChild(questionDiv);
      questionAnswerList.appendChild(answerDiv);
    }
  }
  qaArea.appendChild(questionAnswerList);
  
  /* qaArea.prepend(createForm(container, id)); */
  
  
  return qaArea;
}




const createForm = (container, id) => {
  const form = document.createElement("form");

  form.classList.add("form");


  const input = document.createElement("input");
  input.style.display="flex"
  input.style.flexDirection="row" 
  input.type = "text";
  input.placeholder = "Ask a question";
  input.classList.add("input");

  input.style.border = `1px solid ${theme === "yt-dark" ? search_bar_border_color_dark : search_bar_border_color
    }`;

  input.style.color = theme === "yt-dark" ? "white" : "black";

  // on input focus change border color to blue
  input.addEventListener("focus", () => {
    input.style.border = `1px solid #1A73E8`;
  });
  // on focus out change border color to gray
  input.addEventListener("focusout", () => {
    input.style.border = `1px solid ${theme === "yt-dark"
      ? search_bar_border_color_dark
      : search_bar_border_color
      }`;
  });

  input.style.backgroundColor =
    theme === "yt-dark" ? search_bar_dark_inner_bg : "white";

  const button = document.createElement("button");
  button.type = "submit";

  button.style.border = `1px solid ${theme === "yt-dark" ? search_bar_border_color_dark : search_bar_border_color
    }`;

  button.style.borderLeft = "0px";

  // button bg color
  button.style.backgroundColor =
    theme === "yt-dark" ? search_bar_button_dark_bg : "";

  // add search icon svg
  button.innerHTML = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope" style="pointer-events: none; display: block; width: 100%; height: 70%;"><g class="style-scope yt-icon"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon" fill=${theme === "yt-dark" ? "#fff" : "#606060"
    }></path></g></svg>`;
  button.classList.add("button");

  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // if the input is empty, return and show error
    if (input.value === "") {
      input.style.border = "1px solid red";
      input.placeholder = "Please enter a question";

      // remove error after 2 seconds
      setTimeout(() => {
        input.style.border = `1px solid ${theme === "yt-dark"
          ? search_bar_border_color_dark
          : search_bar_border_color
          }`;
        input.placeholder = "Ask a question";
      }, 2000);

      return;
    }

    // if the input has more than 100 characters, return and show error
    if (input.value.length > 100) {
      input.style.border = "1px solid red";
      input.placeholder = "Please enter a shorter question";
      return;
    }

    const answerDivs = container.querySelectorAll(".answer");
    answerDivs.forEach((answerDiv) => {
      answerDiv.classList.add("hide");
      answerDiv.classList.remove("show");
    });

    // const loading = container.querySelector(".loading");
    // loading.style.display = "flex";
    const question = input.value;
    input.value = "";

    const questionDivs = container.querySelectorAll(".question");
    questionDivs.forEach((questionDiv) => {
      // change background color
      questionDiv.style.backgroundColor =
        theme === "yt-dark" ? yt_dark_inactive_el_bg : yt_light_inactive_el_bg;
      // change text color
      questionDiv.style.color = theme === "yt-dark" ? "white" : "black";

      // change border radius
      questionDiv.style.borderRadius = "5px";
    });

    try {
      const response = await fetch(
        `https://backend-production-33df.up.railway.app/sources/yt/${id}/question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'id-token' : "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBkMGU4NmJkNjQ3NDBjYWQyNDc1NjI4ZGEyZWM0OTZkZjUyYWRiNWQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSGFzYW4gRnVya2FuIEfDtmsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZWQzcHoxMjl4aFlvdnJZV3RuNHhXTTFmcWlhM1BQeHdmQS1xcEd5dz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9hbHBoeS03NDU4MyIsImF1ZCI6ImFscGh5LTc0NTgzIiwiYXV0aF90aW1lIjoxNjk3OTA1Nzg2LCJ1c2VyX2lkIjoiZFVmTVpQd044ZmN4b0J0b1llQnVSNUVOaUJEMyIsInN1YiI6ImRVZk1aUHdOOGZjeG9CdG9ZZUJ1UjVFTmlCRDMiLCJpYXQiOjE2OTgxNjc5MDMsImV4cCI6MTY5ODE3MTUwMywiZW1haWwiOiJoYXNhbmZ1cmthbi5nb2tAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTA4MDAxNTc4MDQ4OTc5NTI0OTEiXSwiZW1haWwiOlsiaGFzYW5mdXJrYW4uZ29rQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.ERfKHouQy2QJJdL6g5C9YB3tlWKgG_764JBK9cbLbxjgoWVSl69jvQMU5y_JMkcNBrYHOmvtMbHA5sHltV86GbgULunT8g9Lb5IiGfVpkECkrXYJTwp7XPEnvGKEqFFNJyqp8Wh61E1GQhDMIpmZm8ov7v3N23fRRWK_K1K5H_J0lL5tI_ku_CTZdcQgF1Ut6vuyOWTMMUT9ipFsYzttW4gQyaJvxzUKaLDpo56KTLehB87Cwg3o1jvEBtu9QKsILcKaBi7iB29sHd7iESP4FG8sdSuBCPJ-og-14N4MnwHe_06QPMNirj8fWVY3VShLHOI66ynAdT0P6IeYFtR_9w"
          },
          body: JSON.stringify(question),
        }
      );

    
      const newData = await response.json();
      const questionDiv = createQuestion(question);
      const answerDiv = createAnswer(newData.answer);

      questionDiv.addEventListener("click", () => {
        toggleAnswerVisibility(answerDiv, questionDiv, container);
      });

      questionDiv.style.backgroundColor =
        theme === "yt-dark" ? yt_dark_active_el_bg : yt_light_active_el_bg;
      questionDiv.style.color = theme === "yt-dark" ? "black" : "white";

      answerDiv.style.color = theme === "yt-dark" ? "black" : "black";

      // make it visible at first
      // remove the hide class
      answerDiv.classList.remove("hide");
      answerDiv.classList.add("show");

      questionDiv.style.borderRadius = "5px 5px 0px 0px";
      answerDiv.style.padding = "10px";
      answerDiv.style.display = "block";

      const questionAnswerList = container.querySelector(
        ".question-answer-list"
      );

      questionAnswerList.prepend(answerDiv);
      questionAnswerList.prepend(questionDiv);
    } catch (error) {
      console.error(error);
    } finally {
      loading.style.display = "none";
    }
  });

  return form;
};

const createLoading = () => {
  const loading = document.createElement("div");
  // add loading svg
  loading.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="44px" height="44px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#5ba6e1" stroke-width="8" r="26" stroke-dasharray="122.52211349000194 42.840704496667314">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>`;

  loading.classList.add("loading");

  return loading;
};

const createQuestion = (key) => {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = key;
  questionDiv.style.fontFamily = "'roboto', sans-serif";
    
  questionDiv.style.fontSize = "14px";
  questionDiv.classList.add("question");
  if (theme === "yt-dark") {
    questionDiv.style.backgroundColor = yt_dark_inactive_el_bg;
    questionDiv.style.color = yt_dark_inactive_el_color;
  } else if (theme === "yt-light") {
    questionDiv.style.backgroundColor = yt_light_inactive_el_bg;
    questionDiv.style.color = yt_light_inactive_el_color;
  }

  return questionDiv;
};

const createAnswer = (answer) => {
  const answerNewlined = answer.replace(/\n/g, "<br/>").replace(/\*\*/g, "");

  const answerDiv = document.createElement("div");
  answerDiv.innerHTML = answerNewlined;
  answerDiv.classList.add("answer");
  answerDiv.classList.add("hide");
  answerDiv.style.display = "none";

  answerDiv.addEventListener("transitionend", function () {
    if (answerDiv.classList.contains("hide")) {
      answerDiv.style.padding = "0px";
      answerDiv.style.margin = "0px";
    }
  });

  return answerDiv;
};

const toggleAnswerVisibility = (answerDiv, questionDiv, container) => {
  const answerDivs = container.querySelectorAll(".answer");
  const questionDivs = container.querySelectorAll(".question");
  if (answerDiv.classList.contains("hide")) {
    answerDivs.forEach((div) => {
      div.classList.add("hide");
    });
    questionDivs.forEach((div) => {
      const bgcolor =
        theme === "yt-dark" ? yt_dark_inactive_el_bg : yt_light_inactive_el_bg;
      const color =
        theme === "yt-dark"
          ? yt_dark_inactive_el_color
          : yt_light_inactive_el_color;
      div.style.backgroundColor = bgcolor;
      div.style.color = color;
    });
    answerDiv.classList.remove("hide");
    answerDiv.classList.add("show");
    answerDiv.style.padding = "10px";
    questionDiv.style.borderRadius = "5px 5px 0px 0px";
    answerDiv.style.display = "block";
    answerDiv.style.marginBottom = "20px";
    answerDiv.style.overflowY = "auto";
    answerDiv.style.fontFamily = "'roboto', sans-serif";
    
    answerDiv.style.fontSize = "14px";  // You can adjust this size as needed

    
    if (theme === "yt-dark") {
      answerDiv.style.backgroundColor = "#27272a";
      answerDiv.style.color = "#e4e4e7";
      questionDiv.style.backgroundColor =  yt_dark_active_el_bg;
      questionDiv.style.color = yt_dark_active_el_color;
    } else if (theme === "yt-light") {
      
      answerDiv.style.color = yt_light_active_el_color;
      questionDiv.style.backgroundColor = "#e4e4e7";
      questionDiv.style.color = yt_light_active_el_color;
    }
  } else {
    answerDiv.classList.add("hide");
    answerDiv.classList.remove("show");
    // set border radius to 5px after 0.3s
    setTimeout(() => {
      // for radius border after the transition
      // silly but works
      questionDiv.style.borderRadius = "5px";
    }, 300);

    if (theme === "yt-dark") {
      questionDiv.style.backgroundColor = yt_dark_inactive_el_bg;
      questionDiv.style.color = yt_dark_inactive_el_color;
    } else if (theme === "yt-light") {
      questionDiv.style.backgroundColor = yt_light_inactive_el_bg;
      questionDiv.style.color = yt_light_inactive_el_color;
    }
  }
};

const appendEmptyDataUI = (container) => {
  
  const inner = document.createElement("div");
  inner.style.padding = "10px";
  inner.style.backgroundColor = theme==="yt-light"? yt_light_active_el_bg: yt_dark_active_el_bg;
  inner.style.borderRadius = "5px";
  inner.style.border = `2px solid ${theme==="yt-light" ? yt_dark_active_el_bg  : yt_light_active_el_bg}`;
  inner.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;
  inner.style.fontSize = "16px";
  inner.style.fontWeight = "600";
  inner.style.minHeight = "150px";
  inner.style.margin = "auto"
  inner.style.paddingTop = "20px"
  inner.innerHTML = `
  <div style="display: flex; margin: auto; justify-content: center; align-items: center; flex-direction: column; ">
    <p style="display:flex; margin:auto; align-items:center; text-align:center; justify-content:center">This video hasn't been processed with Alphy yet. Would you like to do it now?</p>
    <button onClick="window.open('https://alphy.app/submit', '_blank')" style="margin: 10px;  font-weight:500; margin-top:20px; padding: 10px; border-radius: 5px; border: none; background-color:${theme==="yt-light" ? "#27272a"  : yt_light_active_el_bg};  color:${theme==="yt-light" ? yt_dark_active_el_color : yt_light_active_el_color}; display:flex; align-items:center; cursor: pointer;"><img
    src="https://alphy.app/favicon.ico" style="width: 20px;;height: 20px; margin-right: 5px;" /> Unlock with Alphy!</button>
  </div>
  `;

  const logo = document.createElement("div");
  logo.innerHTML = 
  `<a href='https://alphy.app' target='_blank' style='color:${theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color}; text-decoration:none'> <img src='https://alphy.app/favicon.ico' style='width: 20px; height: 20px; margin-bottom: -3px; margin-right: 3px; margin-left: 3px; padding-right: 3px;'/>ALPHY</a>`;
  logo.style.fontSize = "16px";
  logo.style.fontFamily = "'roboto', sans-serif";
  logo.style.fontWeight = "bold";
  logo.style.color = theme==="yt-light"? yt_light_active_el_color: yt_dark_active_el_color;
  
  logo.style.marginBottom = "20px";
  logo.style.marginTop = "10px";
  logo.style.textAlign = "center";
  inner.prepend(logo)
  container.appendChild(inner);


};

const processUrl = async (url) => {
  let source;
  let id;

  if (url.includes("youtube.com/watch")) {
    source = "yt";
    id = url.split("v=")[1].split("&")[0];
  } else if (url.includes("twitter.com/i/spaces/")) {
    source = "sp";
    id = url.split("/i/spaces/")[1];
  } else {
    return; // If the URL doesn't match any of the desired sources, exit the function
  }

  let targetSelector;
  if (source === "sp") {
    const body = document.querySelector("body");
    targetSelector = '[aria-label="Home timeline"]';
    if (body.style.backgroundColor === "rgb(255, 255, 255)") {
      theme = "tw-light";
    } else if (body.style.backgroundColor === "rgb(0, 0, 0)") {
      theme = "tw-dark";
    } else {
      theme = "tw-dim";
    }
  } else if (source === "yt") {
    targetSelector = "#secondary-inner";
    if (document.documentElement.hasAttribute("dark")) {
      theme = "yt-dark";
    } else {
      theme = "yt-light";
    }
  }
  
  await waitForElement(targetSelector);
  const style = document.createElement('style');
style.innerHTML = `
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${theme === "yt-light" ?"#e4e4e7": "#27272a"};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${theme === "yt-light" ?"#d4d4d8": "#3f3f46"} ;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
document.head.appendChild(style);

  const existingContainer = document.querySelector("#alphy-wrapper");
  if (existingContainer) {
    existingContainer.remove();
  }

  const container = document.createElement("div");
  container.id = "alphy-wrapper";
  container.style.marginBottom = "10px"
  container.style.paddingBottom = "10px"
  container.style.backgroundColor = theme==="yt-light" ? yt_light_active_el_bg : yt_dark_active_el_bg;
  if(theme==="yt-light"){
  container.style.boxShadow = '1px 1px 2px rgba(200, 200, 200, 0.6)';;
}
 

  //fethc data and show loading meanwhile

  let loading = document.querySelector(".loading");
  
    if (!loading) {
      loading = document.createElement("div");
      loading.classList.add("loading");
      loading.innerHTML = "Loading...";
      
      // Styling the loading div
      loading.style.position = "fixed"; // Fixed position
      loading.style.top = "50%";  // Center vertically
      loading.style.left = "50%"; // Center horizontally
      loading.style.transform = "translate(-50%, -50%)"; // Ensure it's centered perfectly
      loading.style.fontFamily = "Arial, sans-serif"; // Simple, clean font
      loading.style.fontSize = "24px";  // Sizable font for visibility
      loading.style.fontWeight = "bold"; // Bold for emphasis
      loading.style.color = "#6b7280";  // Color matching your previous style
      loading.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";  // Slight shadow for depth
      loading.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Slightly transparent white background
      loading.style.padding = "10px 20px"; // Padding for aesthetics
      loading.style.borderRadius = "5px"; // Rounded corners
      
      container.appendChild(loading);

    
  }
  
  loading.style.display = "flex";

  fetchData(id, source)
    .then((data) => {

      if (data) {
        if (source === "sp") {
          appendTwitterUI(id, container, data);
        } else if (source === "yt") {
          appendYoutubeUI(id, container, data);
        }
      } else {
        if (source === "sp") {
          appendTwitterUI(id, container, null);
        } else {
          appendEmptyDataUI(container);
        }
      }
    })
    .finally(() => {
      let loading = document.querySelector(".loading");
      if(loading!==null){
        loading.style.display = "none";
    }
    
    });

  const target = document.querySelector(targetSelector);
  if (source === "sp") {
    target.appendChild(container);
  } else if (source === "yt") {
    target.prepend(container);

  }
};

let lastUrl = "";



setInterval(() => {
  const currentUrl = window.location.href;
  if (lastUrl !== currentUrl) {
    lastUrl = currentUrl;
    processUrl(lastUrl);
  }
}, 1000);
