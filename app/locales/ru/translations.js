import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import IISproject_1НачисленияModel from './models/i-i-s-project-1-начисления';
import IISproject_1ОплатыModel from './models/i-i-s-project-1-оплаты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-project-1-договор': IISproject_1ДоговорModel,
    'i-i-s-project-1-з-у-договора': IISproject_1ЗУДоговораModel,
    'i-i-s-project-1-земельный-участок': IISproject_1ЗемельныйУчастокModel,
    'i-i-s-project-1-начисления': IISproject_1НачисленияModel,
    'i-i-s-project-1-оплаты': IISproject_1ОплатыModel
  },

  'application-name': 'Project_1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Project_1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Project_1',
          title: 'Project_1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'project-1': {
          caption: 'project_1',
          title: 'project_1',
          'i-i-s-project-1-з-у-договора-l': {
            caption: 'З у договора',
            title: ''
          },
          'i-i-s-project-1-оплаты-l': {
            caption: 'Оплаты',
            title: ''
          },
          'i-i-s-project-1-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-project-1-начисления-l': {
            caption: 'Начисления',
            title: ''
          },
          'i-i-s-project-1-земельный-участок-l': {
            caption: 'Земельный участок',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
