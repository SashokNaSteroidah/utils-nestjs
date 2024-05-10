/**
 * Utils for fast logging handlers init
 * @param handler
 * @param method
 * @param path
 * @param message
 */
export const mLog = (handler: string, method: string, path: string, message: string): string => `handlerName: "${handler}", method: "${method}", path: "${path}", message: "${message}"`;
