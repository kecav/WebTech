let title = $("#title");
let descr = $("#description");
let agreement = $("#agreement");
let agreeBox = $(".agreement-box");
let submitBtn = $("#submit-btn");

submitBtn.on("click", function(e) {
    e.preventDefault();
    doTheCheck();
});

function doTheCheck() {
    if (title.val() == "") {
        title.css("background", "red");
    } else {
        title.css("background", "white");
    }
    if (descr.val() == "") {
        descr.css("background", "red");
    } else {
        descr.css("background", "white");
    }
    if (agreement.prop("checked") == false) {
        agreeBox.css("background", "red");
    } else {
        agreeBox.css("background", "grey");
    }
}

title.change(doTheCheck());