const container = d3.select('.full-scroll');
const stepSel = container.selectAll('.step');

function updateChart(index) {
	const sel = container.select(`[data-index='${index}']`);
	const pic = sel.attr('data-pic');
	document.getElementById('center').src=pic;
  }
  
  function init() {  
	enterView({
	  selector: stepSel.nodes(),
	  offset: 0,
	  enter: el => {
		const index = +d3.select(el).attr('data-index');
		updateChart(index);
	  },
	  exit: el => {
		let index = +d3.select(el).attr('data-index');
		index = Math.max(0, index - 1);
		updateChart(index);
	  } });
  }
  
  init();

  