var buttonCount=0;
var addButton = function(){
    var button = document.createElement("div");
    button.id = "button"+[buttonCount];
    button.innerHTML = "Button "+[buttonCount];
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
addButton();
var button1 = addButton();

var popover = $("#"+button1.id).popover({
    id: "button1",
    title: "Popup Demo",
    contents: "<p>testing</p>",
    disableHeader: true,
    disableBackButton: false
});

//Tests
describe("Popover Tests", function () {
    //Initialize popover injection.
    $("#button1").trigger("click");
    $("#button1").trigger("click");

    var popoverWrapper = $("#popoverWrapper")[0];
    it("has popover in the DOM", function () {
        expect(popoverWrapper).to.not.equal(null);
    });
    it("is a child of the body", function () {
        expect(popoverWrapper.parentElement).to.equal(document.body);
    });
    describe("header", function () {
        it("is disabled", function () {
            expect(popover.isHeaderDisabled).to.equal(true);
        });
        it("is enabled", function () {
            popover.enableHeader();
            expect(popover.isHeaderDisabled).to.equal(false);
        });
        it.skip("has a back button", function () {
            //TODO
            expect().to.equal();
        });
        describe.skip("back button", function () {
            it("goes to previous menu when clicked", function () {
                //TODO
                expect().to.equal();
            });
        });

        it.skip("has a close button", function () {
            //TODO
            expect().to.equal();
        });
        describe.skip("close button", function () {
            it("closes when clicked", function () {
                //TODO
                expect().to.equal();
            });
        });
        it.skip("has title that was passed", function () {
            //TODO
            expect().to.equal();
        });
    });
    describe.skip("trigger tests", function () {
        it("triggers popover.visible on visible", function () {

        });
    });
});