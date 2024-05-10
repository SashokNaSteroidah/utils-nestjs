/**
 * Utils for fast logging handlers init
 * @param handler
 * @param method
 * @param path
 * @param message
 */
export var mLog = (handler: string, method: string, path: string, message: string) => `handlerName: "${handler}", method: "${method}", path: "${path}", message: "${message}"`;
