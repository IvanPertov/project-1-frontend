import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('начисления', 'Начисленияs');
inflector.irregular('договора', 'Договораs');
inflector.irregular('договор', 'Договорs');
inflector.irregular('участок', 'Участокs');
inflector.irregular('оплаты', 'Оплатыs');

export default {};
