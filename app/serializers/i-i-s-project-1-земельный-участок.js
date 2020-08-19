import { Serializer as ЗемельныйУчастокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project-1-земельный-участок';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗемельныйУчастокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
