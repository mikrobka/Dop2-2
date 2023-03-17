export type DataStateType ={
    pages:Array<PagesType>
}

export type PagesType = {
    heading:string
    about:string
}

export const DataState:DataStateType = {
    pages: [
        {
            heading:" While",
            about:"While имеет следующий синтаксис"
        },
        {
            heading:" For",
            about:"For имеет следующий синтаксис"
        },
        {
            heading:" Switch",
            about:"Switch имеет следующую конструкцию"
        },
    ]
}