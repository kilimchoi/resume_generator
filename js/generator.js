function ScrollToTop()
{
	$('html, body').animate({ scrollTop: 0 }, 1000);
}

function ScrollToBottom()
{
	$('html, body').animate({ scrollTop: $(document).height() }, 1000);
}

function ScrollToElement(e)
{
	var outerWellPos = $(e).position().top + $(e).height();			// location of bottom of outer well
	var wellHeight = e.children(".well").last().outerHeight();		// - height of new inner well
	var btnHeight = e.children(".add").outerHeight();				// - height of add button

	$('html, body').animate({ scrollTop: outerWellPos - wellHeight - btnHeight - 20}, 1000); // 20px for margin between wells
}

function DeleteBlock(e)
{
	var blockCounter = 1;

	e.parent(".block").siblings(".block").each(function(){
		$(this).attr("id", "Block" + blockCounter);
		blockCounter++;
	});

	e.parent(".block").slideUp("fast", function(){
		e.parent(".block").remove();
	});

	Autosave();
}

function DeleteItem(e)
{
	var itemCounter = 1;

	e.parent(".item").siblings(".item").each(function(){

		$(this).find("input, select, textarea").each(function(){
			var name = $(this).attr("name");
			$(this).attr("name", name.substr(0, name.length - 1) + itemCounter);
		});

		itemCounter++;
	});	

	e.parent(".item").slideUp("fast", function(){
		e.parent(".item").remove();
	});

	Autosave();
}

function AddHistory()
{
	var id = $("#canvas > .well").length - 1;
	var history = '';

	history += '<div class="well history block" id="Block' + id + '">';
	history += '<input type="hidden" name="type" value="history"/>';
	history += '<input type="hidden" name="items" value="generic"/>';
		history += '<a href="#" class="close" title="Delete this section">&times;</a>';
		history += '<h1>History Block</h1>';
		history += '<div class="well">';
			history += '<input type="text" name="heading" placeholder="History Block Name (e.g. Past Work)" class="header big"/>';
		history += '</div>';
		history += '<div class="well item">';
			history += '<p>';
				history += '<input type="text" name="Start1" placeholder="Start" class="padright"/>';
				history += '<input type="text" name="End1" placeholder="End"/>';
			history += '</p>';
			history += '<p>';
				history += '<input type="text" name="Subheading1" placeholder="Sub Heading" class="big"/>';
			history += '</p>';
			history += '<p>';
				history += '<textarea name="Text1" placeholder="Write something interesting here (each new line will become a bullet)" class="big"></textarea>';
			history += '</p>';
		history += '</div>';
		history += '<a href="#" class="add btn" title="Add a new item to this block">Add Another Item</a>';
	history += '</div>';

	$("#canvas").append(history);
	Autosave();
}

function AddGeneric()
{
	var id = $("#canvas > .well").length - 1;
	var generic = '';

	generic += '<div class="well generic block" id="Block' + id + '">';
	generic += '<input type="hidden" name="type" value="generic"/>';
	generic += '<input type="hidden" name="items" value="generic"/>';
		generic += '<a href="#" class="close" title="Delete this section">&times;</a>';
		generic += '<h1>Generic Block</h1>';
		generic += '<div class="well">';
			generic += '<p><input type="text" name="heading" placeholder="Generic Block Name (e.g. Skills)" class="header big"/></p>';
		generic += '</div>';
		generic += '<div class="well item">';
			generic += '<p>';
				generic += '<input type="text" name="Subheading1" placeholder="Sub Heading" class="big"/>';
			generic += '</p>';
			generic += '<p>';
				generic += '<textarea name="Text1" placeholder="Write something interesting here (each new line will become a bullet)" class="big"></textarea>';
			generic += '</p>';
		generic += '</div>';
		generic += '<a href="#" class="add btn" title="Add a new item to this block">Add Another Item</a>';
	generic += '</div>';

	$("#canvas").append(generic);
	Autosave();
}

function AddHistorySection(e)
{
	var id = e.parent(".well").children(".well").length;
	var history = '';

	history += '<div class="well item">';
		history += '<a href="#" class="close" title="Delete this section">&times;</a>';
		history += '<p>';
			history += '<input type="text" name="Start' + id + '" class="padright" placeholder="Start"/>';
			history += '<input type="text" name="End' + id + '" placeholder="End"/>';
		history += '</p>';
		history += '<p>';
			history += '<input type="text" name="Subheading' + id + '" placeholder="Sub Heading" class="big"/>';
		history += '</p>';
		history += '<p>';
			history += '<textarea name="Text' + id + '" placeholder="Write something interesting here (each new line will become a bullet)" class="big"></textarea>';
		history += '</p>';
	history += '</div>';

	e.before(history);
	Autosave();
}

function AddGenericSection(e)
{
	var id = e.parent(".well").children(".well").length;
	var generic = '';

	generic += '<div class="well item">';
		generic += '<a href="#" class="close" title="Delete this section">&times;</a>';
		generic += '<p>';
			generic += '<input type="text" name="Subheading' + id + '" placeholder="Sub Heading" class="big"/>';
		generic += '</p>';
		generic += '<p>';
			generic += '<textarea name="Text' + id + '" placeholder="Write something interesting here (each new line will become a bullet)" class="big"></textarea>';
		generic += '</p>';
	generic += '</div>';

	e.before(generic);
	Autosave();
}