$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['intro', 'anggrafadhil' , 'story', 'engagement', 'invitation'],
		navigation: true,
		navigationPosition: 'right',
		// navigationTooltips: ['Intro', 'Truly Unexpected'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 0,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: false,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        responsiveWidth: 1024,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,


		//events
		onLeave: function(index, nextIndex, direction){

        },
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

        },
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

        }
	});
});

$(window).load(function()
{
    setTimeout(function(){
        $('.loading_section').removeClass('active');
    }, 1100);
});