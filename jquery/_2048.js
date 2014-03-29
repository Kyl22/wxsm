
(function ($) {
    var defaults = {
        className: "container",
        boxWidth: 100,
        boxHeight: 100,
        boxClassName: "box",
        delay: 200
    }

    $.fn._2048 = function (options) {

        var options = $.extend(defaults, options);
        var matrix = new Array();
        var score = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                matrix[i * 4 + j] = {
                    top: i * options.boxHeight,
                    left: j * options.boxWidth,
                    taken: false,
                    combined: false,
                    value: 0
                }
            }
        }
        var scoreBoard = $("<div></div>");
        scoreBoard.attr({ class: "scoreBoard" });
        scoreBoard.html("Score: " + score);
        scoreBoard.appendTo(this);
        var content = $("<div></div>");
        content.attr({ tabindex: '0', class: options.className });
        content.appendTo(this);
        content.focus();
        var box = new Array();
        newbox();
        bind();




        function newbox() {
            var emptyMatrix = 0;
            for (var i = 0; i < 16; i++) {
                if (matrix[i].taken == false) {
                    emptyMatrix++;
                }
            }
            if (emptyMatrix == 0) {
                return false;
            }
            var random = Math.floor(Math.random() * emptyMatrix + 1);

            var i = 0, j = 0;
            for (i = 0, j = 0; i < 16; i++) {
                while (matrix[i].taken == true) {
                    i++;
                }
                j++;
                if (j == random) {
                    break;
                }
            }
            matrix[i].taken = true;
            var newbox = $("<div></div>");
            newbox.attr({ 'class': options.boxClassName, 'position': i });
            random = Math.floor(Math.random() * 3 + 1);
            if (random == 3) {
                newbox.attr({ 'value': 4 });
            }
            else {
                newbox.attr({ 'value': 2 });
            }
            newbox.css({ marginTop: matrix[i].top + "px", marginLeft: matrix[i].left + "px", opacity: "0" });
            newbox.html(newbox.attr("value"));
            newbox.appendTo(content);
            box.push(newbox);
            changeColor(box.length - 1, parseInt(newbox.attr('value')));
            newbox.animate({ opacity: "1" }, options.delay * 2);

        }
        function run(dir) {
            var ismove = false;
            var i, j, k, empty;
            for (i = 0; i < 16; i++) {
                matrix[i].combined = false;
            }
            if (dir == "left") {

                for (i = 0; i < 4; i++) {
                    empty = i * 4;
                    var _empty = empty;
                    for (j = 0; j < 4; j++) {
                        var position = i * 4 + j;
                        if (matrix[position].taken == false) {
                            continue;
                        }
                        else if (matrix[position].taken == true && position == empty) {
                            empty++;
                            if (empty - 2 >= _empty) {
                                for (k = 0; k < box.length; k++) {
                                    if (box[k].attr("position") == position) {
                                        break;
                                    }
                                }
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty - 2) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty - 2].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty - 1].taken = false;
                                    matrix[empty - 2].combined = true;
                                    empty--;
                                    box.splice(k, 1);
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                    ismove = true;
                                }

                            }
                            continue;
                        }
                        else {
                            for (k = 0; k < box.length; k++) {
                                if (box[k].attr("position") == position) {
                                    break;
                                }
                            }
                            box[k].animate({ marginLeft: matrix[empty].left + "px", marginTop: matrix[empty].top + "px" }, options.delay);
                            box[k].attr('position', empty);
                            matrix[empty].taken = true;
                            matrix[position].taken = false;
                            empty++;
                            ismove = true;
                            if (empty - 2 >= _empty) {
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty - 2) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty - 2].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty - 1].taken = false;
                                    matrix[empty - 2].combined = true;
                                    empty--;
                                    box.splice(k, 1);
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }
                            }
                        }
                    }

                }
                return ismove;

            }
            else if (dir == "right") {
                for (i = 3; i > -1; i--) {
                    empty = i * 4 + 3;
                    _empty = empty;
                    for (j = 3; j > -1; j--) {

                        var position = i * 4 + j;
                        if (matrix[position].taken == false) {
                            continue;
                        }
                        else if (matrix[position].taken == true && position == empty) {
                            empty--;
                            if (empty + 2 <= _empty) {
                                for (k = 0; k < box.length; k++) {
                                    if (box[k].attr("position") == position) {
                                        break;
                                    }
                                }
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty + 2) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty + 2].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty + 1].taken = false;
                                    matrix[empty + 2].combined = true;
                                    empty++;
                                    box.splice(k, 1);
                                    ismove = true;
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                            continue;
                        }
                        else {
                            for (k = 0; k < box.length; k++) {
                                if (box[k].attr("position") == position) {
                                    break;
                                }
                            }
                            box[k].animate({ marginLeft: matrix[empty].left + "px", marginTop: matrix[empty].top + "px" }, options.delay);
                            box[k].attr('position', empty);
                            matrix[empty].taken = true;
                            matrix[position].taken = false;
                            empty--;
                            ismove = true;
                            if (empty + 2 <= _empty) {
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty + 2) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty + 2].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty + 1].taken = false;
                                    matrix[empty + 2].combined = true;
                                    empty++;
                                    box.splice(k, 1);
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                        }
                    }
                }
                return ismove;
            }
            else if (dir == "up") {
                for (i = 0; i < 4; i++) {
                    empty = i;
                    _empty = empty;
                    for (j = 0; j < 4; j++) {
                        var position = j * 4 + i;
                        if (matrix[position].taken == false) {
                            continue;
                        }
                        else if (matrix[position].taken == true && position == empty) {
                            empty += 4;
                            if (empty - 8 >= _empty) {
                                for (k = 0; k < box.length; k++) {
                                    if (box[k].attr("position") == position) {
                                        break;
                                    }
                                }
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty - 8) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty - 8].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty - 4].taken = false;
                                    matrix[empty - 8].combined = true;
                                    empty -= 4;
                                    box.splice(k, 1);
                                    ismove = true;
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                            continue;
                        }
                        else {
                            for (k = 0; k < box.length; k++) {
                                if (box[k].attr("position") == position) {
                                    break;
                                }
                            }
                            box[k].animate({ marginLeft: matrix[empty].left + "px", marginTop: matrix[empty].top + "px" }, options.delay);
                            box[k].attr('position', empty);
                            matrix[empty].taken = true;
                            matrix[position].taken = false;
                            empty += 4;
                            ismove = true;
                            if (empty - 8 >= _empty) {

                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty - 8) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty - 8].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty - 4].taken = false;
                                    matrix[empty - 8].combined = true;
                                    empty -= 4;
                                    box.splice(k, 1);
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                        }
                    }

                }
                return ismove;

            }
            else if (dir == "down") {
                for (i = 0; i < 4; i++) {
                    empty = i + 12;
                    _empty = empty;
                    for (j = 3; j > -1; j--) {
                        var position = j * 4 + i;
                        if (matrix[position].taken == false) {
                            continue;
                        }
                        else if (matrix[position].taken == true && position == empty) {
                            empty -= 4;
                            if (empty + 8 <= _empty) {
                                for (k = 0; k < box.length; k++) {
                                    if (box[k].attr("position") == position) {
                                        break;
                                    }
                                }
                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty + 8) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty + 8].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty + 4].taken = false;
                                    matrix[empty + 8].combined = true;
                                    empty += 4;
                                    box.splice(k, 1);
                                    ismove = true;
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                            continue;
                        }
                        else {
                            for (k = 0; k < box.length; k++) {
                                if (box[k].attr("position") == position) {
                                    break;
                                }
                            }
                            box[k].animate({ marginLeft: matrix[empty].left + "px", marginTop: matrix[empty].top + "px" }, options.delay);
                            box[k].attr('position', empty);
                            matrix[empty].taken = true;
                            matrix[position].taken = false;
                            empty -= 4;
                            ismove = true;
                            if (empty + 8 <= _empty) {

                                var value1 = box[k].attr('value');
                                var temp;
                                for (temp = 0; temp < box.length; temp++) {
                                    if (box[temp].attr("position") == empty + 8) {
                                        break;
                                    }
                                }
                                var value2 = box[temp].attr('value');
                                if (value1 == value2 && matrix[empty + 8].combined == false) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    changeColor(temp, value3);
                                    matrix[empty + 4].taken = false;
                                    matrix[empty + 8].combined = true;
                                    empty += 4;
                                    box.splice(k, 1);
                                    score += value3;
                                    scoreBoard.html("Score: " + score);
                                }

                            }
                        }
                    }

                }
                return ismove;

            }
        }
        function changeColor(boxNum, boxVal) {
            if (boxVal == 2) {
                box[boxNum].css({ "background-color": "#FFF8D7" });
            }
            else if (boxVal == 4) {
                box[boxNum].css({ "background-color": "#FFED97" });
            }
            else if (boxVal == 8) {
                box[boxNum].css({ "background-color": "#FFBB77" });
            }
            else if (boxVal == 16) {
                box[boxNum].css({ "background-color": "#FF9224" });
            }
            else if (boxVal == 32) {
                box[boxNum].css({ "background-color": "#FF5809" });
            }
            else if (boxVal == 64) {
                box[boxNum].css({ "background-color": "#EA0000" });
            }
            else if (boxVal == 128) {
                box[boxNum].css({ "background-color": "#FFFF37" });
            }
            else if (boxVal == 256) {
                box[boxNum].css({ "background-color": "#F9F900" });
            }
            else if (boxVal == 512) {
                box[boxNum].css({ "background-color": "#E1E100" });
            }
            else if (boxVal == 1024) {
                box[boxNum].css({ "background-color": "#C4C400" });
            }
            else if (boxVal == 2048) {
                box[boxNum].css({ "background-color": "#A6A600" });
            }
            else if (boxVal == 4096) {
                box[boxNum].css({ "background-color": "#8C8C00" });
            }
            else if (boxVal == 8192) {
                box[boxNum].css({ "background-color": "#737300" });
            }

        }
        function gameover() {
            if (box.length != 16) {
                return false;
            }
            var i, a, b, c, d, e, f;
            for (i = 0; i < 16; i++) {
                for (a = 0; a < 16; a++) {
                    if (box[a].attr('position') == i) break;
                }
                if (i % 4 != 3) {
                    for (b = 0; b < 16; b++) {
                        if (box[b].attr('position') == i + 1) break;
                    }
                    if (box[a].attr('value') == box[b].attr('value')) return false;
                }
                if (i < 12) {
                    for (b = 0; b < 16; b++) {
                        if (box[b].attr('position') == i + 4) break;
                    }
                    if (box[a].attr('value') == box[b].attr('value')) return false;
                }
            }
            return true;
        }

        function bind() {
            content.keydown(function (event) {
                if (event.which == 37) {
                    var ismove = run("left");
                    var isgameover = false;
                    if (ismove) {
                        newbox();
                    }
                    isgameover = gameover();
                    if (isgameover) {
                        scoreBoard.html(scoreBoard.html() + "<br/>Game Over");
                    }


                }

                else if (event.which == 38) {
                    var ismove = run("up");
                    var isgameover = false;
                    if (ismove) {
                        newbox();
                    }
                    isgameover = gameover();
                    if (isgameover) {
                        scoreBoard.html(scoreBoard.html() + "<br/>Game Over");
                    }
                }
                else if (event.which == 39) {
                    var ismove = run("right");
                    var isgameover = false;
                    if (ismove) {
                        newbox();
                    }
                    isgameover = gameover();
                    if (isgameover) {
                        scoreBoard.html(scoreBoard.html() + "<br/>Game Over");
                    }
                }
                else if (event.which == 40) {
                    var ismove = run("down");
                    var isgameover = false;
                    if (ismove) {
                        newbox();
                    }
                    isgameover = gameover();
                    if (isgameover) {
                        scoreBoard.html(scoreBoard.html() + "<br/>Game Over");
                    }
                }
            })
        }

    }



})(jQuery);