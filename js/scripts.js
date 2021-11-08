$("#menu__button__checkbox").change(function () {
    if (this.checked) {
      $("main").css("filter", "blur(3px)");
      $("#menu__button").html("close").css("background", "var(--primary)");

    }else{
      $("main").css("filter", "blur(0)");
      $("#menu__button").html("menu").css("background", "var(--dark)");;
    }
  });