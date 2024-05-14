import {
    errorLogOptions,
    fatalLogOptions,
    infoLogOptions,
    logOptions,
    warnLogOptions,
} from "./types";
import chalk from "chalk";


const errorColor = chalk.red;
const greenColor = chalk.green;
const warningColor = chalk.hex("#FFA500");
export const mLog = {
    log: ({path, message, method, handler, source}: Partial<logOptions>): string => (JSON.stringify({handlerName: handler, method: method, path: path, source: source, message: message})),
    info: ({info, path, message, method, handler, source}: Partial<infoLogOptions>): string => (JSON.stringify({info: greenColor(info), handlerName: handler, method: method, path: path, source: source, message: message})),
    warn: ({warn, path, message, method, handler, source}: Partial<warnLogOptions>): string => (JSON.stringify({warn: warningColor(warn), handlerName: handler, method: method, path: path, source: source, message: message})),
    error: ({error, path, message, method, handler, source}: Partial<errorLogOptions>): string => (JSON.stringify({error: errorColor(error), handlerName: handler, method: method, path: path, source: source, message: message})),
    fatal: ({fatal, path, message, method, handler, source}: Partial<fatalLogOptions>): string => (JSON.stringify({fatal: errorColor(fatal), handlerName: handler, method: method, path: path, source: source, message: message})),
}
