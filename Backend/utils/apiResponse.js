
class apiResponse{

    constructor(
        statusCode,
        data,
        message ='Success',
        okay=false
    ){
        this.ok=okay
        this.statusCode=statusCode,
        this.data=data,
        this.message=message
    }
}

export {apiResponse}