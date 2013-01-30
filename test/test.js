var buttonCount=0;
var addButton = function(){
    var button = document.createElement("div");
    button.id = "button"+[buttonCount];
    button.innerHTML = "button"+[buttonCount];
    button.className = "button";
    button.style.border = "1px solid #ccc";
    var child = document.body.appendChild(button);
    buttonCount++;
    return child;
};

var removeButton = function(id){
    $(id).remove();
    buttonCount--;
};

//Page setup
var el = document.createElement("div");
el.id = "myDiv";
el.innerHTML = "Hi there!";
el.style.background = "#ccc";
var myEl = document.getElementById('myDiv');

addButton();
var button1 = addButton();
addButton();
addButton();
removeButton("#button3");

$("#"+button1.id).popover({
    id: "button1",
    contents: "<p>testing</p>",
    disableHeader: true
});

//Tests
describe("DOM Tests", function () {
    $("#button1").trigger("click");
    $("#button1").trigger("click");

    var popoverWrapper = $("#popoverWrapper")[0];
    it("is popover the DOM", function () {
        expect(popoverWrapper).to.not.equal(null);
    });
    it("is a child of the body", function () {
        expect(popoverWrapper.parentElement).to.equal(document.body);
    });
});