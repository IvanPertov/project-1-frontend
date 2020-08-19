import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  ValidationRules,
  Model as ЗемельныйУчастокMixin
} from '../mixins/regenerated/models/i-i-s-project-1-земельный-участок';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, ЗемельныйУчастокMixin, Validations, {
});

export default Model;
