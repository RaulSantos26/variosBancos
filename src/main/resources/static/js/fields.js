$(document).ready(function() {
    var buttonAddTitulo = $("#add-buttonTitulo");
    var buttonRemoveTitulo = $("#remove-buttonTitulo");
    var className = ".field-titulo";
    var count = 0;
    var field = "";
    var maxFields = 12;
  
    function totalFieldsTitulo() {
      return $(className).length;
    }
  
    function addNewField() {
      count = totalFieldsTitulo() + 1;
      field = $("#field-titulo-1").clone();
      field.attr("id", "field-titulo-" + count);
      field.children("label").text("Titulo " + count);
      field.find("input").val("");
      $(className + ":last").after($(field));
    }
  
    function removeLastField() {
      if (totalFieldsTitulo() > 1) {
        $(className + ":last").remove();
      }
    }
  
    function enableButtonRemove() {
      if (totalFieldsTitulo() === 2) {
        buttonRemoveTitulo.removeAttr("disabled");
        buttonRemoveTitulo.addClass("shadow-sm");
      }
    }
  
    function disableButtonRemove() {
      if (totalFieldsTitulo() === 1) {
        buttonRemoveTitulo.attr("disabled", "disabled");
        buttonRemoveTitulo.removeClass("shadow-sm");
      }
    }
  
    function disableButtonAdd() {
      if (totalFieldsTitulo() === maxFields) {
        buttonAddTitulo.attr("disabled", "disabled");
        buttonAddTitulo.removeClass("shadow-sm");
      }
    }
  
    function enableButtonAdd() {
      if (totalFieldsTitulo() === (maxFields - 1)) {
        buttonAddTitulo.removeAttr("disabled");
        buttonAddTitulo.addClass("shadow-sm");
      }
    }
  
    buttonAddTitulo.click(function() {
      addNewField();
      enableButtonRemove();
      disableButtonAdd();
    });
  
    buttonRemoveTitulo.click(function() {
      removeLastField();
      disableButtonRemove();
      enableButtonAdd();
    });
  });


$(document).ready(function() {
    var buttonAdd = $("#add-button");
    var buttonRemove = $("#remove-button");
    var className = ".dynamic-field";
    var count = 0;
    var field = "";
    var maxFields = 5;
  
    function totalFields() {
      return $(className).length;
    }
  
    function addNewField() {
      count = totalFields() + 1;
      field = $("#dynamic-field-1").clone();
      field.attr("id", "dynamic-field-" + count);
      field.children("label").text("Campo " + count);
      field.find("input").val("");
      $(className + ":last").after($(field));
    }
  
    function removeLastField() {
      if (totalFields() > 1) {
        $(className + ":last").remove();
      }
    }
  
    function enableButtonRemove() {
      if (totalFields() === 2) {
        buttonRemove.removeAttr("disabled");
        buttonRemove.addClass("shadow-sm");
      }
    }
  
    function disableButtonRemove() {
      if (totalFields() === 1) {
        buttonRemove.attr("disabled", "disabled");
        buttonRemove.removeClass("shadow-sm");
      }
    }
  
    function disableButtonAdd() {
      if (totalFields() === maxFields) {
        buttonAdd.attr("disabled", "disabled");
        buttonAdd.removeClass("shadow-sm");
      }
    }
  
    function enableButtonAdd() {
      if (totalFields() === (maxFields - 1)) {
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


$(document).ready(function() {
    var buttonAdd1 = $("#add-buttonA");
    var buttonRemove1 = $("#remove-buttonA");
    var className = ".field-step";
    var count = 0;
    var field = "";
    var maxFields = 4;
  
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
        buttonRemove1.removeAttr("disabled");
        buttonRemove1.addClass("shadow-sm");
      }
    }
  
    function disableButtonRemove() {
      if (totalFieldsA() === 1) {
        buttonRemove1.attr("disabled", "disabled");
        buttonRemove1.removeClass("shadow-sm");
      }
    }
  
    function disableButtonAdd() {
      if (totalFieldsA() === maxFields) {
        buttonAdd1.attr("disabled", "disabled");
        buttonAdd1.removeClass("shadow-sm");
      }
    }
  
    function enableButtonAdd() {
      if (totalFieldsA() === (maxFields - 1)) {
        buttonAdd1.removeAttr("disabled");
        buttonAdd1.addClass("shadow-sm");
      }
    }
  
    buttonAdd1.click(function() {
      addNewField();
      enableButtonRemove();
      disableButtonAdd();
    });
  
    buttonRemove1.click(function() {
      removeLastField();
      disableButtonRemove();
      enableButtonAdd();
    });
  });


$(document).ready(function() {
    var buttonAdd2 = $("#add-buttonB");
    var buttonRemove2 = $("#remove-buttonB");
    var className = ".field-stepB";
    var count = 0;
    var field = "";
    var maxFields = 3;
  
    function totalFieldsB() {
      return $(className).length;
    }
  
    function addNewField() {
      count = totalFieldsB() + 1;
      field = $("#field-stepB-1").clone();
      field.attr("id", "field-stepB-" + count);
      field.children("label").text("Campo " + count);
      field.find("input").val("");
      $(className + ":last").after($(field));
    }
  
    function removeLastField() {
      if (totalFieldsB() > 1) {
        $(className + ":last").remove();
      }
    }
  
    function enableButtonRemove() {
      if (totalFieldsB() === 2) {
        buttonRemove2.removeAttr("disabled");
        buttonRemove2.addClass("shadow-sm");
      }
    }
  
    function disableButtonRemove() {
      if (totalFieldsB() === 1) {
        buttonRemove2.attr("disabled", "disabled");
        buttonRemove2.removeClass("shadow-sm");
      }
    }
  
    function disableButtonAdd() {
      if (totalFieldsB() === maxFields) {
        buttonAdd2.attr("disabled", "disabled");
        buttonAdd2.removeClass("shadow-sm");
      }
    }
  
    function enableButtonAdd() {
      if (totalFieldsB() === (maxFields - 1)) {
        buttonAdd2.removeAttr("disabled");
        buttonAdd2.addClass("shadow-sm");
      }
    }
  
    buttonAdd2.click(function() {
      addNewField();
      enableButtonRemove();
      disableButtonAdd();
    });
  
    buttonRemove2.click(function() {
      removeLastField();
      disableButtonRemove();
      enableButtonAdd();
    });
  });