var resume = window.localStorage

function Autosave()
{
	resume.clear();

	var auto = setTimeout("Autosave()", 10000);
	var blocksCount = 0;

	Update($("#BasicInfo"), "BasicInfo");
	Update($("#ContactInfo"), "ContactInfo");

	$(".block").each(function(){
		$(this).find(".items").val($(this).children(".well").length - 1); // length includes header
		Update($(this), $(this).attr("id"));
		blocksCount++;
	});

	resume.setItem("Blocks", blocksCount);
}

function Update(e, name)
{
	var info = {};
	var fields = e.find("input, select, textarea");

	fields.each(function(){
		info[this.name] = $(this).val();
	});

	resume.setItem(name, JSON.stringify(info));
}