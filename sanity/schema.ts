import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import event from './schemaTypes/event';
import team from './schemaTypes/team';
import achievements from './schemaTypes/achievements';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, achievements, team, blockContent],
};
