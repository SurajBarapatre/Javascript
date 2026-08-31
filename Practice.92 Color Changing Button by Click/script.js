const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 16581375);
  const str = num.toString(16); // six digit color code
  document.body.style.backgroundColor = "#" + str;
  console.log("#" + str);
});