import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  primarykey: DS.attr('string')
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project-1-земельный-участок.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
