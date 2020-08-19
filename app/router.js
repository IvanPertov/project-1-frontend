import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-project-1-договор-l');
  this.route('i-i-s-project-1-договор-e',
  { path: 'i-i-s-project-1-договор-e/:id' });
  this.route('i-i-s-project-1-договор-e.new',
  { path: 'i-i-s-project-1-договор-e/new' });
  this.route('i-i-s-project-1-з-у-договора-l');
  this.route('i-i-s-project-1-з-у-договора-e',
  { path: 'i-i-s-project-1-з-у-договора-e/:id' });
  this.route('i-i-s-project-1-з-у-договора-e.new',
  { path: 'i-i-s-project-1-з-у-договора-e/new' });
  this.route('i-i-s-project-1-земельный-участок-l');
  this.route('i-i-s-project-1-земельный-участок-e',
  { path: 'i-i-s-project-1-земельный-участок-e/:id' });
  this.route('i-i-s-project-1-земельный-участок-e.new',
  { path: 'i-i-s-project-1-земельный-участок-e/new' });
  this.route('i-i-s-project-1-начисления-l');
  this.route('i-i-s-project-1-начисления-e',
  { path: 'i-i-s-project-1-начисления-e/:id' });
  this.route('i-i-s-project-1-начисления-e.new',
  { path: 'i-i-s-project-1-начисления-e/new' });
  this.route('i-i-s-project-1-оплаты-l');
  this.route('i-i-s-project-1-оплаты-e',
  { path: 'i-i-s-project-1-оплаты-e/:id' });
  this.route('i-i-s-project-1-оплаты-e.new',
  { path: 'i-i-s-project-1-оплаты-e/new' });
});

export default Router;
