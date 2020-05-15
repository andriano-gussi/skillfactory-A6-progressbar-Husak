const setBarWidth = (arg) =>
	$('#my-progress-bar').attr('style', `width: ${arg}%`);

let varWidth = 0;

const checkVarWidth = () => {
	if (varWidth > 100) {
		varWidth = 0;
		setBarWidth(varWidth);}
}
const grow1 = () => {
	varWidth++;
	setBarWidth(varWidth);
	checkVarWidth();
	}
const grow3 = () => {
	setBarWidth(varWidth +=3);
	checkVarWidth();
}
const grow7 = () => {
	setBarWidth(varWidth +=7);
	checkVarWidth();
}
function init() {
	$('#grow1').click(grow1);
	$('#grow3').click(grow3);
	$('#grow7').click(grow7);
}
$(document).ready(init);

