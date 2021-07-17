let title = $("#title");
let descr = $("#description");
let agreement = $("#agreement");
let submitBtn = $("#submit-btn");

submitBtn.on("click", function(e) {
    e.preventDefault();
    doTheCheck();
});

function doTheCheck() {
    if (title.val() == "") {
        title.css("background", "red");
        title.css("color", "white");
    } else {
        title.css("background", "white");
        title.css("color", "black");
    }
    if (descr.val() == "") {
        descr.css("background", "red");
        descr.css("color", "white");
    } else {
        descr.css("background", "white");
        descr.css("color", "black");
    }
    if (agreement.prop("checked") == false) {
        agreement.parent().css("background", "red");
    } else {
        agreement.parent().css("background", "#424642");
    }
}