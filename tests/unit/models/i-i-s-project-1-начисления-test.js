import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-project-1-начисления', 'Unit | Model | i-i-s-project-1-начисления', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-project-1-договор',
    'model:i-i-s-project-1-з-у-договора',
    'model:i-i-s-project-1-земельный-участок',
    'model:i-i-s-project-1-контр-договора',
    'model:i-i-s-project-1-контрагент',
    'model:i-i-s-project-1-начисления',
    'model:i-i-s-project-1-оплаты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
