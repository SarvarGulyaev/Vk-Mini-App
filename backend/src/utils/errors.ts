class BaseError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}

class UnauthorizedError extends BaseError {
    constructor(message = "Not Authorized") {
        super(401, message);
        this.name = UnauthorizedError.name;
    }
}

class NotFoundError extends BaseError {
    constructor(message = "Not Found") {
        super(404, message);
        this.name = NotFoundError.name;
    }
}

export { BaseError, UnauthorizedError, NotFoundError };
