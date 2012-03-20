
function(doc) {
	  if (doc._id.substr(0,7) === "vehicle") {
	    emit(doc._id.substr(7), {
	     "year": doc.year,
	     "manufacturer": doc.manufacturer,
	     "model": doc.model,
	     "lastOilDate": doc.groups,
	     "synthetic": doc.lastOilDate,
	     "oilDuration": doc.oilDuration,
	     "notes": doc.notes
	    });
	  }
	};