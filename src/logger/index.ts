import {
    logConfig,
    logOptions,
}            from "./types";
import chalk from "chalk";

let configForLog: logConfig = {
    disableColor: false,
    disableBrackets : false,
    formatString: true,
    colors      : {
        error: "#ff0000",
        info : "#00ff00",
        fatal: "#ff0000",
        warn : "#FFA500",
    },
    spacesInJson: 0
}
export const mLog = {
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
        const infoAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "#ff0000") : info
        const warnAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.warn ? configForLog.colors.warn : "#00ff00") : warn
        const fatalAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.fatal ? configForLog.colors.fatal : "#ff0000") : fatal
        const errorAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.error ? configForLog.colors.error : "#ff0000") : error
        const json = JSON.stringify({
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
        // const disableBrackets = json.replace(configForLog.disableBrackets ? /[{}]/g : "", "")
        // const formatString = disableBrackets.replace(configForLog.formatString ? "\",\"" : "", ", ")
        return json
    }
}
