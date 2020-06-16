console.log("Google Chrome extension GCThreadLink loaded");

let threads = document.getElementsByClassName("cZICLc");

for (thr of threads){
  let topicId = thr.getAttribute("data-topic-id");
  let link = window.location.href + "/" + topicId;

  let buttonTarget = thr.getElementsByClassName("yg4pvb")[0];

  let linkButton = document.createElement("div");
  linkButton.classList.add("oQXyRb");

  let linkSpan = document.createElement("span");
  linkSpan.setAttribute("style", "display : none;");
  linkSpan.innerHTML = link;


  let spanLinkButton = document.createElement("span");
  spanLinkButton.classList.add("zxHSSc");
  spanLinkButton.setAttribute("style", "display : inline;");
  spanLinkButton.innerHTML = "Copiar";

  buttonTarget.appendChild(linkButton);
  linkButton.appendChild(spanLinkButton);
  linkButton.appendChild(linkSpan);

  linkButton.onclick = function(){
    navigator.clipboard.writeText(this.children[1].innerHTML);
  };
}
