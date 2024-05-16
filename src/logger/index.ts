import {
    logConfig,
    logOptions,
}            from "./types";
import chalk from "chalk";

let configForLog: logConfig = {
    disableColor   : false,
    disableBrackets: false,
    formatString   : true,
    colors         : {
        error: "#ff0000",
        info : "#00ff00",
        fatal: "#ff0000",
        warn : "#FFA500",
    },
    spacesInJson   : 0,
}
export const mLog           = {
    config: (options: logConfig): void => {
        configForLog = {...options}
    },
    log   : ({
                 info,
                 warn,
                 fatal,
                 error,
                 path,
                 message,
                 method,
                 handler,
                 source,
             }: Partial<logOptions>): string => {
        const errorColor = chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "#ff0000")
        const fatalColor = chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "#ff0000")
        const infoColor  = chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "#00ff00")
        const warnColor  = chalk.hex(configForLog.colors?.warn ? configForLog.colors.warn : "#FFA500")

        const infoAfterConfig  = !configForLog.disableColor ? infoColor(info) : info
        const warnAfterConfig  = !configForLog.disableColor ? warnColor(warn) : warn
        const fatalAfterConfig = !configForLog.disableColor ? fatalColor(fatal) : fatal
        const errorAfterConfig = !configForLog.disableColor ? errorColor(error) : error

        const json             = JSON.stringify({
            info       : infoAfterConfig,
            warn       : warnAfterConfig,
            fatal      : fatalAfterConfig,
            error      : errorAfterConfig,
            handlerName: handler,
            method     : method,
            path       : path,
            source     : source ?? __filename,
            message    : message,
        }, null, configForLog.spacesInJson)

        const disableBrackets  = json.replace(configForLog.disableBrackets ? /[{}]/g : "", "")
        return disableBrackets.replace(configForLog.formatString ? "\",\"" : "", ", ")
    },
}
