import {defineType} from 'sanity'

export const PersonSchema = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 5,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
