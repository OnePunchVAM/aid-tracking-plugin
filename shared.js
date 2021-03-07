/*
 * WorldInfo Tracking Plugin
 */
class TrackingPlugin {
  enabled = true

  STAT_TEMPLATE = { key: "World Info", color: "goldenrod" }

  contextModifier(text) {
    if (!this.enabled) return text

    // Gather context
    const frontLines = (state.memory.frontMemory || "").split("\n")
    const lines = frontLines.concat(text.split("\n"))

    // Go through each world info entry and check to see
    // if it can be found within the context provided
    const injectedInfo = worldInfo.filter(info => {
      for (let line of lines) if (line === info.entry) return true
    })

    // Get the first key for each entry detected and display
    // Detect EWIJSON and display full key
    const trackedKeys = injectedInfo.map(i => i.keys.includes("#") ? i.keys : i.keys.split(",")[0].trim())
    this.displayStat(trackedKeys.join(", "))

    // Return untouched context
    return text
  }

  displayStat(value) {
    const stat = state.displayStats.find(s => s.key === this.STAT_TEMPLATE.key)

    // If the value is valid, create/update stat
    if (value !== undefined && value !== "") {
      if (stat) stat.value = value
      else state.displayStats.push(Object.assign({ value }, this.STAT_TEMPLATE))
    }
    // Otherwise remove stat from list
    else if (stat) {
      state.displayStats = state.displayStats.filter(s => s.key !== this.STAT_TEMPLATE.key)
    }
  }
}
const trackingPlugin = new TrackingPlugin()
