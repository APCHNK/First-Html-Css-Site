//TIMER
document.addEventListener('DOMContentLoaded', function () {

    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);

    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});
///////
var burgerCtr = document.querySelector("#burger-menu");
var menuCtr = document.querySelector("#mobile-menu");
burgerCtr.addEventListener("click", function () {
    this.classList.toggle("active");
    menuCtr.classList.toggle("show_mobile_menu");
});

$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});

$('.quantity_inner .bt_plus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});

$('.quantity_inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});

var burgerCtr = document.querySelector("#burger-menu");
var menuCtr = document.querySelector("#mobile-menu");
burgerCtr.addEventListener("click", function () {
    this.classList.toggle("active");
    menuCtr.classList.toggle("show_mobile_menu");
});


// ---------------------------------------------------------------------

$(document).click(function (e) {
    if ($(e.target).closest(".pop-up").length) {

        return;
    }

});


// ---------------------------------------------------------------------

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);


// ---------------------------------------------------------------------





let accordeon = document.querySelectorAll('.accordeon');

accordeon.forEach(element => {
    let aLine = element.querySelectorAll('.accordeon__line');
    let aContent = element.querySelectorAll('.accordeon__content');

    accordeonHideContent();
    accordeonShowContent();

    element.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('accordeon__line')) {
            aLine.forEach((element, i) => {
                if (e.target == element) {
                    accordeonHideContent();
                    accordeonShowContent(i);
                }
            });
        }
    });

    function accordeonHideContent() {
        aLine.forEach(element => {
            element.classList.remove('active');
        });
        aContent.forEach(element => {
            element.classList.remove('active');
        });
    }

    function accordeonShowContent(i = 0) {
        aLine[i].classList.add('active');
        aContent[i].classList.add('active');
    }
});



let tabBlock = document.querySelectorAll('.tabs');

tabBlock.forEach(element => {
    let tabsParent = element.querySelector('ul');
    let tabs = tabsParent.querySelectorAll('li');
    let tabsContent = element.querySelectorAll('div');

    tabHideContent();
    tabShowContent();

    tabsParent.addEventListener('click', function (e) {
        if (e.target) {
            tabs.forEach((element, i) => {
                if (e.target == element) {
                    tabHideContent();
                    tabShowContent(i);
                }
            });
        }
    });

    function tabHideContent() {
        tabs.forEach(element => {
            element.classList.remove('active');
        });

        tabsContent.forEach(element => {
            element.classList.remove('active');
        });
    }

    function tabShowContent(i = 0) {
        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
    }
});





// ---------------------------------------------------------------------

$(document).ready(function () {
    $(".phone").mask("+380 (99) 999-99-99");

    // ---------------------------------------------------------------------

    // AJAX FORM
    $(".send-form").click(function () {
        var form = $(this).closest("form");

        if (form.valid()) {

            form.css("opacity", ".5");
            var actUrl = form.attr("action");

            $.ajax({
                url: actUrl,
                type: "post",
                dataType: "html",
                data: form.serialize(),
                success: function (data) {
                    form.html(data);
                    form.css("opacity", "1");

                },
                error: function () {
                    form.find(".status").html("серверная ошибка");
                },
            });
        }
    });
    // END AJAX FORM

    // ---------------------------------------------------------------------



    $(".scroll").click(function (e) {
        e.preventDefault();
        var target = $(this).data("target");



        $("html, body").animate({
                scrollTop: $(target).offset().top - 30,
            },
            400
        );
    });

    // ---------------------------------------------------------------------

    // Counter -----------------------

});


var screeHeight = $(window).height();
var offSet = 200;

if (screeHeight > 930) {
    offSet = 200;
} else {
    offSet = (screeHeight * 200) / 900;
    offSet = offSet.toFixed();
}

wow = new WOW({
    animateClass: "animated",
    offset: offSet,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
    },
});

wow.init();

// ---------------------------------------------------------------------