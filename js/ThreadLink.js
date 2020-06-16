console.log("Google Chrome extension GCThreadLink loaded");

let addButton = function(){
  let threads = document.getElementsByClassName("cZICLc");

  for (thr of threads){
    if(thr.getElementsByClassName("link").length === 0){
      let topicId = thr.getAttribute("data-topic-id");
      let link = window.location.href + "/" + topicId;

      let buttonTarget = thr.getElementsByClassName("yg4pvb")[0];

      let linkButton = document.createElement("div");
      linkButton.classList.add("link");
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
    };
  };
};

let threadListWrapper = document.getElementsByClassName("SvOPqd")[0];


const observer = new MutationObserver(() => {
  addButton();
});
const observerOptions = { attributes: true, childList: true, characterData: true, subtree: true };
observer.observe(threadListWrapper, observerOptions);

addButton();
