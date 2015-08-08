var BG = {
  ar: 600 / 390,
  width: 0,
  height: 0,
  minWidth: 1000,
  element: null,
  resize: function() {
    this.width = Math.max($(window).width(), this.minWidth);
    this.height = this.width / this.ar;
    var marginTop = (this.height * -0.5) + (this.height * -0.20);
    if (this.height < 1200) {
      marginTop = (this.height * -0.5) + (this.height * -0.05);
    }
    if (this.height < 1000) {
      marginTop = (this.height * -0.5) + (this.height * -0.01);
    }
    this.element.css({
      width: this.width,
      height: this.height,
      marginTop: marginTop,
      marginLeft: this.width * -0.5
    });
  },
  isInitialized: false
};
$(document).ready(function() {
  BG.element = $('#bg');
  $(window).on('load resize', function() {
    BG.resize();
    if (!BG.isInitialized) {
      BG.element.css({
        visibility: 'visible'
      });
    }
  });
});
