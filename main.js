const adviceIndex = document.querySelector("#advice-idx");
const advice = document.querySelector("#advice");
const fetchAdvice = document.querySelector("#btn");

fetchAdvice.addEventListener("click", () => {
  const getAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      advice.textContent = data.slip.advice;
      adviceIndex.textContent = data.slip.id;
    } catch (e) {
      alert("Couldn't fetch advice!");
    }
  };

  getAdvice();
});
