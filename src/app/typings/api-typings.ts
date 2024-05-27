export type CreateEventReq = {
  event: string,
  file: string,
  desc: string,
  location:string
  assetId:string
}

export type CreateEventRes = {
  event: string,
  file: string,
  desc: string,
  location:string,
  id: number,
  createdAt: string,
  uploadedAt:string
}