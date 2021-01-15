(function () {
    var $buttons = document.querySelectorAll('#orbit .circle button');
    var $backButton = document.querySelector('.back-arrow');
    var $orbit = document.querySelector('#orbit');

    $buttons.forEach(function ($btn) {
        $btn.addEventListener('click', function (e) {
            if(!$orbit.classList.contains('zoomed')) {
                var orbitWidth = $orbit.offsetWidth;
                var orbitHeight = $orbit.offsetHeight;
                var scale = 3;
                var rect = e.target.getBoundingClientRect();
                var rectOrbit = $orbit.getBoundingClientRect();
                var x = rect.left + 28;
                var y = rect.top + 28;
                var xOrbit = rectOrbit.left;
                var yOrbit = rectOrbit.top;
    
                var calculatedX = (orbitWidth / 2) - (x - xOrbit);
                var calculatedY = (orbitHeight / 2) - (y - yOrbit);
    
                $orbit.setAttribute('style', 'transform: scale(' + scale + ') translate( ' + calculatedX + 'px , ' + calculatedY + 'px ); transform-origin: ' + orbitWidth / 2 + 'px ' + orbitHeight / 2 + 'px 0px;')
                $backButton.style.display = 'block';
                $orbit.classList.add('zoomed');
            } else {
                var currentSelected = e.target.parentElement.classList[1];
                e.target.classList.add('selected')
                hideCircles(currentSelected)
                showSectionContent(currentSelected)
            }
        });
    })

    $backButton.addEventListener('click', function() {
        var $sections = document.querySelectorAll('.sections-container section');
        $orbit.setAttribute('style', '')
        $backButton.style.display = 'none';
        $orbit.classList.remove('zoomed');
        
        document.querySelector('.selected').classList.remove('selected');
        document.querySelectorAll('.fadeOut').forEach(function($item) {
            $item.classList.remove('fadeOut')
        })

        document.querySelector('.sections-wrapper').style.display = 'none';

        $sections.forEach(function($section) {
            $section.style.display = 'none';
        })
    });
})();

function hideCircles(current) {
    var $circles = document.querySelectorAll('.circle');
    var $logo = document.querySelector('.logo');

    $logo.classList.add('fadeOut');
    $circles.forEach(function($circle) {
        if (!$circle.classList.contains(current)) {
            $circle.classList.add('fadeOut');
        }
    })
}

function showSectionContent(current) {
    var $wrapper = document.querySelector('.sections-wrapper');
    var $sections = document.querySelectorAll('.sections-container section');

    $wrapper.style.display = 'flex';

    $sections.forEach(function($section) {
        if($section.id === current) {
            $section.style.display = 'block';
        }
    });
}