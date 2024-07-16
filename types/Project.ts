import { PortableTextBlock } from "sanity"

export type Project = {
    _id: string
    _created: Date
    name: string
    slug: string
    image: string
    projectUrl: string
    repoUrl: string
    content: PortableTextBlock[]
}