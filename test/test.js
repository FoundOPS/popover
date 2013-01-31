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
var TITLE = "Popover Demo";
addButton();
var button1 = addButton();

var popover = $("#"+button1.id).optionsPopover({
    id: "button1",
    title: TITLE,
    contents: [
        {
            name: "Github",
            id: "github"
        },
        {
            name: "Logout",
            id: "logout"
        }
    ],
    disableHeader: true,
    disableBackButton: false
});

var Popover = $("#button1").popover("_getPopoverClass");

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
            console.log("isHeaderDisabled: "+popover.isHeaderDisabled);
            expect(popover.isHeaderDisabled).to.equal(false);
            $("#button1").trigger("click");
            $("#button1").trigger("click");
        });
        it("has a back button", function () {
            console.log("isBackEnabled: "+popover.isBackEnabled);
            var backButton = $("#popoverBack");
            console.log(backButton.length);
            expect(backButton.length).to.equal(1);
            $("#button1").trigger("click");
            $("#button1").trigger("click");
        });
        describe.skip("back button", function () {
            it("goes to previous menu when clicked", function () {
                //TODO
                expect().to.equal();
            });
        });

        it("has a close button", function () {
            var closeButton = $("#popoverClose");
            expect(closeButton.length).to.equal(1);
            $("#button1").trigger("click");
            $("#button1").trigger("click");
        });
        describe.skip("close button", function () {
            it("closes when clicked", function () {
                //TODO
                expect().to.equal();
            });
        });
        it("has title that was passed", function () {
            $("#button1").trigger("click");
            var domTitle = $("#popoverTitle").text();
            var popoverTitle = Popover.title;
            expect(domTitle).to.equal(TITLE);
            expect(popoverTitle).to.equal(TITLE);
            $("#button1").trigger("click");
        });
    });
    describe("trigger tests", function () {
        it("triggers popover.visible on visible", function (done) {
            $(document).on("popover.visible", function(){
                done();
            });
            $("#button1").trigger("click");
            $("#button1").trigger("click");
        });
    });
});