import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'n7fzn9nk',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2024-07-14',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: { types: schemas}
})

export default config