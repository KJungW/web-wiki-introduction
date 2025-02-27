console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

let commentList = document.querySelector(".comment-list")
let commentTemplate = document.getElementById("comment_template");
let commentInput = document.getElementById("comment_input");

const clickCommentCancelButton = () => {
    commentInput.value = "";
}

const clickCommentRegisterButton = () => {
    commentTemplate.style.display = 'Block';
    let duplicated = commentTemplate.cloneNode(true);
    commentTemplate.style.display = 'None';

    text = commentInput.value;
    duplicated.childNodes[1].childNodes[3].textContent = text;
    commentList.appendChild(duplicated)

    alert("댓글이 등록되었습니다");
}


