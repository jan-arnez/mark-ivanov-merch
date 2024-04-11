import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Dogodki',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
      validation: (rule) => rule.required().min(5).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Ustvari identifikator za URL. Primer www.mark-ivanov.si/primer-naslova',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Glavna slika',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Nadomestno besedilo',
          description: 'Besedilo, ki se prikaže, če slika slučajno ne deluje',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Besedilo',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
