// 選取畫布元素並建立圖表
const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004, 61234,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832,
          36844, 35854,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// 顯示或隱藏側邊欄
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// 主題切換邏輯
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  // 切換主題類別
  document.body.classList.toggle("dark-theme");

  // 切換按鈕圖示的樣式
  const lightIcon = themeBtn.querySelector(".light-mode");
  const darkIcon = themeBtn.querySelector(".dark-mode");

  lightIcon.classList.toggle("active");
  darkIcon.classList.toggle("active");

  // 切換按鈕背景塊的位置
  themeBtn.classList.toggle("dark-active");
});
