"use strict";
//document.querySelector(".button-label").textContent = "testing";

//FIRST CODE!!
$(function () {
  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    let newItem = $("input[name=shopping-list-entry]").val();

    let task = $("<div class='shopping-item-controls'></div>").text(
      $("input[name=shopping-list-entry]").val()
    );

    //newItem.append(checkButton, deleteButton);

    $("ul").append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  });
  //to use remove button
  $("li").on("click", ".shopping-item-delete", function (event) {
    console.log("click delete");
    //need to figure out how to delete the active <li>
    $(this).closest("li").remove();
  });

  //strike through check button
  //toggle class with each click
  $(".shopping-item-toggle").click(function (event) {
    console.log("click check");
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
});
//if added input add new section
//default prevention for submit
//if check is clicked, run line through
//if check is clicked twice remove line through
//if delete is clicked delete from line
