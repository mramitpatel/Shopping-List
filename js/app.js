

$(document).ready(function(){
	$("#add-value").click(function(){
		var listItem = $("#txt-list-input").val();
			$("#txt-list-input").val(" ");
		if (listItem.length > 2){
			$(".list").append('<li><input id="cb1" name="cb1" type="checkbox"><label for="cb1">'+ listItem +'</label><span class="delete">Delete</span></li>');
				return false;
		} else {
			alert("need more characters yo");
		}
	});
});


$(".list").on('click', '.delete', function(){
	$(this).closest("li").remove();
});	

$(".list").on('click', 'label', function(){
	$(this).toggleClass("strike");
})