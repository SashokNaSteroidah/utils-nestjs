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
        info : "",
        fatal: "#ff0000",
        warn : "#FFA500",
    },
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
        const infoAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "") : info
        const warnAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.warn ? configForLog.colors.warn : "") : warn
        const fatalAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.fatal ? configForLog.colors.fatal : "") : fatal
        const errorAfterConfig = !configForLog.disableColor ? chalk.hex(configForLog.colors?.error ? configForLog.colors.error : "") : error
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
        })
        const disableBrackets = json.replace(configForLog.disableBrackets ? /[{}]/g : "", "")
        const formatString = disableBrackets.replace(configForLog.formatString ? "\",\"" : "", ", ")
        return formatString
    }
}
