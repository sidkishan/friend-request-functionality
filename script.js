const acceptBtns = document.getElementsByClassName("done");
const rejectBtns = document.getElementsByClassName("close");
const acceptContainer = document.getElementById("accepted");
const rejectContainer = document.getElementById("rejected");
for (let i = 0; i < acceptBtns.length; i++) {
  acceptBtns[i].addEventListener("click", acceptRequest);
  rejectBtns[i].addEventListener("click", rejectRequest);
}

function acceptRequest(event) {
  const btnRef = event.target;
  const userElement = btnRef.parentNode.parentNode;
  userElement.children[1].remove();
  acceptContainer.append(userElement);
}
function rejectRequest(event) {
  const btnRef = event.target;
  const userElement = btnRef.parentNode.parentNode;
  userElement.children[1].remove();
  rejectContainer.append(userElement);
}
