document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".order__item");
  const tbody = document.querySelector("#orderTable tbody");

  tbody.innerHTML = "";

  listItems.forEach(li => {
    const qty = li.querySelector(".order__qty").textContent;
    const name = li.querySelector(".order__name").textContent;
    const desc = li.querySelector(".order__desc").textContent;
    const price = li.querySelector(".order__price").textContent;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${qty}</td>
      <td>
        <div class="order__details">
          <span class="order__name">${name}</span>
          <span class="order__desc">${desc}</span>
        </div>
      </td>
      <td class="text-right">${price}</td>
    `;

    tbody.appendChild(row);
  });
});