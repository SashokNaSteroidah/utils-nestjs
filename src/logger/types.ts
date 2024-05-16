export enum httpMethods {
    POST    = "POST",
    GET     = "GET",
    PATCH   = "PATCH",
    PUT     = "PUT",
    OPTIONS = "OPTIONS",
    DELETE  = "DELETE",
    HEAD    = "HEAD",
    TRACE   = "TRACE"
}

export type logConfig = {
    disableColor?: boolean,
    disableBrackets?: boolean,
    formatString?: boolean,
    spacesInJson?: number
    colors?: Partial<colorsConfig>
}

export type colorsConfig = {
    error: string,
    warn: string,
    info: string,
    fatal: string
}

export type logOptions = {
    /**
     * Handler name
     */
    handler: string,
    /**
     * Methods name {@link httpMethods}
     */
    method: httpMethods,
    /**
     * Handler path (http path)
     */
    path: string,
    /**
     * Simple message for log
     */
    message: string
    /**
     * File from which the log comes
     * Can be null, by default get data from {@link getPathToCurrentFile}
     */
    source: string | null,
    info: string,
    error: string,
    warn: string,
    fatal: string,
}
