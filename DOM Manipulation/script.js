document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");

    paragraph.textContent = "The Para change.";
  });

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.padding = "5px";
});

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Apple";
  document.getElementById("shoppingList").appendChild(newItem);
});

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Coffee");
});

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selecte:" + event.target.textContent);
  }
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `feedback is: ${feedback}`;
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

document.getElementBy("togglehighlight").addEventListener("click", function () {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlight");
});
