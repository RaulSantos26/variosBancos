$(document).ready(function() {
    var buttonAdd = $("#add-buttonA");
    var buttonRemove = $("#remove-buttonA");
    var className = ".field-step";
    var count = 0;
    var field = "";
    var maxFields = 3;
  
    function totalFieldsA() {
      return $(className).length;
    }
  
    function addNewField() {
      count = totalFieldsA() + 1;
      field = $("#field-step-1").clone();
      field.attr("id", "field-step-" + count);
      field.children("label").text("Campo " + count);
      field.find("input").val("");
      $(className + ":last").after($(field));
    }
  
    function removeLastField() {
      if (totalFieldsA() > 1) {
        $(className + ":last").remove();
      }
    }
  
    function enableButtonRemove() {
      if (totalFieldsA() === 2) {
        buttonRemove.removeAttr("disabled");
        buttonRemove.addClass("shadow-sm");
      }
    }
  
    function disableButtonRemove() {
      if (totalFieldsA() === 1) {
        buttonRemove.attr("disabled", "disabled");
        buttonRemove.removeClass("shadow-sm");
      }
    }
  
    function disableButtonAdd() {
      if (totalFieldsA() === maxFields) {
        buttonAdd.attr("disabled", "disabled");
        buttonAdd.removeClass("shadow-sm");
      }
    }
  
    function enableButtonAdd() {
      if (totalFieldsA() === (maxFields - 1)) {
        buttonAdd.removeAttr("disabled");
        buttonAdd.addClass("shadow-sm");
      }
    }
  
    buttonAdd.click(function() {
      addNewField();
      enableButtonRemove();
      disableButtonAdd();
    });
  
    buttonRemove.click(function() {
      removeLastField();
      disableButtonRemove();
      enableButtonAdd();
    });
  });