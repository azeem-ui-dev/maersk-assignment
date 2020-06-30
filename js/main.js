
var shuffleNsort = (function() {
	
	const initList = [[1, "#6F98A8"], [2,"#2B8EAD"], [3, "#2F454E"], [4,"#2B8EAD"], [5, "#2F454E"], [6, "#BFBFBF"], [7, "#BFBFBF"], [8, "#6F98A8"], [9, "#2F454E"]];
	let temp, j;	
	
	createDom = (list) => {
		let listNode = document.getElementById("numList");
		listNode.innerHTML = '';
		for (let i = 0; i < list.length; i++) {
			let domList = document.createElement("LI");
			let domSpan = document.createElement("SPAN");
			domList.setAttribute("style", "background-color:" + list[i][1] + ";");
			let text = document.createTextNode(list[i][0]);
			domSpan.appendChild(text);
			domList.appendChild(domSpan);
			listNode.appendChild(domList);
		}
	}	
	
	shuffleList = (list) => {
		for (let i = list.length - 1; i > 1; i--) {
			let j = Math.floor(Math.random() * i);
			let temp = list[i];
			list[i] = list[j];
			list[j] = temp;
		}
		createDom(list);
	}
	
	triggerShuffle = () => {
		let list = initList.slice();
		shuffleList(list); 
	}
	
	resetList = () => {
		let list = initList.slice();
		createDom(list);
	}
		
	return {
		shuffleList: triggerShuffle,
		resetList: resetList		
	}
	
})();

shuffleNsort.resetList();

