$("#addItem").submit( function(event){
	event.preventDefault();

	if ($("#tfItem").val() != "") {
		var newItem = ($(`
			<li class="item"><p> 
			${$('#tfItem').val()}</p><div>
			<button class="checkBtn">check</button>
			<button class="deleteBtn">delete</button>
			</div>
			</li>`));

		$(newItem).on("click", "div > .checkBtn", function(event){
			var item = $(event.delegateTarget);
			if(item.hasClass("checked")) {
				$(event.delegateTarget).removeClass("checked");
			}
			else {
				$(event.delegateTarget).addClass("checked");
			}
		});

		$(newItem).on("click", "div > .deleteBtn", function(event){
			$(event.delegateTarget).remove();
		});

		
		$("#listItems").append(newItem);
		$("#tfItem").val('');	
	}

	
});
