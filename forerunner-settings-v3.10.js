/*
Each 9 menu items the top screen segment becomes gray
and is populated with the name of the parent menu option name
*/

CFG1 = require('./forerunner-config.js')
CFG2 = require('./forerunner-config-expanded.js')
CONFIG = { ...CFG1, ...CFG2 }

DistanceKm = [0.25, 0.3, '...', 99.95]
DurationKm = [0.05, 0.1, '...', 99.95]
DurationTime = ['0min 5sec', '0min 10sec', '...', '59min 55sec']
Time = ['0min 15sec', '0min 30sec', '0min 45sec', '1min 0sec', '...', '59min 45sec']
PauseCustomKmh = [1.6, 1.65, '...', 30]

//Arrow up pressed
GPS = CONFIG.ON_OFF

//Arrow down pressed
Menu = {
  Training: {
    'My Workouts': null,
    'Training Calendar': null,
    Intervals: {
      'Do Workout': null,
      Edit: {
        Interval: {
          Duration: DurationKm | DurationTime,
          Type: ['Distance', 'Time', 'Open'],
        },
        Rest: {
          Duration: DurationTime,
          Type: ['Distance', 'Time', 'Open'],
        },
        Repeat: [2, 3, '...', 99],
        'Warm Up': CONFIG.ON_OFF,
        'Cool Down': CONFIG.ON_OFF,
      },
    },
  },
  History: {
    Activities: [],
    Totals: ['Weekly', 'Monthly'],
    Options: ['Delete All Activities', 'Reset Totals', ''],
  },
  Records: ['1km', 'Longest Run', 'Clear All Records'],
  Settings: {
    'Activity Settings': {
      'Data Screens': {
        'Screen 1': {
          'Top Field': CONFIG.DATA_FIELD,
          'Middle Field': CONFIG.DATA_FIELD,
          'Bottom Field': CONFIG.DATA_FIELD,
          Preview: null,
        },
        'Screen 2': {
          Status: CONFIG.ON_OFF,
          'Top Field': CONFIG.DATA_FIELD,
          'Middle Field': CONFIG.DATA_FIELD,
          'Bottom Field': CONFIG.DATA_FIELD,
          Preview: null,
        },
        'Heart Rate': {
          Status: CONFIG.ENABLE_DISABLE,
          Preview: null,
        },
        Clock: CONFIG.ON_OFF,
      },
      Alerts: {
        'Heart Rate': {
          'High Alert': CONFIG.HR_ZONE.concat(CONFIG.HR_ZONE_CUSTOM_HIGH),
          'Low Alert': CONFIG.HR_ZONE.concat(CONFIG.HR_ZONE_CUSTOM_LOW),
        },
        'Run/Walk': {
          Status: CONFIG.ON_OFF,
          'Run Time': Time,
          'Walk Time': Time,
        },
        Pace: {
          'Fast Alert': CONFIG.ON_OFF,
          'Fastest Pace': CONFIG.PACE_FASTEST,
          'Slow Alert': CONFIG.ON_OFF,
          'Slowest Pace': CONFIG.PACE_SLOWEST,
        },
      },
      'Auto Lap': {
        Status: CONFIG.ON_OFF,
        Distance: DistanceKm,
      },
      'Auto Pause': ['Off', 'When Stopped', PauseCustomKmh],
      'Auto Scroll': ['Off', 'Slow', 'Medium', 'Fast'],
      Timeout: ['Normal', 'Extended'],
    },
    Sensors: {
      'Add Sensor': {
        'Heart Rate Monitor': {},
        'Foot Pod': {
          Status: CONFIG.ON_OFF,
          'Calibration Factor': [50.0, 50.1, '...', 150.0],
          Remove: null,
        },
      },
      'Heart Rate': {
        Status: CONFIG.ON_OFF,
        'Sensor Details': null,
        Remove: null,
      },
    },
    Bluetooth: {
      Status: CONFIG.ON_OFF,
      'Pair Mobile Device': null,
    },
    'User Profile': {
      Gender: ['Male', 'Female'],
      'Birth Year': [1900, 1901, '...', 2016],
      Height: [30, 31, '...', 254], //cm
      Weight: [4, 5, '...', 449], //kg
      'Heart Rate Zones': {
        'Based On': ['BPM', '%Max. HR', '%HRR'],
        'Max. HR': [120, 130, '...', 254], //bpm
        'Zone 5': [81, 82, '...', 99], //%Max
        'Zone 4': [71, 72, '...', 81], //%Max
        'Zone 3': [61, 62, '...', 79], //%Max
        'Zone 2': [51, 52, '...', 78], //%Max
        'Zone 1': [0, 1, '...', 50], //%Max
        'Resting HR': [30, 31, '...', 110], //bpm
      },
    },
    Alarm: {
      Status: CONFIG.ON_OFF,
      Time: ['0hr 00 min', '0hr 01min', '...', '23hr 59min'],
    },
    System: {
      Language: [
        'Cestina',
        'Dansk',
        'Deutsch',
        'Ellinika',
        'English',
        'Espanol',
        'Francais',
        'Hrvatski',
        'Italiano',
        'Magyar',
        'Nederlands',
        'Norsk',
        'Polski',
        'Portuges',
        'Russkij',
        'Slovencina',
        'Slovenscina',
        'Suomi',
        'Svenska',
      ],
      Clock: {
        'Time Format': ['12-Hour', '24-Hour'],
        'Set Time': ['Auto', 'Manual'],
        Background: ['White', 'Black'],
        'Use Theme Color': CONFIG.YES_NO,
      },
      Backlight: {
        Mode: ['Keys/Alerts', 'Manual'],
        Timeout: ['8 Seconds', '15 Seconds', '30 Seconds', '1 Minute', 'Stays On'],
      },
      Sounds: {
        'Key Tones': CONFIG.ON_OFF,
        'Alert Tones': CONFIG.ON_OFF,
        Vibrations: CONFIG.ON_OFF,
      },
      Units: {
        Distance: ['Kilometers', 'Miles'],
        'Pace/Speed': ['Kilometers', 'Miles'],
        Elevation: ['Meters', 'Feet'],
        Weight: ['Pounds', 'Kilograms'],
        Height: ['Feet', 'Centimeters'],
      },
      'Theme Color': ['Blue', 'Green', 'Orange', 'Red', 'Yellow', 'Pink', 'Purple'],
      GPS: CONFIG.ON_OFF,
      Format: {
        Running: ['Show Pace', 'Show Speed'],
        'Start of Week': ['Saturday', 'Sunday', 'Monday'],
      },
      'Restore Default': CONFIG.YES_NO,
      'Software Update': null,
      About: null,
    },
  },
}

console.log(JSON.stringify(Menu, null, 2))
