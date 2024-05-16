import {
    logConfig,
    logOptions,
}            from "./types";
import chalk from "chalk";

let configForLog: logConfig = {
    disableColor: false,
    brackets    : true,
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
             }: Partial<logOptions>): string => (
        JSON.stringify({
            info       : !configForLog.disableColor ? chalk.hex(configForLog.colors?.info ? configForLog.colors.info : "") : info,
            warn       : !configForLog.disableColor ? chalk.hex(configForLog.colors?.warn ? configForLog.colors.warn : "#FFA500") : warn,
            fatal      : !configForLog.disableColor ? chalk.hex(configForLog.colors?.fatal ? configForLog.colors.fatal : "#ff0000") : fatal,
            error      : !configForLog.disableColor ? chalk.hex(configForLog.colors?.error ? configForLog.colors.error : "#ff0000") : error,
            handlerName: handler,
            method     : method,
            path       : path,
            source     : source ?? __filename,
            message    : message,
        }).replace(configForLog.brackets ? /[{}]/g : "", "")
    ),
}
