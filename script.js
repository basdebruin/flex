// Script
// for basdebruin.github.io/flex

var contentElem, contentLabels, colorIndex;
function init() {

    contentElem = document.getElementById('content');
    if (!content) {
        contentElem.innerText = 'Error loading content';
    }

    generateLabels();
    console.log(contentLabels);

    contentElem.innerText = "";

    for (let item of content) {
        drawItem(item);
    }

}

// make item element
function drawItem(item) {
    if (item === undefined) return;

    let str = `
        <a class="item" href="${item.link}" target="_blank">
            <h3>${item.title}</h3>
            <h4 class="company">${item.company}</h4>
            <h4 class="date">${item.date}</h4>
    `;
    item.tags.forEach(tag => {
        const col = contentLabels[tag];
        str += `
            <span class="tag" style="color: rgb(${col}); background: rgba(${col}, .2)">${tag}</span>
        `
    });
    str += '</div>';

    contentElem.innerHTML += str;
}

function generateLabels() {
    // generate list of labels
    contentLabels = new Object();
    content.forEach(item => {
        item.tags.forEach(tag => {
            contentLabels[tag] = _generateColor();
        })
    });

    function _generateColor() {
        const COLORS = [ "255, 180, 150", "200, 255, 100", "150, 200, 255", "220, 220, 150" ];
        if (colorIndex === undefined) colorIndex = 0;
        colorIndex = (colorIndex + 1) % (COLORS.length - 1);
        return COLORS[colorIndex];
    }
}