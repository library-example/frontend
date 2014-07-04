/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
            	console.log('test');

            	phantom.exit();
            });
        });
    });





    describe("DOM Test", function () {

	    var el = document.createElement("div");
	    el.id = "myDiv";
	    el.innerHTML = "Hello World!";
	    document.body.appendChild(el);
	    var myEl = document.getElementById('myDiv');

	    it("has the right text", function () {
	        (myEl.innerHTML).should.equal("Hello World!");
	    });
	});

    
})();
