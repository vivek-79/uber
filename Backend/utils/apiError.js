
class apiError extends Error{

    constructor(
        statusCode,
        message='Something went wrong',
        okay=false,   
    ){
        super(message),
        this.statusCode=statusCode,
        this.data=null,
        this.success=false,
        this.message=message,
        this.ok =okay
    }
}

export {apiError}