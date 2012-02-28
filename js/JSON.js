// MiU (Mobile Interface Usability)
// Nick Weil
// January 2012
// Project 3
// January 19, 2012

// JSON Object Which will auto populate local storage.ye
    function autoFillData() {
        // alert ("Filling JSON Data NOW!");
        var json = {
            "vehicle1": {
                "year": ["Car Year:", 2010],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Impala"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-1-15"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "White car"]
            },
            "vehicle2": {
                "year": ["Car Year:", 2010],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Caprice"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2010-12-20"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "White car"]
            },
            "vehicle6": {
                "year": ["Car Year:", 2008],
                "manufacturer": ["Manufacturer:", "Acura"],
                "model": ["Model:", "Integra"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-11-1"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Red"]
            },
            "vehicle16": {
                "year": ["Car Year:", 2008],
                "manufacturer": ["Manufacturer:", "Ford"],
                "model": ["Model:", "Crown Victoria"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-10-1"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Squad Car"]
            },
            "vehicle4": {
                "year": ["Car Year:", 2002],
                "manufacturer": ["Manufacturer:", "BMW"],
                "model": ["Model:", "M3"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-11-15"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 6000],
                "notes": ["Notes:", "Beemer"]
            },
            "vehicle3": {
                "year": ["Car Year:", 2002],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Silverado"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-11-15"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Truck"]
            },
            "vehicle9": {
                "year": ["Car Year:", 2002],
                "manufacturer": ["Manufacturer:", "Dodge"],
                "model": ["Model:", "Caravan"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2010-12-31"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Town & Country"]
            },
            "vehicle19": {
                "year": ["Car Year:", 2002],
                "manufacturer": ["Manufacturer:", "Dodge"],
                "model": ["Model:", "Charger"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2000-12-31"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Black"]
            },
            "vehicle14": {
                "year": ["Car Year:", 2000],
                "manufacturer": ["Manufacturer:", "BMW"],
                "model": ["Model:", "M3"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-4-15"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 6000],
                "notes": ["Notes:", "Beemer 2"]
            },
            "vehicle18": {
                "year": ["Car Year:", 1997],
                "manufacturer": ["Manufacturer:", "BMW"],
                "model": ["Model:", "M6"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2010-2-20"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Nurburgring"]
            },
            "vehicle8": {
                "year": ["Car Year:", 1992],
                "manufacturer": ["Manufacturer:", "BMW"],
                "model": ["Model:", "318i"],
                "engine": ["Engine:", "4 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2010-5-21"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "German"]
            },
            "vehicle13": {
                "year": ["Car Year:", 1985],
                "manufacturer": ["Manufacturer:", "Ford"],
                "model": ["Model:", "Escort"],
                "engine": ["Engine:", "4 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2010-3-15"],
                "synthetic": ["Synthetic:", "Yes"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Ugly"]
            },
            "vehicle17": {
                "year": ["Car Year:", 1979],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Caprice"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2001-11-15"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "Police Car"]
            },
            "vehicle2": {
                "year": ["Car Year:", 1978],
                "manufacturer": ["Manufacturer:", "Ford"],
                "model": ["Model:", "Fairmont"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2005-06-29"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Lame Car"]
            },
            "vehicle7": {
                "year": ["Car Year:", 1978],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Malibu"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2001-11-15"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "First Car"]
            },
            "vehicle12": {
                "year": ["Car Year:", 1978],
                "manufacturer": ["Manufacturer:", "Ford"],
                "model": ["Model:", "Fairmont"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2007-08-29"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "POS"]
            },
            "vehicle11": {
                "year": ["Car Year:", 1974],
                "manufacturer": ["Manufacturer:", "Chevy"],
                "model": ["Model:", "Camaro"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2008-11-29"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "Poser car"]
            },
            "vehicle20": {
                "year": ["Car Year:", 1974],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Corvette"],
                "engine": ["Engine:", "8 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-12-25"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "Corvette"]
            },
            "vehicle1": {
                "year": ["Car Year:", 1970],
                "manufacturer": ["Manufacturer:", "Dodge"],
                "model": ["Model:", "Challenger"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2008-11-29"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 5000],
                "notes": ["Notes:", "Testing JSON"]
            },
            "vehicle10": {
                "year": ["Car Year:", 1964],
                "manufacturer": ["Manufacturer:", "Chevrolet"],
                "model": ["Model:", "Corvette"],
                "engine": ["Engine:", "6 cyl."],
                "lastOilDate": ["Date of Last Oil Change:", "2011-12-25"],
                "synthetic": ["Synthetic:", "No"],
                "oilDuration": ["Desired Oil Change Duration:", 3000],
                "notes": ["Notes:", "Little Red Corvette"]
            }
        }
        //  Store JSON OBject into Local Storage
        for (var n in json) {
            var id                  = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }
    
autoFillData();