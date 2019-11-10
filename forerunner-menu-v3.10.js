/*
Each 9 menu items the top screen segment becomes gray
and is populated with the name of the parent menu option name
*/
DataField = [
  "Distance", "Lap Distance", "Pace",
  "Average Pace", "Lap Pace", "Speed",
  "Cadence", "Calories", "Heart Rate",
  "Average HR", "HR Zone", "Elevation",
  "Off", "Timer", "Lap Time"
];
OnOff = ["On", "Off"];
YesNo = ["Yes", "No"];
EnableDisable = ["Enable", "Disable"];
HRZoneCustomHigh = [45, "...", 250];
HRZoneCustomLow = [35, "...", 240];
PaceFastest = ["2min 25sec", "2min 30sec", "...", "9min 5sec"];
PaceSlowest = ["2min 40sec", "2min 45sec", "...", "9min 20sec"];
DistanceKm = [0.25, 0.3, "...", 99.95];
DurationKm = [0.05, 0.10, "...", 99.95];
DurationTime = ["0min 5sec", "0min 10sec", "...", "59min 55sec"];
Time = ["0min 15sec", "0min 30sec", "0min 45sec", "1min 0sec", "...", "59min 45sec"]
HRZone = ["Off", "Zone1", "Zone2", "Zone3", "Zone4", "Zone5"];
PauseCustomKmh = [1.60, 1.65, "...", 30];

//Arrow up pressed
GPS = OnOff;

//Arrow down pressed
Menu = {
  "Training":{
    "My Workouts": null,
    "Training Calendar": null,
    "Intervals": {
      "Do Workout": null,
      "Edit": {
        "Interval": {
          "Duration": DurationKm|DurationTime,
          "Type": ["Distance", "Time", "Open"],
        },
        "Rest": {
          "Duration": DurationTime,
          "Type": ["Distance", "Time", "Open"],
        },
        "Repeat": [2, 3, "...", 99],
        "Warm Up": OnOff,
        "Cool Down": OnOff
      }
    },
  },
  "History":{
    "Activities": [],
    "Totals": ["Weekly", "Monthly"],
    "Options": ["Delete All Activities", "Reset Totals", ""]
  },
  "Records": ["1km", "Longest Run", "Clear All Records"],
  "Settings":{
    "Activity Settings":{
      "Data Screens":{
        "Screen 1":{
          "Top Field": DataField,
          "Middle Field": DataField,
          "Bottom Field": DataField,
          "Preview": null
        },
        "Screen 2":{
          "Status": OnOff,
          "Top Field": DataField,
          "Middle Field": DataField,
          "Bottom Field": DataField,
          "Preview": null
        },
        "Heart Rate":{
          "Status": EnableDisable,
          "Preview": null
        },
        "Clock": OnOff
      },
      "Alerts":{
        "Heart Rate":{
          "High Alert": HRZone.push(HRZoneCustomHigh),
          "Low Alert": HRZone.push(HRZoneCustomLow),
        },
        "Run/Walk":{
          "Status": OnOff,
          "Run Time": Time,
          "Walk Time":Time
        },
        "Pace":{
          "Fast Alert": OnOff,
          "Fastest Pace": PaceFastest,
          "Slow Alert": OnOff,
          "Slowest Pace": PaceSlowest
        }
      },
      "Auto Lap":{
        "Status": OnOff,
        "Distance": DistanceKm
      },
      "Auto Pause": ["Off", "When Stopped", PauseCustomKmh],
      "Auto Scroll": ["Off", "Slow", "Medium", "Fast"],
      "Timeout": ["Normal", "Extended"]
    },
    "Sensors":{
      "Add Sensor": {
        "Heart Rate Monitor": {
        },
        "Foot Pod": {
          "Status": OnOff,
          "Calibration Factor": [50.00, 50.10, "...", 150.00],
          "Remove": null
        }
      },
      "Heart Rate": {
        "Status": OnOff,
        "Sensor Details": null,
        "Remove": null
      }
    },
    "Bluetooth":{
      "Status": OnOff,
      "Pair Mobile Device": null
    },
    "User Profile":{
      "Gender": ["Male", "Female"],
      "Birth Year": [1900, 1901, "...", 2016],
      "Height": [30, 31, "...", 254],//cm
      "Weight": [4, 5, "...", 449],//kg
      "Heart Rate Zones": {
        "Based On": ["BPM", "%Max. HR", "%HRR"],
        "Max. HR": [120, 130, "...", 254],//bpm
        "Zone 5": [81, 82, "...", 99],//%Max
        "Zone 4": [71, 72, "...", 81],//%Max
        "Zone 3": [61, 62, "...", 79],//%Max
        "Zone 2": [51, 52, "...", 78],//%Max
        "Zone 1": [0, 1, "...", 50],//%Max
        "Resting HR": [30, 31, "...", 110],//bpm
      }
    },
    "Alarm":{
      "Status": OnOff,
      "Time": ["0hr 00 min", "0hr 01min", "...", "23hr 59min"]
    },
    "System":{
      "Language": [
        "Cestina", "Dansk", "Deutsch", "Ellinika", 
        "English", "Espanol", "Francais", "Hrvatski", 
        "Italiano", "Magyar", "Nederlands", "Norsk", 
        "Polski", "Portuges", "Russkij", "Slovencina", 
        "Slovenscina", "Suomi", "Svenska"
      ],
      "Clock": {
        "Time Format": ["12-Hour", "24-Hour"],
        "Set Time": ["Auto", "Manual"],
        "Background": ["White", "Black"],
        "Use Theme Color": YesNo
      },
      "Backlight": {
        "Mode": ["Keys/Alerts", "Manual"],
        "Timeout": ["8 Seconds", "15 Seconds", "30 Seconds", "1 Minute", "Stays On"]
      },
      "Sounds": {
        "Key Tones": OnOff,
        "Alert Tones": OnOff,
        "Vibrations": OnOff,
      },
      "Units": {
        "Distance": ["Kilometers", "Miles"],
        "Pace/Speed": ["Kilometers", "Miles"],
        "Elevation": ["Meters", "Feet"],
        "Weight": ["Pounds", "Kilograms"],
        "Height": ["Feet", "Centimeters"]
      },
      "Theme Color": ["Blue", "Green", "Orange", "Red", "Yellow", "Pink", "Purple"],
      "GPS": OnOff,
      "Format": {
        "Running": ["Show Pace", "Show Speed"],
        "Start of Week": ["Saturday", "Sunday", "Monday"],
      },
      "Restore Default": YesNo,
      "Software Update": null,
      "About": null,
    }
  },
};
