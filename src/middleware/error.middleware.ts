// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorMiddleware(error, _req, res, next) {
    const { status = 500, message, data } = error;

    console.log(`[Error] ${error}`);

    // If status code is 500 - change the message to Internal server error
    const newMessage = status === 500 || !message ? 'Internal server error' : message;

    error = {
        type: 'error',
        status,
        newMessage,
        ...(data) && data
    }
    res.status(status).send({response:false, error});
}

export default errorMiddleware;
/*
{
    type: 'error',
    status: 404,
    message: 'Not Found'
    data: {...} // optional
}
*/