

class HttpException extends Error {
    status?: unknown;
    //data?: unknown;
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        //this.data = data;
    }
}

export default HttpException;

