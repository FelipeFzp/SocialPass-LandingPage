export function onError(error, req, res, next) {
    console.error(error);

    // let message: string;
    // let statusCode: number;

    // if (error instanceof CustomException) {
    //     message = error.message;
    //     statusCode = error.statusCode;
    // } else {
    //     message = 'Algo errado 🙁';
    //     statusCode = 400;
    // }

    res.render('error/view-error', { error });
}