
(function ($) {
    var defaults = {
        width: 400,
        height: 400,
        background: '#222',
        className: "container",
        boxWidth: 100,
        boxHeight: 100,
        boxClassName: "box",
        delay: 200
    }

    $.fn._2048 = function (options) {

        var options = $.extend(defaults, options);
        var matrix = new Array();
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                matrix[i * 4 + j] = {
                    top: i * options.boxHeight,
                    left: j * options.boxWidth,
                    taken: false
                }
            }
        }
        var content = $("<div></div>");
        content.attr({ tabindex: '0', class: options.className });
        content.appendTo(this);
        content.focus();
        var box = new Array();
        newbox();
        bind();


        function newbox() {
            var i = Math.floor(Math.random() * 16);
            var full = 0;
            while (matrix[i].taken == true) {
                i == 15 ? i = 0 : i++;
                full++;
                if (full == 16) {
                    return false;
                }
            }
            matrix[i].taken = true;
            var newbox = $("<div></div>");
            newbox.attr({ class: options.boxClassName, position: i, value: 2 });
            newbox.css({ marginTop: matrix[i].top + "px", marginLeft: matrix[i].left + "px", opacity: "0" });
            newbox.html(newbox.attr("value"));
            newbox.appendTo(content);
            box.push(newbox);
            newbox.animate({ opacity: "1" }, options.delay * 2);
            //alert(newbox.attr('position'));
        }
        function run(dir) {
            var ismove = false;
            if (dir == "left") {
                var i, j, k, empty;
                for (i = 0; i < 4; i++) {
                    empty = i * 4;
                    var _empty = empty;
                    for (j = 0; j < 4; j++) {
                        var position = i * 4 + j;
                        //alert(empty + "," + position);
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty - 1].taken = false;
                                    empty--;
                                    box.splice(k, 1);
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
                            //alert(box[k].attr('position'));
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty - 1].taken = false;
                                    empty--;
                                    box.splice(k, 1);
                                }
                            }
                        }
                    }

                }
                return ismove;

            }
            else if (dir == "right") {
                var i, j, k, empty;
                for (i = 3; i > -1; i--) {
                    empty = i * 4 + 3;
                    _empty = empty;
                    for (j = 3; j > -1; j--) {

                        var position = i * 4 + j;
                        //alert(empty + "," + position);
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty + 1].taken = false;
                                    empty++;
                                    box.splice(k, 1);
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
                            //alert(box[k].attr('position'));
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty + 1].taken = false;
                                    empty++;
                                    box.splice(k, 1);
                                }

                            }
                        }
                    }
                }
                return ismove;
            }
            else if (dir == "up") {
                var i, j, k, empty;
                for (i = 0; i < 4; i++) {
                    empty = i;
                    _empty = empty;
                    for (j = 0; j < 4; j++) {
                        var position = j * 4 + i;
                        //alert(empty + "," + position);
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty - 4].taken = false;
                                    empty -= 4;
                                    box.splice(k, 1);
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
                            //alert(box[k].attr('position'));
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty - 4].taken = false;
                                    empty -= 4;
                                    box.splice(k, 1);

                                }

                            }
                        }
                    }

                }
                return ismove;

            }
            else if (dir == "down") {
                var i, j, k, empty;
                for (i = 0; i < 4; i++) {
                    empty = i + 12;
                    _empty = empty;
                    for (j = 3; j > -1; j--) {
                        var position = j * 4 + i;
                        //alert(empty + "," + position);
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty + 4].taken = false;
                                    empty += 4;
                                    box.splice(k, 1);
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
                            //alert(box[k].attr('position'));
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
                                var value2 = box[temp].attr('value'); //合并后的box
                                if (value1 == value2) {
                                    var value3 = parseInt(value1) * 2;
                                    box[k].animate({ opacity: "0" }, options.delay);
                                    box[temp].attr('value', value3);
                                    box[temp].html(box[temp].attr('value'));
                                    matrix[empty + 4].taken = false;
                                    empty += 4;
                                    box.splice(k, 1);

                                }

                            }
                        }
                    }

                }
                return ismove;

            }
        }

        function combine(source, target) {



        }

        function bind() {
            content.keydown(function (event) {
                if (event.which == 37) {
                    var ismove = run("left");
                    if (ismove) {
                        newbox();
                    }
                }

                else if (event.which == 38) {
                    var ismove = run("up");
                    if (ismove) {
                        newbox();
                    }
                }
                else if (event.which == 39) {
                    var ismove = run("right");
                    if (ismove) {
                        newbox();
                    }
                }
                else if (event.which == 40) {
                    var ismove = run("down");
                    if (ismove) {
                        newbox();
                    }
                }
            })
        }

    }



})(jQuery);