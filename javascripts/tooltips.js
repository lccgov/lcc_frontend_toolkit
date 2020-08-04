(function () {
    "use strict";
    var el = document.querySelector('.toggletip-bubble');
    //additional
    var checkPositioning = function () {
        var bounding = document.querySelector('.toggletip-bubble').getBoundingClientRect();

        if (bounding.bottom > window.innerHeight) {
            document.querySelector('.toggletip-bubble').classList.add('push-up');
        }

        if (bounding.right > window.innerWidth) {
            document.querySelector('.toggletip-bubble').classList.add('push-right');
        }
    };


    // Get all the toggletip buttons
    var toggletips = document.querySelectorAll('[data-toggletip-content]');

    // Iterate over them
    Array.prototype.forEach.call(toggletips, function (toggletip) {
        // Get the message from the data-content element
        var message = toggletip.getAttribute('data-toggletip-content');

        // Get the live region element
        var liveRegion = toggletip.nextElementSibling;

        // Toggle the message
        toggletip.addEventListener('click', function () {
            liveRegion.innerHTML = '';
            window.setTimeout(function () {
                liveRegion.innerHTML = '<span class="toggletip-bubble">' + message +
                    '</span>';
            }, 100);
            window.setTimeout(function () {
                checkPositioning();
            }, 100);
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (toggletip !== e.target) {
                liveRegion.innerHTML = '';
            }
        });

        // Remove toggletip on ESC
        toggletip.addEventListener('keydown', function (e) {
            if ((e.keyCode || e.which) === 27)
                liveRegion.innerHTML = '';
        });
    });
}());