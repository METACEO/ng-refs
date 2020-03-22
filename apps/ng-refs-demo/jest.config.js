module.exports = {
  name: 'ng-refs-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-refs-demo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
