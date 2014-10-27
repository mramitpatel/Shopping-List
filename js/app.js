
$(document).ready(function(){
	$("#add-value").click(function(){
		var listItem = $("#txt-list-input").val();
		if (listItem.length > 2){
			$(".list").append('<li><input id="cb21" name="cb21" type="checkbox"><label for="cb21">'+ listItem +'</label><span class="delete">Delete</span></li>');
				return false;
				$("#txt-list-input").val("");
		} else {
			alert("need more characters yo");
		}
	});


	$(".delete").click(function(){
	  $(this).closest("li").remove();

	});
});