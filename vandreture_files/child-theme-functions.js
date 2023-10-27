function Slider() {
    var _self = this;

    this.currSlide = 1;
    this.slideWidth = 0;
    this.slideCount = 0;
    this.auto = true;
    this.speed = 8000;
    this.interval = null;
    this.views = {
        slider:             jQuery(".cm-slider"),
        sliderContainer:    jQuery(".cm-slider-container"),
        sliderPaginator:    jQuery(".cm-paginator"),
        slide:              jQuery(".cm-slide")
    };

    this.init = function() {
        if(this.views.slide.size() > 0) {
            var slide, slideWidth, slideHeight, maxHeight = 0;

            this.views.slide.each(function (index) {
                slide = jQuery(this);
                slideWidth = slide.outerWidth();
                slideHeight = slide.outerHeight(true);

                // slide.css("height", slideHeight);
                slide.css("width", slideWidth);

                if (maxHeight < slideHeight) {
                    maxHeight = slideHeight;
                }

                if (_self.slideWidth === 0) {
                    _self.views.slider.css("width", slide.outerWidth());
                    _self.slideWidth = slideWidth;
                }
            });

            jQuery("<div class='cm-slider'><div class='cm-slider-container'></div><div class='cm-paginator'></div></div>").insertBefore(this.views.slide.first());

            this.views.slider = jQuery(".cm-slider");
            this.views.sliderContainer = jQuery(".cm-slider-container");
            this.views.sliderPaginator = jQuery(".cm-paginator");

            this.slideCount = this.views.slide.size();

            for (var i = 0; i < this.slideCount; i++) {
                if (i === 0) {
                    jQuery(".cm-paginator").append("<a href='#' class='active'></a>");
                } else {
                    jQuery(".cm-paginator").append("<a href='#'></a>");
                }
            }

            this.views.sliderContainer.prepend(this.views.slide);

            this.views.sliderPaginator.find("a").click(this.clickPaginator);

            if(this.auto) {
                this.showAutoSlide();
            }
        }
    };

    this.showSlide = function(num) {
        if(num <= _self.slideCount) {
            _self.views.sliderContainer.css('margin-left', (num - 1) * _self.slideWidth * -1);
            _self.currSlide = num;

            _self.views.sliderPaginator.find("a").removeClass("active");
            _self.views.sliderPaginator.find("a").eq(num - 1).addClass("active");
        }
    };

    this.showAutoSlide = function() {
        this.interval = window.setInterval(function(){
            if(_self.currSlide < _self.slideCount) {
                _self.currSlide++;
            } else {
                _self.currSlide = 1;
            }

            _self.showSlide(_self.currSlide);
        }, _self.speed);
    };

    this.clickPaginator = function(event) {
        event.preventDefault();

        var _this = jQuery(this);
        _self.showSlide(_this.index() + 1);

        //if auto mode is on, reset it
        if(_self.auto) {
            window.clearInterval(_self.interval);
            _self.showAutoSlide();
        }
    };
}


jQuery(document).ready(function() {

    window.slider = new Slider();
    slider.init();
});
