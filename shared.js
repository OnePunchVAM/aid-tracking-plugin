/*
 * WorldInfo Tracking Plugin
 */
class TrackingPlugin {
  STAT_TEMPLATE = { key: "World Info", color: "goldenrod" }

  constructor() {
    if (!state.displayStats) state.displayStats = []
    if (!state.trackingPlugin) state.trackingPlugin = {
      isDisabled: false
    }
    this.state = state.trackingPlugin
  }

  execute(text) {
    // Don't run if disabled
    if (this.state.isDisabled) return

    // Filter world info entries for ones with it's key found within the text
    const detectedInfo = worldInfo.filter(info => {
      const keys = info.keys.split(",").map(k => k.trim())
      for (let key in keys) if (text.includes(key)) return true
    })

    // Get the first key for each entry detected
    const trackedKeys = detectedInfo.map(i => i.keys.split(",")[0].trim()).join(", ")

    // Get stat if already exists
    const stat = state.displayStats.find(s => s.key === this.STAT_TEMPLATE.key)

    // If the value is valid, create/update stat
    if (trackedKeys !== undefined && trackedKeys !== "") {
      if (stat) stat.value = trackedKeys
      else state.displayStats.push(Object.assign({ value: trackedKeys }, this.STAT_TEMPLATE))
    }
    // Otherwise remove stat from list
    else if (stat) {
      state.displayStats = state.displayStats.filter(s => s.key !== this.STAT_TEMPLATE.key)
    }
  }
}
const trackingPlugin = new TrackingPlugin()
