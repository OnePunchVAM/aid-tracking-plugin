
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // The plugin will take the entire context and do a search for matching
  // World Info keys making sure to take into account comma separated keys.
  trackingPlugin.execute(modifiedText)

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
