// 1. Garante que Bootstrap JS está carregado de forma síncrona
document.addEventListener("DOMContentLoaded", function () {

  // 2. Corrige o modal do "+ Info"
  $('[data-toggle="modal"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this).data("target");
    $(target).modal("show");
  });

  // 3. Corrige as tabs dentro do modal
  $('[data-toggle="tab"]').on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  // 4. Substitui setLang por versão visual (só muda o estilo do botão activo)
  window.setLang = function (l) {
    $(".locale-changer").removeClass("active");
    $(".locale-changer[title]").each(function () {
      if ($(this).attr("onclick") && $(this).attr("onclick").includes(l)) {
        $(this).addClass("active");
      }
    });
  };
});
