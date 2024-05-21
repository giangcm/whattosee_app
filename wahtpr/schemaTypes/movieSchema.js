import {defineType} from 'sanity'

export const MovieSchema = defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          {title: 'Action', value: 'action'},
          {title: 'Comedy', value: 'comedy'},
          {title: 'Drama', value: 'drama'},
          {title: 'Horror', value: 'horror'},
          {title: 'Science Fiction', value: 'scienceFiction'},
          {title: 'Romance', value: 'romance'},
          // Add more genres as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'cast',
      title: 'Cast',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imdb',
      title: 'IMDb Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
          message: 'Invalid IMDb URL',
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
  },
})
