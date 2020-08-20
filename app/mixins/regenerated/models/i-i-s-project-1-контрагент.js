import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  тип: DS.attr('string'),
  наименование: DS.attr('string'),
  иНН: DS.attr('string'),
  оГРН: DS.attr('string')
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project-1-контрагент.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-project-1-контрагент.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-project-1-контрагент.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-project-1-контрагент.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-project-1-контрагент.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
