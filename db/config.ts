import { column, defineDb, defineTable } from 'astro:db';

const Views = defineTable({
  columns: {
    views: column.number(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Views },
});

