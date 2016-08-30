/**
 * Created by liuyujing on 16/8/30.
 */
/*
 jQuery(function () {

 });
 $(document).ready(function () {

 });
 jQuery(document).ready(function () {

 });
 */

$(function () {

    function Card(width,height) {
        var self = {};

        var htmlNode;
        var divA, divB;
        var aVisible = true;

        self.getHtmlNode = function () {
            return htmlNode;
        };

        self.getWidth = function () {
            return width;
        };

        self.getHeight = function () {
            return height;
        };
/*
        self.show = function () {
            divA.css("display",aVisible == true?"block":"none");
            divB.css("display",aVisible == true?"none":"block");
            aVisible = !aVisible;
        };
*/
        self.showA = function () {
            divA.css("display","block");
            divB.css("display","none");
            aVisible = true;
        };

        self.showB = function () {
            divA.css("display","none");
            divB.css("display","block");
            aVisible = false;
        };

        function addListeners() {
            htmlNode.bind("click",function () {
                aVisible == false? self.showA():self.showB();
            });
        }

        function init() {
            /*
            htmlNode = $("<div></div>");
            htmlNode.className("card");
            */
            htmlNode = $("<div></div>").addClass("card");
            htmlNode.css("width",width + "px");
            htmlNode.css("height",height + "px");

            divA = $("<div></div>").addClass("div-a");
            htmlNode.append(divA);

            divB = $("<div></div>");
            divB.addClass("div-b");
            htmlNode.append(divB);

            self.showA();
            addListeners();
        }

        init();
        return self;
    }

    window.Card = Card;
});


