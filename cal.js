
/** 
 * Javascript ical Parser
 * Proof of concept method of reading icalendar (.ics) files with javascript.
 *
 * @author: Carl Saggs
 * @source: https://github.com/thybag/
 * @version: 0.2
 */
function ical_parser(feed_url, callback){
	//store of unproccesed data.
	this.raw_data = null;
	//Store of proccessed data.
	this.events = [];
	
	/**
	 * loadFile
	 * Using AJAX to load the requested .ics file, passing it to the callback when completed.
	 * @param url URL of .ics file
	 * @param callback Function to call on completion.
	 */
	this.loadFile = function(url, callback){
		//Create request object
		try {xmlhttp = window.XMLHttpRequest?new XMLHttpRequest(): new ActiveXObject("Microsoft.XMLHTTP");}  catch (e) { }
		//Grab file
		xmlhttp.onreadystatechange = function(){
			if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
				//On success, run callback.
				callback(xmlhttp.responseText);
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	}
	
	/**
	 * makeDate
	 * Convert the dateformat used by ICalendar in to one more suitable for javascript.
	 * @param String ical_date 
	 * @return dt object, includes javascript Date + day name, hour/minutes/day/month/year etc.
	 */
	this.makeDate = function(ical_date){
		//break date apart
		var dt =  {
			year: ical_date.substr(0,4),
			month: ical_date.substr(4,2),
			day: ical_date.substr(6,2),
			hour: ical_date.substr(9,2),
			minute: ical_date.substr(11,2)
		}
		//Create JS date (months start at 0 in JS - don't ask)
		dt.date = new Date(dt.year, (dt.month-1), dt.day, dt.hour, dt.minute);
		//Get the full name of the given day
		dt.dayname =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dt.date.getDay()];
		
		return dt;
	}
	
	/**
	 * parseICAL
	 * Convert the ICAL format in to a number of javascript objects (Each representing a date)
	 *
	 * @param data Raw ICAL data
	 */
	this.parseICAL = function(data){
		//Ensure cal is empty
		this.events = [];
		
		//Clean string and split the file so we can handle it (line by line)
		cal_array = data.replace(new RegExp( "\\r", "g" ), "").split("\n");
		
		//Keep track of when we are activly parsing an event
		var in_event = false;
		//Use as a holder for the current event being proccessed.
		var cur_event = null;
		for(var i=0;i<cal_array.length;i++){
			ln = cal_array[i];
			//If we encounted a new Event, create a blank event object + set in event options.
			if(!in_event && ln == 'BEGIN:VEVENT'){
				in_event = true;
				cur_event = {};
			}
			//If we encounter end event, complete the object and add it to our events array then clear it for reuse.
			if(in_event && ln == 'END:VEVENT'){
				in_event = false;
				this.events.push(cur_event);
				cur_event = null;
			}
			//If we are in an event
			if(in_event){
				//Split the item based on the first ":"
				idx = ln.indexOf(':');
				//Apply trimming to values to reduce risks of badly formatted ical files.
				type = ln.substr(0,idx).replace(/^\s\s*/, '').replace(/\s\s*$/, '');//Trim
				val = ln.substr(idx+1,ln.length-(idx+1)).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				
				//If the type is a start date, proccess it and store details
				if(type =='DTSTART'){
					dt = this.makeDate(val);
					val = dt.date;
					//These are helpful for display
					cur_event.start_time = dt.hour+':'+dt.minute;
					cur_event.start_date = dt.day+'/'+dt.month+'/'+dt.year;
					cur_event.day = dt.dayname;
				}
				//If the type is an end date, do the same as above
				if(type =='DTEND'){
					dt = this.makeDate(val);
					val = dt.date;
					//These are helpful for display
					cur_event.end_time = dt.hour+':'+dt.minute;
					cur_event.end_date = dt.day+'/'+dt.month+'/'+dt.year;
					cur_event.day = dt.dayname;
				}
				//Convert timestamp
				if(type =='DTSTAMP') val = this.makeDate(val).date;
				
				//Add the value to our event object.
				cur_event[type] = val;
			}
		}
		//Run this to finish proccessing our Events.
		this.complete();
	}
	/**
	 * complete
	 * Sort all events in to a sensible order and run the original callback
	 */
	this.complete = function(){
		//Sort the data so its in date order.
		this.events.sort(function(a,b){
			return a.DTSTART-b.DTSTART;
		});
		//Run callback method, if was defined. (return self)
		if(typeof callback == 'function') callback(this);
	}
	/**
	 * getEvents
	 * return all events found in the ical file.
	 *
	 * @return list of events objects
	 */
	this.getEvents = function(){
		return this.events;
	}
	
	/**
	 * getFutureEvents
	 * return all events sheduled to take place after the current date.
	 *
	 * @return list of events objects
	 */
	this.getFutureEvents = function(){
		var future_events = [], current_date = new Date();
		
		this.events.forEach(function(itm){
			//If the event starts after the current time, add it to the array to return.
			if(itm.DTSTART > current_date) future_events.push(itm);
		});
		return future_events;
	}
  
  this.getPastEvents = function(){
		var past_events = [], current_date = new Date();
		
		this.events.forEach(function(itm){
			if(itm.DTSTART < current_date) past_events.push(itm);
		});
		return past_events;
	}
	
	/**
	 * load
	 * load a new ICAL file.
	 *
	 * @param ical file url
	 */
	this.load = function(ical_file){
		var tmp_this = this;
		this.raw_data = null;
		this.loadFile(ical_file, function(data){
			//if the file loads, store the data and invoke the parser
			tmp_this.raw_data = data;
			tmp_this.parseICAL(data);
		});
	}
	
	//Store this so we can use it in the callback from the load function.
	var tmp_this = this;
	//Store the feed url
	this.feed_url = feed_url;
	//Load the file
	this.load(this.feed_url);
}


var nextGame = function() {
	new ical_parser("ars.ics", function(cal){
		events = cal.getPastEvents();
		//do something with the events.
		var event = events[events.length - 1];
		var gameDay = event.DTSTART;

// JavaScript program to illustrate 
    // calculation of no. of days between two date 
  
    // To set two dates to two variables
    var date1 = new Date();
var date2 = gameDay;
  
// To calculate the time difference of two dates
var Difference_In_Time = date1.getTime() - date2.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var days = Math.round(Difference_In_Days);

if (days < 2) {
  $("#day").html("day")
}
    
$("#nextgame")
        .html(days);


 
	});
};

// Get the new one.
nextGame();