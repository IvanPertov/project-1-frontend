import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISproject_1ДоговорLForm from './forms/i-i-s-project-1-договор-l';
import IISproject_1ЗУДоговораLForm from './forms/i-i-s-project-1-з-у-договора-l';
import IISproject_1ЗемельныйУчастокLForm from './forms/i-i-s-project-1-земельный-участок-l';
import IISproject_1НачисленияLForm from './forms/i-i-s-project-1-начисления-l';
import IISproject_1ОплатыLForm from './forms/i-i-s-project-1-оплаты-l';
import IISproject_1ДоговорEForm from './forms/i-i-s-project-1-договор-e';
import IISproject_1ЗУДоговораEForm from './forms/i-i-s-project-1-з-у-договора-e';
import IISproject_1ЗемельныйУчастокEForm from './forms/i-i-s-project-1-земельный-участок-e';
import IISproject_1НачисленияEForm from './forms/i-i-s-project-1-начисления-e';
import IISproject_1ОплатыEForm from './forms/i-i-s-project-1-оплаты-e';
import IISproject_1ДоговорModel from './models/i-i-s-project-1-договор';
import IISproject_1ЗУДоговораModel from './models/i-i-s-project-1-з-у-договора';
import IISproject_1ЗемельныйУчастокModel from './models/i-i-s-project-1-земельный-участок';
import IISproject_1КонтрДоговораModel from './models/i-i-s-project-1-контр-договора';
import IISproject_1КонтрагентModel from './models/i-i-s-project-1-контрагент';
import IISproject_1НачисленияModel from './models/i-i-s-project-1-начисления';
import IISproject_1ОплатыModel from './models/i-i-s-project-1-оплаты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-project-1-договор': IISproject_1ДоговорModel,
    'i-i-s-project-1-з-у-договора': IISproject_1ЗУДоговораModel,
    'i-i-s-project-1-земельный-участок': IISproject_1ЗемельныйУчастокModel,
    'i-i-s-project-1-контр-договора': IISproject_1КонтрДоговораModel,
    'i-i-s-project-1-контрагент': IISproject_1КонтрагентModel,
    'i-i-s-project-1-начисления': IISproject_1НачисленияModel,
    'i-i-s-project-1-оплаты': IISproject_1ОплатыModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'project-1': {
          caption: 'project-1',
          title: 'project-1',
          'i-i-s-project-1-з-у-договора-l': {
            caption: 'i-i-s-project-1-з-у-договора-l',
            title: 'i-i-s-project-1-з-у-договора-l'
          },
          'i-i-s-project-1-оплаты-l': {
            caption: 'i-i-s-project-1-оплаты-l',
            title: 'i-i-s-project-1-оплаты-l'
          },
          'i-i-s-project-1-договор-l': {
            caption: 'i-i-s-project-1-договор-l',
            title: 'i-i-s-project-1-договор-l'
          },
          'i-i-s-project-1-начисления-l': {
            caption: 'i-i-s-project-1-начисления-l',
            title: 'i-i-s-project-1-начисления-l'
          },
          'i-i-s-project-1-земельный-участок-l': {
            caption: 'i-i-s-project-1-земельный-участок-l',
            title: 'i-i-s-project-1-земельный-участок-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-project-1-договор-l': IISproject_1ДоговорLForm,
    'i-i-s-project-1-з-у-договора-l': IISproject_1ЗУДоговораLForm,
    'i-i-s-project-1-земельный-участок-l': IISproject_1ЗемельныйУчастокLForm,
    'i-i-s-project-1-начисления-l': IISproject_1НачисленияLForm,
    'i-i-s-project-1-оплаты-l': IISproject_1ОплатыLForm,
    'i-i-s-project-1-договор-e': IISproject_1ДоговорEForm,
    'i-i-s-project-1-з-у-договора-e': IISproject_1ЗУДоговораEForm,
    'i-i-s-project-1-земельный-участок-e': IISproject_1ЗемельныйУчастокEForm,
    'i-i-s-project-1-начисления-e': IISproject_1НачисленияEForm,
    'i-i-s-project-1-оплаты-e': IISproject_1ОплатыEForm
  },

});

export default translations;
