import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Ekipa',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Polno ime',
      description: 'Npr. Janez Novak',
      type: 'string',
      validation: (rule) => rule.required().min(4).max(80),
    }),
    defineField({
      name: 'role',
      title: 'Vloga v ekipi',
      description: 'Npr. mehanik',
      type: 'string',
      validation: (rule) => rule.required().min(4).max(80),
    }),
    defineField({
      name: 'image',
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
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
});
