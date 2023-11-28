export interface BaseResponse<T> {
  isSucces: false,
  data: T,
  message: string,
  innerExeption: any
}
