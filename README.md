# AID Tracking Plugin

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

A plugin that detects World Info entries in your context and display's them in the AID stats UI.

![Tracking Plugin in Action](https://cdn.discordapp.com/attachments/717764081058185316/817918617806307368/unknown.png)

**Note:** This plugin will only detect VANILLA style keys (ie, comma separated strings). If you are using the EWIJSON script, this plugin cannot detect it's injected context. 

## Usage

In order to detect what has been injected, the Tracking Plugin needs to be called somewhere in your `contextModifier` script:
```js
trackingPlugin.execute(modifiedText)
```