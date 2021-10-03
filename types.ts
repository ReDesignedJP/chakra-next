export interface BaseApiResponse {
    code: number;
    message: string;
}

export class ApiResponse implements BaseApiResponse {
    code: number = 0;
    message: string = "";
}