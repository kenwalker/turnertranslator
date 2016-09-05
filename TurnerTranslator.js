
var elements = document.getElementsByTagName('*');

var checkCaseOne = function(match) {
    var firstChar = match.charAt(0);
    if (firstChar == firstChar.toUpperCase()) {
        return "Rapist";
    }
    return "rapist";
}

var checkCaseTwo = function(match) {
    var firstChar = match.charAt(0);
    if (firstChar == firstChar.toUpperCase()) {
        return "Raping";
    }
    return "raping";
}

var checkCaseThree = function(match) {
    var firstChar = match.charAt(0);
    if (firstChar == firstChar.toUpperCase()) {
        return "Rapes";
    }
    return "rapes";
}

var content = document.body.textContent || document.body.innerText;
var isBrockTurner = content.toLowerCase().indexOf("brock turner")!==-1;

console.log("isBrockTurner " + isBrockTurner);

if (isBrockTurner) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/swimmer/gi, checkCaseOne);
                var replacedText = replacedText.replace(/swimming/gi, checkCaseTwo);
                var replacedText = replacedText.replace(/swims/gi, checkCaseThree);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}