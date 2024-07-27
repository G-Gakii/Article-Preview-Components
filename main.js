socialButton = document.querySelector(".socialbtn");

shareButton = document.querySelector(".share");
const handleClick = () => {
  if ((socialButton.style.visibility === "hidden")) {
    socialButton.style.visibility = "visible";
  } else {
    socialButton.style.visibility = "hidden";
  }
};

shareButton.addEventListener("click", handleClick);
