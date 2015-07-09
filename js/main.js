function calcsize(e) {
    e.preventDefault();
    var currentwidth = document.getElementById('currentwidth').value;
    var currentheight = document.getElementById('currentheight').value;
    var widthheight = document.getElementById('widthheight').value;
    var newsize = document.getElementById('newsize').value;

    if (widthheight === 'width') {
        var newwidth = ((currentheight/currentwidth)*newsize).toFixed(0);
        document.getElementById('result').innerHTML = "the new height is: <span>" + newwidth + "</span>";
    }

    if (widthheight === 'height') {
        var newheight = ((currentwidth/currentheight)*newsize).toFixed(0);
        document.getElementById('result').innerHTML = "the new width is: <span>" + newheight + "</span>";
    }
}