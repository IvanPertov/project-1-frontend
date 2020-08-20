import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  контрагент: DS.belongsTo('i-i-s-project-1-контрагент', { inverse: null, async: false }),
  договор: DS.belongsTo('i-i-s-project-1-договор', { inverse: 'контрДоговора', async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project-1-контр-договора.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-project-1-контр-договора.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-project-1-контр-договора.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
