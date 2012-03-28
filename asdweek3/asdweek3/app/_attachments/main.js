/*
Nick Weil
ASD
March 2012
Project 3
March 15,2012

*/

    // Save Function
    $('#submit').live('click', function (id) {
	var d = new Date();
	var key = (d.getTime());
	var year = $("#year").val();
	var manufacturer = $("#manufacturer").val();
	var model = $("#model").val();
	var lastOilDate = $("#lastOilDate").val();
	var synthetic;
	if ($('#synthetic').is(":checked")){
	    synthetic = "Yes";
	    }else{
	    synthetic = "No";
	    }
	var oilDuration = $("#oilDuration").val();
	var notes = $("#notes").val();
	var item = 
			[year, 
			 manufacturer, 
			 model, 
			 lastOilDate, 
			 synthetic, 
			 oilDuration, 
			 notes];
	
	//  Saving to the COUCH!!!
	$.couch.db("asdweek3").saveDoc(vehicle, {
		success: function(data) {
			alert("Vehicle saved to Couch Storage!");
		},
		error: function(status) {
			alert("Vehicle information was NOT SAVED! to Couch Storage!");
		}
	});

	
	/*  Local Storage Code
	 localStorage.setItem(key, item);
	location.reload();
	alert("Vehicle Saved!");
	console.log(localStorage);
	*/
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
    };
    
    $('#displayLink').live('click', function () {
	    toggleControls("on");
	var getListdiv = $('#list');
	for (var i = 0, j = localStorage.length; i < j; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage.getItem(key);
	    value = value.split(',');
    
	    $('<div>').attr({
		'class': 'listDiv'
	    }).appendTo('#list');
	    $('<h3>').html(value1).appendTo('.listDiv');
	    $('<p>').html('Year: ' + value0).appendTo('.listDiv');
	    $('<p>').html('Model: ' + value2).appendTo('.listDiv');
	    $('<p>').html('Last Oil Change: ' + value3).appendTo('.listDiv');
	    $('<p>').html('Duration: ' + value4).appendTo('.listDiv');
	    $('<p>').html('Synthetic: ' + value5).appendTo('.listDiv');
	    $('<p>').html('Notes: ' + value6).appendTo('.listDiv');
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
	var year = value0;
	var manufacturer = value1;
	var model = value2;
	var lastOilDate = value3;
	var synthetic;
	var oilDuration = value5;
	var notes = value6;
    
	$('#year').val(year);
	$('#manufacturer').val(manufacturer);
	$('#model').val(model);
	$('#lastOilDate').val(lastOilDate);
	if ($('#synthetic').is(":checked")){
	    synthetic = "Yes";
	    }else{
	    synthetic = "No";
	    }
	    $('#oilDuration').val(oilDuration);
	$('#notes').val(notes);
    
	// show edit item button, hide submit button
	var editButton = $('#edit-item-button').css('display', 'block');
	var subresButtons = $('#submit-reset-buttons').css('display', 'none');
	var itemList = $('#list').css('display', 'none');
    
	// when clicking editItem button
	$('#editItem').live('click', function clickEdit() {
	    var year = $('#year').val();
	    var manufacturer = $('#manufacturer').val();
	    var model = $('#model').val();
	    var lastOilDate = $('#lastOilDate').val();
	    var synthetic;
	    if ($('#synthetic').is(":checked")){
		    synthetic = "Yes";
		    }else{
		    synthetic = "No";
		    }
	    var oilDuration = $('#oilDuration').val();
	    var notes = $('#notes').val();
	    var item = 
	    year, manufacturer, model, lastOilDate, synthetic, oilDuration, notes;
	 
	    localStorage.setItem(itemId, item);           
	    location.reload();
	    alert("Vehicle Edited!");
	    
	});
    
    };
    
    
    // DELETE AN ITEM
    
    var deleteItem = function (id) {
	var ask = confirm("Are you sure you want to delete this Vehicle?");
	if (ask) {
	    localStorage.removeItem(id);
	    window.location.reload();
	} else {
	    alert("Your vehicle was not removed.");
	}
    };

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


// CouchDB code

$('#inspectButton').live('click', function(data){
	$.ajax({
		"url": "_view/recent-items",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function (index, vehicle){
				var id = vehicle.value.id;
				var rev = vehicle.value.rev;
				var year = vehicle.value.year;
				var manufacturer = vehicle.value.manufacturer;
				var model = vehicle.value.model;
				var lastOilDate = vehicle.value.lastOilDate;
				var synthetic = vehicle.value.synthetic;
				var oilDuration = vehicle.value.oilDuration;
				var notes = vehicle.value.notes;
				$("#thecouchdata").append(
						$('<div>').attr ("data-role", "collapsible").attr("data-collapsed", "true" )
						.append($('<h3>').text(model))
						.append($('<p>').text (manufacturer))
						.append($('<p>').text("Year: " + year))
						.append($('<p>').text("Last Oil Change Date: " + lastOilDate))
						.append($('<p>').text("Synthetic: " + synthetic))
						.append($('<p>').text("Oil Duration (miles): " + oilDuration))
						.append($('<p>').text("id: " + id))
						.append($('<a>').attr("href", "cloud_data_page.html").attr("data-role", "button").attr("id", id).attr("data-icon", "gear").text("Edit Vehicle").attr("data-theme", "b")
								.attr("data-inline", "true").attr("class", "smallbutton1"))
						.append($('<a>').attr("href", "#").attr("data-role", "button").attr("id", id).attr("data-role", "smallbutton2"))
						.append($('<p>').text("Notes: " + notes))
								);
					
			});
			//$('#vehiclelist').listview('refresh');
		}
	});
});
	
// Listener for click event of smallbutton1
	$(".smallbutton1").live("click", function(data){
		// $.mobile.changePage('editForm.html', {reloadPage: true},{allowSamePageTransition: true},{transition: 'none'});
		docId = this.id;
		docRev = this.rev;
		cloudVehicleEdit(docId);
	})

//  Week 4 Edit Cloud Data attempt 3
	function cloudVehicleEdit(docId) {
		console.log(docId);
		$.ajax({
			"url": '_view/recent-items?key="'+ docId +'"&include_docs=true',
			"data-type": "json",
			"success": function(vehicleData){
				// console.log(vehicleData);
				// console.log(vehicleData.rows[0]);
				// console.log(vehicleData.rows);
				console.log(vehicleData.rows[0].value);
				var eachVehicleInfo = vehicleData.rows[0].value;
				// console.log(eachVehicleInfo.Model);
				var year = vehicleData.year;
				var manufacturer = vehicleData.manufacturer;
				var model = vehicleData.model;
				var lastOilDate = vehicleData.lastOilDate;
				var synthetic = vehicleData.synthetic;
				var oilDuration = vehicleData.oilDuration;
				var notes = vehicleData.notes;
				var iD = vehicleData.id;
				var rev = vehicleData.rev;
				// console.log(iD);
				// console.log(rev);

//				Populate the form with data from the Cloud
				function populateForm(){
					$("#id2").val(iD);
					$("#rev2").val(rev);
					$("#year").val(year);
					$("#manufacturer").val(manufacturer);
					$("#model").val(model);
					$("#lastOilDate").val(lastOilDate);
					$("#synthetic").val(synthetic);
					$("#oilDuration").val(oilDuration);
					$("#notes").val(notes);
				};
				populateForm();
			},
// If an error then perform this:
			"error": function () {
				console.log("Failed to update Vehicle");
			}
		})
	};

//WEEK 4 STUFF
$('#thecouchdataDisplay').live("pageshow", function () {
	$.couch.db("asdweek3").view("asdweek3", {
		success: function(data) {
			console.log(data);
			$('#thecouchdataItems').empty();
			$.each(data.rows, function (index, vehicle) {
				var eachCar = (value.value || value.doc);
				$('#thecouchdataItems').append(
						$('<li>').append(
								$('<a>')
								.attr("href", "cloud_data_page.html")
								.text(item.model)
						)
				);
			});
			$('#thecouchdataItems').listview('refresh');
		}
	});
});
/*
//EXTRACT DATA FROM CLOUD ATTEMPT 1 from the videos!
var urlVars = function () {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	console.log(urlParts);
	var urlPairs = urlParts[1].split('&');
	console.log(urlPairs);
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeComponent(keyValue[1]);
		urlValues[key] = value;
	}
	console.log(urlValues);
	return urlValues;
};

//  EXTRACT DATA FROM CLOUD!
$('#displayCloudData').live("pageshow", function () {
	var cloudData = urlVars()["vehicle"];
	var urlData = $(this).data("url");
	console.log(cloudData);
	$.couch.db("asdweek3").view("asdweek3/TO BE NAMED", {
		key: "manufacturer:" + manufacturer
	});
	
});
*/
