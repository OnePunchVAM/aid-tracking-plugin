
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // Prevents energy from being used for commands
  if (!modifiedText) return { stop: true }

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
