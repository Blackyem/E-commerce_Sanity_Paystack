import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import { visionTool } from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'E_Commerce',

  projectId: 'z6vp071g',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
