export interface Skipper {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    surname: string
    email: string
    region: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    imageUrl: string;
  }
  