function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();
      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".image-upload-wrap").show();
}

$(document).on("click", ".input-button-next", function() {
  $(this)
    .closest("fieldset")
    .removeClass("active");
  $(this)
    .closest("fieldset")
    .next("fieldset")
    .addClass("active");
  $(".progress-bar")
    .find("li.is-active")
    .next("li")
    .addClass("is-active")
    .prevAll("li.is-active")
    .addClass("is-complete");
});

$(document).on("click", ".input-button-back", function() {
  $(this)
    .closest("fieldset")
    .removeClass("active");
  $(this)
    .closest("fieldset")
    .prev("fieldset")
    .addClass("active");
  $(".progress-bar")
    .find("li:not(.is-active)")
    .prev("li.is-active")
    .removeClass("is-active");
  $(".progress-bar")
    .find("li:not(.is-active)")
    .prev("li.is-active.is-complete")
    .removeClass("is-complete");
});

$(document).on("click", ".input-button-back.finish", function() {
  $(this)
  .closest("fieldset")
  .removeClass("active");
$(this)
  .closest("fieldset")
  .prev("fieldset")
  .addClass("active");
$(".progress-bar li:last-child.is-active")
  .removeClass("is-active is-complete").prev("li.is-active.is-complete")
  .removeClass("is-complete");
});

$(document).on("click", ".onclick-load", function() {
  $(".modal-wrap").show();
  setTimeout(function() {
    $(".modal-wrap").hide();
  }, 500);
});

$(document).on("click", ".onclick-load2", function(d) {
  $(".modal-wrap").show();
  setTimeout(function() {
    location.href = "finish.html";
  }, 500);
});

$(document).on(
  "click",
  ".input-button-next.last",
  function() {
    $(this)
    .closest("fieldset")
    .addClass("active");

  });

$(document).ready(function() {
  $(window).on("resize", function(e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 1112) {
      $(document).on("click touch", ".info-icon", function() {
        let term = $(this).data("tooltip");
        $(".tooltip-modal").fadeIn();
        $(".tooltip p").html(term);
      });

      $(document).on("click touch", ".close-tooltip", function() {
        $(".tooltip-modal").hide();
        $(".tooltip p").empty();
      });
    } else {
      $(document).on("click", ".info-icon", function(e) {
        e.preventDefault();
      });
    }
  }
});
