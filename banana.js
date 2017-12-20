(function() {

    var key_first_paragraph = "div#bodyContent>div#mw-content-text>div.mw-parser-output>p:first";
    var key_heading = "h1#firstHeading";

    var banana_image = "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";
    var banana_alt = "CC-BY-SA 4.0, Author: EdwardTBlack, via https://commons.wikimedia.org/wiki/File:Pacman_emoticon.png";

    var _f_2Hira = wanakana.toHiragana;
    var _2_isHira = wanakana.isHiragana;

    function getTitle() {
        return $(key_heading).text();
    }

    function getFirstBoldText() {
        var base = $(key_first_paragraph);
        if (base.html().match(/^<b>/)) {
            return base.children("b:first").text();
        }
        return undefined;
    }

    function getKakkoText() {
        var base = $(key_first_paragraph);
        var matches = base.text().match(/（.*?）/);
        if (!matches) {
            return undefined;
        }
        for (var i1 = 0, j1 = matches.length; i1 < j1; i1++) {
            var match = matches[i1];
            var splited_text = match.slice(1, -1).split(/[、,]/);
            for (var i2 = 0, j2 = splited_text.length; i2 < j2; i2++) {
                var text = _f_2Hira(splited_text[i2]);
                if (isAcceptable(text)) {
                    return text;
                }
            }
        }
        return undefined;
    }

    function setTitle(text) {
        var base = $(key_heading);
        base.html("<sup>" + text + "</sup>");
        base.prepend('<img src="data:image/png;base64,' + banana_image + '" alt="' + banana_alt + '"/>');
    }

    function isAcceptable(text) {
        var check_text = text;
        check_text = check_text.replace(/[・| ]/g, '');
        return _2_isHira(check_text);
    }

    var prospects = [
        _f_2Hira(getTitle()),
        _f_2Hira(getFirstBoldText()),
        _f_2Hira(getKakkoText())
    ];
    for (var i = 0, j = prospects.length; i < j; i++) {
        var text = prospects[i];
        if (isAcceptable(text)) {
            return setTitle(text);
        }
    }
})();
