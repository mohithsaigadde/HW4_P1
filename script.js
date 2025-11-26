// HW4 Part 1 - Dynamic Multiplication Table with jQuery Validation
// Author: Mohith Sai Gadde (02209215)
// Email: MohithSai_Gadde@student.uml.edu

(function () {
  const LIMIT_MIN = -50;
  const LIMIT_MAX = 50;
  const MAX_CELLS = 10000;

  const $form = $("#tableForm");
  const $shell = $("#tableShell");
  const $msg = $("#messages");


  function buildTable(hStart, hEnd, vStart, vEnd) {
 
    $shell.empty();

    const table = document.createElement("table");

    // header row
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    const corner = document.createElement("th");
    corner.className = "corner";
    corner.textContent = "×";
    trHead.appendChild(corner);

    for (let x = hStart; x <= hEnd; x++) {
      const th = document.createElement("th");
      th.textContent = x;
      trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);

    // body rows
    const tbody = document.createElement("tbody");
    for (let y = vStart; y <= vEnd; y++) {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = y;
      tr.appendChild(th);

      for (let x = hStart; x <= hEnd; x++) {
        const td = document.createElement("td");
        td.textContent = x * y;
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    $shell.append(table);
  }

  $.validator.addMethod(
    "horizRange",
    function (value, element) {
      const start = parseInt($("#hStart").val(), 10);
      const end = parseInt($("#hEnd").val(), 10);
      if (isNaN(start) || isNaN(end)) {
        return true;
      }
      return start <= end;
    },
    "Horizontal start must be less than or equal to horizontal end."
  );

  $.validator.addMethod(
    "vertRange",
    function (value, element) {
      const start = parseInt($("#vStart").val(), 10);
      const end = parseInt($("#vEnd").val(), 10);
      if (isNaN(start) || isNaN(end)) {
        return true;
      }
      return start <= end;
    },
    "Vertical start must be less than or equal to vertical end."
  );

 
  $.validator.addMethod(
    "maxCells",
    function (value, element) {
      const hStart = parseInt($("#hStart").val(), 10);
      const hEnd = parseInt($("#hEnd").val(), 10);
      const vStart = parseInt($("#vStart").val(), 10);
      const vEnd = parseInt($("#vEnd").val(), 10);

      if ([hStart, hEnd, vStart, vEnd].some(isNaN)) {
        return true; 
      }

      const width = Math.abs(hEnd - hStart) + 1;
      const height = Math.abs(vEnd - vStart) + 1;
      const cells = width * height;

      return cells <= MAX_CELLS;
    },
    "Table is too large. Please choose a smaller range (maximum 10,000 cells)."
  );

  $form.validate({

    errorPlacement: function (error, element) {

      error.insertAfter(element);
    },


    highlight: function (element) {
      $(element).addClass("error");
    },
    unhighlight: function (element) {
      $(element).removeClass("error");
    },

    rules: {
      hStart: {
        required: true,
        number: true,
        range: [LIMIT_MIN, LIMIT_MAX]
      },
      hEnd: {
        required: true,
        number: true,
        range: [LIMIT_MIN, LIMIT_MAX],
        horizRange: true,
        maxCells: true
      },
      vStart: {
        required: true,
        number: true,
        range: [LIMIT_MIN, LIMIT_MAX]
      },
      vEnd: {
        required: true,
        number: true,
        range: [LIMIT_MIN, LIMIT_MAX],
        vertRange: true,
        maxCells: true
      }
    },

    messages: {
      hStart: {
        required: "Please enter a horizontal start value.",
        number: "Horizontal start must be an integer.",
        range: `Horizontal start must be between ${LIMIT_MIN} and ${LIMIT_MAX}.`
      },
      hEnd: {
        required: "Please enter a horizontal end value.",
        number: "Horizontal end must be an integer.",
        range: `Horizontal end must be between ${LIMIT_MIN} and ${LIMIT_MAX}.`
       
      },
      vStart: {
        required: "Please enter a vertical start value.",
        number: "Vertical start must be an integer.",
        range: `Vertical start must be between ${LIMIT_MIN} and ${LIMIT_MAX}.`
      },
      vEnd: {
        required: "Please enter a vertical end value.",
        number: "Vertical end must be an integer.",
        range: `Vertical end must be between ${LIMIT_MIN} and ${LIMIT_MAX}.`
      }
    },

    submitHandler: function () {
      $msg.removeClass("error").text("");

      const hStart = parseInt($("#hStart").val(), 10);
      const hEnd = parseInt($("#hEnd").val(), 10);
      const vStart = parseInt($("#vStart").val(), 10);
      const vEnd = parseInt($("#vEnd").val(), 10);

      buildTable(hStart, hEnd, vStart, vEnd);

      return false;
    }
  });

  $("#resetBtn").on("click", function () {

    $form[0].reset();

    $shell.empty();
    $msg.removeClass("error").text("Cleared.");

    $form.validate().resetForm();
    $form.find(".error").removeClass("error");
  });
})();
