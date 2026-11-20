const title = document.querySelector("#app-title");
const oldText = title.textContent;
title.textContent = "Quest Log ⚔️";
console.log(oldText);
console.log(title.textContent);
console.log(title);


title.textContent = '<em>Hello</em>';
title.innerHTML = '<em>Hello</em>';