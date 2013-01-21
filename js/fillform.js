function FillForm()
{
	var BasicInfo = $.parseJSON(resume.getItem("BasicInfo"));
	var ContactInfo = $.parseJSON(resume.getItem("ContactInfo"));
	var blocks = resume.getItem("Blocks");

	if (blocks !== null)
	{
		$.each(BasicInfo, function(name, val){
			$("#BasicInfo").find('input[name="' + name + '"]').val(val);
		});

		$.each(ContactInfo, function(name, val){
			$("#ContactInfo").find('input[name="' + name + '"]').val(val);
		});

		for (b = 1; b <= blocks; b++)
		{
			var newBlock;
			var newBlockDetails = $.parseJSON(resume.getItem("Block" + b));
			var items = newBlockDetails.items - 1;

			if (newBlockDetails.type == "history") AddHistory();
			else if (newBlockDetails.type == "generic") AddGeneric();

			newBlock = $("#canvas > .well:last-child");

			for (i = 1; i <= items; i++)
			{
				if (newBlockDetails.type == "history") AddHistorySection(newBlock.find(".add"));
				else if (newBlockDetails.type == "generic") AddGenericSection(newBlock.find(".add"));
			}

			$.each(newBlockDetails, function(name, val){
				newBlock.find('input[name="' + name + '"]').val(val);
			});
		}
	}
}