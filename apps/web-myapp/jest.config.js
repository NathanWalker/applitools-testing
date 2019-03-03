module.exports = {
  name: 'web-myapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-myapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
