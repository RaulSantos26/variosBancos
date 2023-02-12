$('input[name="tipo"]').change(function () {
    if ($('input[name="tipo"]:checked').val() === "contaJudicial") {
        $('.contaJudicial').show();
        $('.numeroGsv').hide();
    } else {
        $('.contaJudicial').hide();
        $('.numeroGsv').show();
    }
});