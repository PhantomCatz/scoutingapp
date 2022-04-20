var config_data = `
{
  "title":"Phantom Catz Scouting App 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":7,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022carv",
	"size":7,
        "required":"true",
	"disabled":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"false"
      }
    },
    "auton": {
	  "Taxi": {
		  "code":"tx",
		  "title":"Taxi",
		  "type":"radio",
		  "choices":{
			  "0":"No<br>",
			  "2":"Yes"
		  },
		  "defaultValue":"0"
	  },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempts": {
        "code":"aca",
        "title": "Upper Cargo Attempts",
        "type":"counter"
      },
	  "Lower Cargo Attempts": {
        "code":"ala",
        "title": "Lower Cargo Attempsts",
        "type":"counter"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Attempts": {
        "code":"tua",
        "title": "Uppoer Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Attempts": {
        "code":"tla",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"radio",
	"choices":{
	  "N":"No<br>",
	  "Y":"Yes"
		},
		"defaultValue":"N"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "lb":"Launch Bay<br>",
          "tr":"Tarmac<br>",
          "fn":"Fender<br>",
          "ot":"Other"
        },
		"defaultValue":"ot"
      },
      "Pushing Capability": {
        "code":"pc",
        "title": "Pushing Capability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4"
        },
		"defaultValue":"1"
      },
      "Counter-Defense<br>Maneuverability": {
        "code":"cd",
        "title": "Counter-Defense Maneuverability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4"
	},
		"defaultValue":"1"
      },
      "Offensive<br>Maneuverability": {
        "code":"om",
        "title": "Offensive Maneuverability",
        "type":"radio",
        "choices":{
          "1":"1<br>",
          "2":"2<br>",
          "3":"3<br>",
          "4":"4"
        },
		"defaultValue":"1"
      },
	"# of Cargo Hoarded": {
	  "code":"hd",
	  "title":"Hoarding",
	  "type":"counter"
      },
	"Intake Speed": {
	  "code":"is",
	  "title":"Scaled Intake Speed",
	  "type":"radio",
	  "choices":{
	    "1":"1<br>",
	    "2":"2<br>",
	    "3":"3<br>",
	    "4":"4"
	},
		"defaultValue":"1"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "0":"Not Attempted/Failed<br>",
          "4":"Low<br>",
          "6":"Mid<br>",
          "10":"High<br>",
          "15":"Traversal"
        },
        "defaultValue":"0"
      },
	  "Climb Time (Seconds)": {
		"code":"ct",
		"title":"How quickly robot climbed",
		"type":"time",
		"min":1,
        "max":100
	}
    },
    "postmatch": {
      "Robot Died": {
        "code":"d",
        "title": "Robot Died",
	"type":"radio",
	"choices":{
	  "N":"No<br>",
	  "Y":"Yes"
	},
	"defaultValue":"N"
      },
      "Penalties Incurred": {
        "code":"pi",
        "title": "Penalties incurred",
        "type":"text",
		"size":15,
		"maxSize":9999
      },
      "# of Penalties Incurred": {
        "code":"np",
	"title": "Number of penalties incurred",
	"type":"counter"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":9999
      }
    }
  }
}`;
