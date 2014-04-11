/*
 * Main function to collect data and send to remind-it
 *
 * require jquery, jquery.base64, html2canvas
 *
 * capture the html content of the current page loaded in the oppenned navigator tag, encode it in base64
 * take a screenshot preview (as base64) and send it to the RemindIt REST API as JSON object
 * {result:{url:'',content:'',screenshot:''}}
 *
 * If a selection is active, the html is limited to the selection root element.
 *
 * This function is called from the navigator
 */
window.sendToRemindIt = function () {
    html2canvas(document.body, {
        onrendered:function (canvas) {
            //Get selection if any
            var data = getSelText();
            //Otherwise get the full HTML content
            if (!data || data == '') {
                data = $('html')[0].outerHTML;
            }
            //Build the json to post
            var jsonData = "{'result':{'url':'" + document.location.href + "', 'content':'" + $.base64.encode(data) + "','screenshot':'" + canvas.toDataURL() + "'}}";
            $.ajax({
                type:'POST',
                url:'http://localhost:8080/index',
                data:jsonData
            });
        },
        width:300,
        height:300
    });
};

/*
 * Utils function to get the selected HTML section / or text
 */
function getSelText() {
    var selection = '';
    if (window.getSelection) {
        selection = window.getSelection();
    } else if (document.getSelection) {
        selection = document.getSelection();
    } else if (document.selection) {
        selection = document.selection.createRange().text;
    }
    if (selection.anchorNode) {
        range = document.createRange();
        range.setStart(selection.anchorNode, selection.anchorOffset);
        range.setEnd(selection.focusNode, selection.focusOffset);
        if (!range.commonAncestorContainer.innerHTML) {
            return   range.commonAncestorContainer.textContent;
        } else {
            return range.commonAncestorContainer.innerHTML;
        }
    }
    return;
}

