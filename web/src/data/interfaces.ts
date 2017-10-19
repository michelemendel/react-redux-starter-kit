export interface ICourse {
    id: string
    title: string
    authorId: string
    category: string
    length: string
    watchHref: string
}

export interface IAuthor {
    id: string
    firstName: string
    lastName: string
}


export interface IState {
    authors: IAuthor[]
    courses: ICourse[]
    ajaxCallsInProgress: number

}