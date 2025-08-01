let noClickCount = 0;
const noBtn = document.querySelectorAll("button")[1];
const yesBtn = document.querySelectorAll("button")[0];
const image = document.querySelector(".image");

function handleYes() {
  document.getElementById("question").innerText = "Hehe i know it! 😘";
  document.getElementById("subtext").innerText = "";

  // Set happy/cute love GIF
  image.src = "ily.gif"; // Love GIF

  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  noClickCount = 0;
}

function handleNo() {
  noClickCount++;
  const question = document.getElementById("question");
  const subtext = document.getElementById("subtext");

  if (noClickCount === 1) {
    question.innerText = "Think deeply about this 🙄";
    subtext.innerText = "say it so soon 😏";
    image.src = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"; // Thinking/side-eye
  } else if (noClickCount === 2) {
    question.innerText = "think about it one more time!😣";
    subtext.innerText = "";
    image.src = "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"; // Worried face
  } else {
    question.innerText = "I liked it! How much will she say😭";
    subtext.innerText = "What's wrong😭";
    image.src = "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"; // Crying face
    activateNoDodge();
  }
}

function activateNoDodge() {
  noBtn.style.position = "absolute";
  document.querySelector(".container").addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const distX = Math.abs(e.clientX - rect.left);
    const distY = Math.abs(e.clientY - rect.top);

    if (distX < 100 && distY < 60) {
      const offsetX = Math.floor(Math.random() * 300) - 150;
      const offsetY = Math.floor(Math.random() * 200) - 100;

      noBtn.style.left = `${Math.max(0, Math.min(window.innerWidth - 100, e.clientX + offsetX))}px`;
      noBtn.style.top = `${Math.max(0, Math.min(window.innerHeight - 50, e.clientY + offsetY))}px`;
    }
  });
}