const yt_light_active_el_bg = "#0E0F0E";
const yt_light_active_el_color = "#FFFFFF";
const yt_light_inactive_el_bg = "#F2F2F2";
const yt_light_inactive_el_color = "#0E0F0E";

const yt_dark_active_el_bg = "white";
const yt_dark_active_el_color = "black";
const yt_dark_inactive_el_bg = "#262627";
const yt_dark_inactive_el_color = "white";

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
  button.innerText = "Call Alphy";
  button.addEventListener("click", () => {
    window.location.href = "https://alphy.app";
  });
  button.style.backgroundColor = "#EFF3F4";
  button.style.border = "none";
  button.style.borderRadius = "9999px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.color = "rgb(56,61,64)";

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

  answerElement.textContent = answer;
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
  // loading
  loading.style.display = "flex";
  loading.style.justifyContent = "center";
  loading.style.alignItems = "center";
  loading.style.backgroundColor = backgroundColor;
  loading.style.padding = "15px 0";

  const spinner = document.createElement("div");
  spinner.style.border = "4px solid rgba(0, 0, 0, 0.1)";
  spinner.style.width = "36px";
  spinner.style.height = "36px";
  spinner.style.borderRadius = "50%";
  spinner.style.borderLeftColor = "#1C9BF1";
  spinner.style.animation = "spin 1s linear infinite";
  loading.appendChild(spinner);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    body, p, h1, h2, h3, h4, h5, h6 {
      font-family: "IBM Plex Mono", monospace;
    }
  `;
  document.head.appendChild(style);

  loading.style.display = "none";

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
    const url = `https://backend-production-33df.up.railway.app/summaries/sp/${id}/question`;
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
  const response = await fetch(
    `https://backend-production-33df.up.railway.app/summaries/${source}/${id}`
  );
  if (response.status === 404) {
    return null;
  }

  const data = await response.json();
  return data.key_qa;
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

const appendYoutubeUI = async (id, container, data) => {
  addStyles();

  container.classList.add("youtube-container");

  container.prepend(createForm(container, id));

  const questionAnswerList = document.createElement("div");
  questionAnswerList.classList.add("question-answer-list");

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const questionDiv = createQuestion(key);
      const answerDiv = createAnswer(data[key].answer);

      questionDiv.addEventListener("click", () => {
        toggleAnswerVisibility(answerDiv, questionDiv, container);
      });

      questionAnswerList.appendChild(questionDiv);
      questionAnswerList.appendChild(answerDiv);
    }
  }

  const watermark = document.createElement("div");
  watermark.innerHTML =
    "Powered by <a href='https://alphy.app'> <img src='https://alphy.app/favicon.ico' style='width: 15px; height: 15px; margin-bottom: -3px; margin-right: 3px; margin-left: 3px;'/> Alphy</a>";

  watermark.style.fontSize = "12px";
  watermark.style.color = "grey";
  watermark.style.marginTop = "10px";
  watermark.style.marginBottom = "20px";
  watermark.style.textAlign = "center";

  container.appendChild(questionAnswerList);
  container.appendChild(watermark);
};

const addStyles = () => {
  const styles = `

    .youtube-container {
      background: rgba(122,122,122,0.1);
      padding: 10px;
      border-radius: 5px;
      color: white;
      font-size: 14px;
      font-family: Roboto, Arial, sans-serif;
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

const createForm = (container, id) => {
  const form = document.createElement("form");
  form.classList.add("form");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ask a question";
  input.classList.add("input");

  input.style.border = `1px solid ${
    theme === "yt-dark" ? search_bar_border_color_dark : search_bar_border_color
  }`;

  input.style.color = theme === "yt-dark" ? "white" : "black";

  // on input focus change border color to blue
  input.addEventListener("focus", () => {
    input.style.border = `1px solid #1A73E8`;
  });
  // on focus out change border color to gray
  input.addEventListener("focusout", () => {
    input.style.border = `1px solid ${
      theme === "yt-dark"
        ? search_bar_border_color_dark
        : search_bar_border_color
    }`;
  });

  input.style.backgroundColor =
    theme === "yt-dark" ? search_bar_dark_inner_bg : "white";

  const button = document.createElement("button");
  button.type = "submit";

  button.style.border = `1px solid ${
    theme === "yt-dark" ? search_bar_border_color_dark : search_bar_border_color
  }`;

  button.style.borderLeft = "0px";

  // button bg color
  button.style.backgroundColor =
    theme === "yt-dark" ? search_bar_button_dark_bg : "";

  // add search icon svg
  button.innerHTML = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope" style="pointer-events: none; display: block; width: 100%; height: 70%;"><g class="style-scope yt-icon"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon" fill=${
    theme === "yt-dark" ? "#fff" : "#606060"
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
        input.style.border = `1px solid ${
          theme === "yt-dark"
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

    const loading = container.querySelector(".loading");
    loading.style.display = "flex";
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
        `https://backend-production-33df.up.railway.app/summaries/yt/${id}/question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
  questionDiv.style.fontWeight = "bold";
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
  const answerDiv = document.createElement("div");
  answerDiv.innerHTML = answer;
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
    if (theme === "yt-dark") {
      answerDiv.style.backgroundColor = "white";
      answerDiv.style.color = "black";
      questionDiv.style.backgroundColor = yt_dark_active_el_bg;
      questionDiv.style.color = yt_dark_active_el_color;
    } else if (theme === "yt-light") {
      answerDiv.style.backgroundColor = yt_light_inactive_el_bg;
      answerDiv.style.color = "black";
      questionDiv.style.backgroundColor = yt_light_active_el_bg;
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
  container.style.padding = "10px";
  container.style.backgroundColor = "gray";
  container.style.borderRadius = "5px";
  container.style.color = "white";
  // prompt user that this video is not in the alphy database yet, put a button to navigate to the alphy website to add the video
  container.style.fontSize = "14px";
  container.innerHTML = `
  <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <p style="margin: 0px;">Looks like this video haven't been summarized yet. Would you like to summarize it now?</p>
    <button onClick="window.open('https://alphy.app', '_blank')" style="margin: 10px; padding: 10px; border-radius: 5px; border: none; background-color: #262627; display:flex; align-items:center; } ; color: white; cursor: pointer;"><img
    src="https://alphy.app/favicon.ico" style="width: 20px; height: 20px; margin-right: 5px;" /> Call Alphy</button>
  </div>
  `;
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

  const existingContainer = document.querySelector("#alphy-wrapper");
  if (existingContainer) {
    existingContainer.remove();
  }

  const container = document.createElement("div");
  container.id = "alphy-wrapper";

  // fethc data and show loading meanwhile

  let loading = document.querySelector(".loading");
  if (!loading) {
    // loading = createLoading();
    loading = document.createElement("div");
    loading.classList.add("loading");
    loading.innerHTML = "Loading...";
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
      loading.style.display = "none";
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
