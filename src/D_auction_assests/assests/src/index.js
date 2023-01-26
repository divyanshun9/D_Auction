import { dAuction } from "../../declarations/dAuction";

window.addEventListener("load", async function(){
  update();
});
document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();
  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const inputName = document.getElementById("input-name").value;

  button.setAttribute("disabled", true);

  if(document.getElementById("input-amount").value.length != 0)
  {
    await dAuction.topUp(inputAmount,inputName);
  }
  update();
  document.getElementById("input-amount").value = "";
  document.getElementById("input-name").value = "";
  button.removeAttribute("disabled");
});

async function update() {
  const currentAmount = await dAuction.checkBalance();
  const currentBidder = await dAuction.checkName();
  document.getElementById("value").innerText =(Math.round(currentAmount * 100) / 100).toFixed(2);
  document.getElementById("bidder").innerText = currentBidder ;
};

