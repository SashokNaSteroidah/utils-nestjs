export enum httpMethods {
    POST = "POST",
    GET = "GET",
    PATCH = "PATCH",
    PUT = "PUT",
    OPTIONS = "OPTIONS",
    DELETE = "DELETE",
    HEAD = "HEAD",
    TRACE = "TRACE"
}

export type logConfig = {
    disableColor: boolean
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
     */
    source: string | null
}
export type errorLogOptions = logOptions & {
    error: string,
}
export type warnLogOptions = logOptions & {
    warn: string,
}
export type fatalLogOptions = logOptions & {
    fatal: string,
}
export type infoLogOptions = logOptions & {
    info: string,
}