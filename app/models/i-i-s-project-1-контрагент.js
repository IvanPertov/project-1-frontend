import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  ValidationRules,
  Model as КонтрагентMixin
} from '../mixins/regenerated/models/i-i-s-project-1-контрагент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, КонтрагентMixin, Validations, {
});

export default Model;
