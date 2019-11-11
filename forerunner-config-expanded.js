// HRZoneCustomHigh = [45, "...", 250];
// HRZoneCustomLow = [35, "...", 240];
// PaceFastest = ["2min 25sec", "2min 30sec", "...", "9min 5sec"];
// PaceSlowest = ["2min 40sec", "2min 45sec", "...", "9min 20sec"];
// DistanceKm = [0.25, 0.3, "...", 99.95];
// DurationKm = [0.05, 0.10, "...", 99.95];
// DurationTime = ["0min 5sec", "0min 10sec", "...", "59min 55sec"];
// Time = ["0min 15sec", "0min 30sec", "0min 45sec", "1min 0sec", "...", "59min 45sec"];
// PauseCustomKmh = [1.60, 1.65, "...", 30];

HR_ZONE_CUSTOM_HIGH_MIN = 45
HR_ZONE_CUSTOM_HIGH_MAX = 250
HR_ZONE_CUSTOM_HIGH_STEP = 5
HR_ZONE_CUSTOM_HIGH = Array.from(
  new Array(
    1 + (HR_ZONE_CUSTOM_HIGH_MAX - HR_ZONE_CUSTOM_HIGH_MIN) / HR_ZONE_CUSTOM_HIGH_STEP
  ),
  (value, index) => {
    return HR_ZONE_CUSTOM_HIGH_MIN + index * HR_ZONE_CUSTOM_HIGH_STEP
  }
)

HR_ZONE_CUSTOM_LOW_MIN = 35
HR_ZONE_CUSTOM_LOW_MAX = 240
HR_ZONE_CUSTOM_LOW_STEP = 5
HR_ZONE_CUSTOM_LOW = Array.from(
  new Array(
    1 + (HR_ZONE_CUSTOM_LOW_MAX - HR_ZONE_CUSTOM_LOW_MIN) / HR_ZONE_CUSTOM_LOW_STEP
  ),
  (value, index) => {
    return HR_ZONE_CUSTOM_LOW_MIN + index * HR_ZONE_CUSTOM_LOW_STEP
  }
)

PACE_FASTEST_MIN = 145
PACE_FASTEST_MAX = 545
PACE_FASTEST_STEP = 5
PACE_FASTEST = Array.from(
  new Array(1 + (PACE_FASTEST_MAX - PACE_FASTEST_MIN) / PACE_FASTEST_STEP),
  (value, index) => {
    return PACE_FASTEST_MIN + index * PACE_FASTEST_STEP
  }
).map((value, index) => {
  return ''.concat(Math.floor(value / 60), 'min', ' ', value % 60, 'sec')
})

PACE_SLOWEST_MIN = 160
PACE_SLOWEST_MAX = 560
PACE_SLOWEST_STEP = 5
PACE_SLOWEST = Array.from(
  new Array(1 + (PACE_SLOWEST_MAX - PACE_SLOWEST_MIN) / PACE_SLOWEST_STEP),
  (value, index) => {
    return PACE_SLOWEST_MIN + index * PACE_SLOWEST_STEP
  }
).map((value, index) => {
  return ''.concat(Math.floor(value / 60), 'min', ' ', value % 60, 'sec')
})

module.exports = {
  HR_ZONE_CUSTOM_HIGH: HR_ZONE_CUSTOM_HIGH,
  HR_ZONE_CUSTOM_LOW: HR_ZONE_CUSTOM_LOW,
  PACE_FASTEST: PACE_FASTEST,
  PACE_SLOWEST: PACE_SLOWEST,
}
