/*
Nick Weil
ASD
March 2012
Project 1
March 2,2012

*/




    // Save Function
    $('#submit').live('click', function saveData(id) {
	var d = new Date();
	var key = (d.getTime());
	var year = $("#year").val();
	var manufacturer = $("#manufacturer").val();
	var model = $("#model").val();
	var lastOilDate = $("#lastOilDate").val();
	var synthetic;
	if ($('#synthetic').is(":checked")){
	    synthetic = "Yes"
	    }else{
	    synthetic = "No"
	    }
	var oilDuration = $("#oilDuration").val();
	var notes = $("#notes").val();
	var item = [
	year, manufacturer, model, lastOilDate, synthetic, oilDuration, notes];
    
	localStorage.setItem(key, item);
	location.reload();
	alert("Vehicle Saved!");
	console.log(localStorage);
    });	
    
    var toggleControls = function (n) {
	switch (n) {
	case "on":
	    $('#addItem').css('display', 'none');
	    break;
	case "off":
	    $('#addItem').css('display', 'block');
	    $('#list').css('display', 'none');
	    break;
	default:
	    return false;
	}
    }
    
    $('#displayLink').live('click', function getData() {
	    toggleControls("on");
	var getListdiv = $('#list')[0];
	for (var i = 0, j = localStorage.length; i < j; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage.getItem(key);
	    value = value.split(',');
    
	    $('<div>').attr({
		'class': 'listDiv'
	    }).appendTo('#list');
	    $('<h3>').html(value[1]).appendTo('.listDiv');
	    $('<p>').html('Year: ' + value[0]).appendTo('.listDiv');
	    $('<p>').html('Model: ' + value[2]).appendTo('.listDiv');
	    $('<p>').html('Last Oil Change: ' + value[3]).appendTo('.listDiv');
	    $('<p>').html('Duration: ' + value[4]).appendTo('.listDiv');
	    $('<p>').html('Synthetic: ' + value[5]).appendTo('.listDiv');
	    $('<p>').html('Notes: ' + value[6]).appendTo('.listDiv');
	    $('<p>').html($('<a>').attr({
		'href': '#',
		'onclick': 'deleteItem(' + key + ');'
	    }).html('Delete Vehicle')).appendTo('.listDiv');
	    $('<p>').html($('<a>').attr({
		'href': '#',
		'onclick': 'editItem(' + key + ');'
	    }).html('Edit Vehicle')).appendTo('.listDiv');
    
	}
    });
    
    
    
    // EDIT MY DATA!!
    
    var editItem = function (id) {
	var itemId = id;
	    var value = localStorage.getItem(itemId);
	    value = value.split(',');
	    toggleControls("off");
	var year = value[0];
	var manufacturer = value[1];
	var model = value[2];
	var lastOilDate = value[3];
	var synthetic;
	var oilDuration = value[5];
	var notes = value[6];
    
	$('#year').val(year);
	$('#manufacturer').val(manufacturer);
	$('#model').val(model);
	$('#lastOilDate').val(lastOilDate);
	if ($('#synthetic').is(":checked")){
	    synthetic = "Yes"
	    }else{
	    synthetic = "No"
	    }
	    $('#oilDuration').val(oilDuration);
	$('#notes').val(notes);
    
	// show edit item button, hide submit button
	var editButton = $('#edit-item-button').css('display', 'block');
	var subresButtons = $('#submit-reset-buttons').css('display', 'none');
	var itemList = $('#list').css('display', 'none');
    
	// when clicking editItem button
	$('#edit-item').live('click', function clickEdit() {
	    var year = $('#year').val();
	    var manufacturer = $('#manufacturer').val();
	    var model = $('#model').val();
	    var lastOilDate = $('#lastOilDate').val();
	    var synthetic;
	    if ($('#synthetic').is(":checked")){
		    synthetic = "Yes"
		    }else{
		    synthetic = "No"
		    }
	    var oilDuration = $('#oilDuration').val();
	    var notes = $('#notes').val();
	    var item = [
	    year, manufacturer, model, lastOilDate, synthetic, oilDuration, notes];
	 
	    localStorage.setItem(itemId, item);           
	    location.reload();
	    alert("Vehicle Edited!");
	    
	});
    
    }
    
    
    // DELETE AN ITEM
    
    var deleteItem = function (id) {
	var ask = confirm("Are you sure you want to delete this Vehicle?");
	if (ask) {
	    localStorage.removeItem(id);
	    window.location.reload();
	} else {
	    alert("Your vehicle was not removed.");
	}
    }
    //  CLEAR LOCAL STORAGE 
    function clearLocal() {
	if (localStorage.length === 0) {
	    alert("There is no data to clear.");
	} else {
	    localStorage.clear();
	    alert("All vehicles have been deleted");
	    window.location.reload();
	    return false;
	}
     }