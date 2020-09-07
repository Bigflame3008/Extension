





let input = document.getElementById('sb1');
// input.addEventListener("input", function(e){
	
// 	let search_item=e.target.value;
// 	document.getElementById("ok").innerHTML = search_item;
	



// })

input.addEventListener("input", function(e){
	
	search_item=e.target.value;
	/*document.getElementById("ok").innerHTML = search_item;*/
	



})


essai= document.getElementById("test")

let click = document.getElementById("sb2");
click.addEventListener("click" , function(){
	document.getElementById("ok").innerHTML = search_item;
	document.getElementById("firstHeading").innerHTML = "hey"
})

chrome.runtime.onMessage.addListener(function(message) {
  if (message == 'button_clicked') {
    document.getElementById("firstHeading").innerHTML = "hey"
  }
}); 