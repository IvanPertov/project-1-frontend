import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-project-1-контр-договора', 'Unit | Serializer | i-i-s-project-1-контр-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-project-1-контр-договора',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
