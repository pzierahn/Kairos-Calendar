SliderButton = {};

SliderButton.addCSSShit = function()
{
    var css = "" +
        ".noUi-target," +
        ".noUi-target * {" +
        "-webkit-touch-callout: none;" +
        "-webkit-user-select: none;" +
        "-ms-touch-action: none;" +
        "    touch-action: none;" +
        "-ms-user-select: none;" +
        "-moz-user-select: none;" +
        "    user-select: none;" +
        "-moz-box-sizing: border-box;" +
        "    box-sizing: border-box;" +
        "}" +
        ".noUi-target {" +
        "    position: relative;" +
        "    direction: ltr;" +
        "}" +
        ".noUi-base {" +
        "    width: 100%;" +
        "    height: 100%;" +
        "    position: relative;" +
        "    z-index: 1; /* Fix 401 */" +
        "}" +
        ".noUi-origin {" +
        "    position: absolute;" +
        "    right: 0;" +
        "    top: 0;" +
        "    left: 0;" +
        "    bottom: 0;" +
        "}" +
        ".noUi-handle {" +
        "    position: relative;" +
        "    z-index: 1;" +
        "}" +
        ".noUi-stacking .noUi-handle {" +
        "/* This class is applied to the lower origin when" +
        "   its values is > 50%. */" +
        "    z-index: 10;" +
        "}" +
        ".noUi-state-tap .noUi-origin {" +
        "-webkit-transition: left 0.3s, top 0.3s;" +
        "    transition: left 0.3s, top 0.3s;" +
        "}" +
        ".noUi-state-drag * {" +
        "    cursor: inherit !important;" +
        "}" +
        "" +
        "/* Painting and performance;" +
        " * Browsers can paint handles in their own layer." +
        " */" +
        ".noUi-base," +
        ".noUi-handle {" +
        "    -webkit-transform: translate3d(0,0,0);" +
        "    transform: translate3d(0,0,0);" +
        "}" +
        "" +
        "/* Slider size and handle placement;" +
        " */" +
        ".noUi-horizontal {" +
        "    height: 18px;" +
        "}" +
        ".noUi-horizontal .noUi-handle {" +
        "    width: 34px;" +
        "    height: 28px;" +
        "    left: -17px;" +
        "    top: -6px;" +
        "}" +
        ".noUi-vertical {" +
        "    width: 18px;" +
        "}" +
        ".noUi-vertical .noUi-handle {" +
        "    width: 28px;" +
        "    height: 34px;" +
        "    left: -6px;" +
        "    top: -17px;" +
        "}" +
        "" +
        "/* Styling;" +
        " */" +
        ".noUi-background {" +
        "    background: #FAFAFA;" +
        "    box-shadow: inset 0 1px 1px #f0f0f0;" +
        "}" +
        ".noUi-connect {" +
        "    background: #3FB8AF;" +
        "    box-shadow: inset 0 0 3px rgba(51,51,51,0.45);" +
        "-webkit-transition: background 450ms;" +
        "    transition: background 450ms;" +
        "}" +
        ".noUi-origin {" +
        "    border-radius: 2px;" +
        "}" +
        ".noUi-target {" +
        "    border-radius: 4px;" +
        "    border: 1px solid #D3D3D3;" +
        "    box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;" +
        "}" +
        ".noUi-target.noUi-connect {" +
        "    box-shadow: inset 0 0 3px rgba(51,51,51,0.45), 0 3px 6px -5px #BBB;" +
        "}" +
        "" +
        "/* Handles and cursors;" +
        " */" +
        ".noUi-draggable {" +
        "    cursor: w-resize;" +
        "}" +
        ".noUi-vertical .noUi-draggable {" +
        "    cursor: n-resize;" +
        "}" +
        ".noUi-handle {" +
        "    border: 1px solid #D9D9D9;" +
        "    border-radius: 3px;" +
        "    background: #FFF;" +
        "    cursor: default;" +
        "    box-shadow: inset 0 0 1px #FFF," +
        "                inset 0 1px 7px #EBEBEB," +
        "                0 3px 6px -3px #BBB;" +
        "}" +
        ".noUi-active {" +
        "    box-shadow: inset 0 0 1px #FFF," +
        "                inset 0 1px 7px #DDD," +
        "                0 3px 6px -3px #BBB;" +
        "}" +
        "" +
        "/* Handle stripes;" +
        " */" +
        ".noUi-handle:before," +
        ".noUi-handle:after {" +
        "    content: \"\";" +
        "    display: block;" +
        "    position: absolute;" +
        "    height: 14px;" +
        "    width: 1px;" +
        "    background: #E8E7E6;" +
        "    left: 14px;" +
        "    top: 6px;" +
        "}" +
        ".noUi-handle:after {" +
        "    left: 17px;" +
        "}" +
        ".noUi-vertical .noUi-handle:before," +
        ".noUi-vertical .noUi-handle:after {" +
        "    width: 14px;" +
        "    height: 1px;" +
        "    left: 6px;" +
        "    top: 14px;" +
        "}" +
        ".noUi-vertical .noUi-handle:after {" +
        "    top: 17px;" +
        "}" +
        "" +
        "/* Disabled state;" +
        " */" +
        "[disabled].noUi-connect," +
        "[disabled] .noUi-connect {" +
        "    background: #B8B8B8;" +
        "}" +
        "[disabled].noUi-origin," +
        "[disabled] .noUi-handle {" +
        "    cursor: not-allowed;" +
        "}";

    var style = WebLibSimple.createAnyAppend("style", document.head);
    style.innerHTML = css;
};

SliderButton.create = function(parent, start, changeEvent)
{
    var div = WebLibSimple.createDiv(100, 100, 100, 0, null, parent);

    var opt = {
    	start: [ start ],
    	step: 1,
    	range: {
    		"min": [  0  ],
    		"max": [ 100 ]
    	}
    };

    noUiSlider.create(div, opt);

    div.noUiSlider.on("update", function()
    {
        // if (changeEvent == undefined || changeEvent == null) return;
        changeEvent(div.noUiSlider.get());
    });
};