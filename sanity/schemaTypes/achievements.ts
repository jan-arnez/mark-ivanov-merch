import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'achievements',
  title: 'Dosežki',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      description: 'npr. Pregled sezone 2024',
      type: 'string',
      validation: (rule) => rule.required().min(3).max(96),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Ustvari identifikator za URL (npr. www.mark-ivanov.si/dosezki/sezona-2024)',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'year',
      title: 'Leto',
      type: 'number',
      initialValue: new Date().getFullYear(),
      validation: (rule) => rule.required().greaterThan(2000).lessThan(2050),
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
    },
  },
});
