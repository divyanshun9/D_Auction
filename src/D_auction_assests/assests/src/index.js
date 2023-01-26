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


<!DOCTYPE html>
<html>

  <head>
    <title>DAuction</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link type="text/css" rel="stylesheet" href="main.css" />
    <script src="index.js"></script>

  </head>

  <body>
    <div class="container">
      <img src="dlogo.png" alt="DAuction logo" width="100"/>
      <h1>Current Highest Bidder: <span id="bidder">None</span></h1>
      <h1>Current Highest Bid: $<span id="value">000</span></h1>
      <div class="divider"></div>
      <p color:white >Chevrolet Impala</p>

      <img src="car.jpg" alt="Auction item" width="300"/>
      
      <form action="#">
        <h2>Bidder Name</h2>
        <input id="input-name" type="text" step="0.01" min=0 name="topUp" value=""/>
        <h2>Bidder Offer</h2>
        <input id="input-amount" type="number" name="withdraw" step="0.01" min=0 value=""/>
        <input id="submit-btn" type="submit" value="Finalise Transaction" />
      </form>
    </div>
  </body>

</html>
