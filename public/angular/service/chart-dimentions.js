angular.module('app')
	.factory('ChartDimentions', [function() {

        var Chart = {
          settings: {
            small: {
							scale: 1,
              fontSize: 12,
							headingSize: 16,
							axisLine: 6,
							axisTick: 10,
							splitLine: 15
            },
            medium: {
							scale: .95,
              fontSize: 16,
							headingSize: 20,
							axisLine: 10,
							axisTick: 18,
							splitLine: 25
            },
            large: {
							scale: .60,
              fontSize: 20,
							headingSize: 24,
							axisLine: 12,
							axisTick: 22,
							splitLine: 28
            }
          },
					width: 200,
					height: 200,
          size: 'medium',
          init: function() {
						this.height = $(window).height();
						this.width = $(window).width();
						//console.log(this.width);
						if(this.width < 450) {
							this.size = 'small';
						} else if(this.width < 850) {
							this.size = 'medium';
						} else {
							this.size = 'large';
						}
						//console.log(this.size);
          },
					calculateFit: function($chart) {
						this.width = $chart.width();
            this.height = $chart.closest('.section').height();
						return {
							size: this.width < this.height ? (this.width * .8): (this.height * .6),
							width: this.width < 850 ? this.width : 850,
							height: this.height *  .5
						};
					},
					graphSize: function() {
						var size = this.width < this.height ? this.width: this.height
						return size * this.settings[this.size].scale;
					},
          find: function(option) {
            return this.settings[this.size][option];
          }
        };

	      return Chart;
	  }]);
