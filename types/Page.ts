import { PortableTextBlock } from "sanity"

export type Page = {
    _id: string
    _created: Date
    title: string
    slug: string
    content: PortableTextBlock[]
}