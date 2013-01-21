$(document).ready(function(){

	FillForm();
	Autosave();

	//----------------------------------------------------------- Close

	$(".block > .close").live("click", function(){
		DeleteBlock($(this));
		return false;
	});

	$(".block > .well > .close").live("click", function(){
		DeleteItem($(this));
		return false;
	});

	//----------------------------------------------------------- Forms

	$("#save").popover();
	$("#reset").popover();

	$("#generator").submit(function(){
		window.location.href = "template.html";
		return false;
	});

	$("#save").click(function(){
		Autosave();
		return false;
	});

	$("#reset").click(function(){
		$(".history").remove();
		$(".generic").remove();
		resume.clear(); 			// clean localStorage
		ScrollToTop();
	});

	//----------------------------------------------------------- History Block

	$("#add-history").click(function(){
		AddHistory();
		Autosave();
		ScrollToBottom();
		return false;
	});

	$(".history .add").live("click", function(){
		AddHistorySection($(this));
		Autosave();
		ScrollToElement($(this).parent(".well"));
		return false;
	});

	//----------------------------------------------------------- Generic Block


	$("#add-generic").click(function(){
		AddGeneric();
		Autosave();
		ScrollToBottom();
		return false;
	});

	$(".generic .add").live("click", function(){
		AddGenericSection($(this));
		Autosave();
		ScrollToElement($(this).parent(".well"));
		return false;
	});
});