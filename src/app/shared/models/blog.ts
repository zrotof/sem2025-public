
export interface ArticleCategory {
    rubrique_id: string,
    rubrique_title: string,
    rubrique_image?: string,
    slug: string,
    state: boolean
}

export interface CategoryClickEvent{
    id : string,
    index: number
}

export interface Article{
    id: string,
    title: string,
    media : string,
    date: string,
    description : string,
    mediaType : string
}

export enum MediaType{
    
}
