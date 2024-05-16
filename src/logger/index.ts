import {
    logConfig,
    logOptions,
    termColors,
} from "./types";

let configForLog: logConfig = {
    disableColor   : false,
    disableBrackets: false,
    formatString   : true,
    objectToLog    : false,
    colors         : {
        error: termColors.Red,
        info : termColors.White,
        fatal: termColors.Red,
        warn : termColors.Yellow,
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
             }: Partial<logOptions>): string | Partial<logOptions> => {
        const log = {
            info       : info,
            warn       : warn,
            fatal      : fatal,
            error      : error,
            handlerName: handler,
            method     : method,
            path       : path,
            source     : source ?? __filename,
            message    : message,
        }
        if (configForLog.objectToLog) {
            const errorColor = configForLog.colors?.error ? configForLog.colors.error : termColors.Red
            const fatalColor = configForLog.colors?.fatal ? configForLog.colors.fatal : termColors.Red
            const infoColor  = configForLog.colors?.info ? configForLog.colors.info : termColors.White
            const warnColor  = configForLog.colors?.warn ? configForLog.colors.warn : termColors.Yellow

            const infoAfterConfig  = !configForLog.disableColor ? `${infoColor}${info}` : info
            const warnAfterConfig  = !configForLog.disableColor ? `${warnColor}${info}` : warn
            const fatalAfterConfig = !configForLog.disableColor ? `${fatalColor}${info}` : fatal
            const errorAfterConfig = !configForLog.disableColor ? `${errorColor}${info}` : error
            return {
                ...log,
                info : infoAfterConfig,
                warn : warnAfterConfig,
                fatal: fatalAfterConfig,
                error: errorAfterConfig,
            }
        }
        const json = JSON.stringify(log, null, configForLog.spacesInJson ?? 0)

        const disableBrackets = configForLog.disableBrackets ? json.replace(/[{}]/g, "") : json
        return configForLog.formatString ? disableBrackets.replace(/,/g, ", ") : disableBrackets
    },
}
