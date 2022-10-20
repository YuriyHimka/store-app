export interface IProduct {
    id: number
    imageUrl: string
    name: string
    count: number
    size: {}
    weight: string
    comments: []
}

export interface ServerResponse<T> {
    comments: T[],
    products: T[]
}

export interface IComments {
    date: string
    description: string
    id: number
    productId: number
}