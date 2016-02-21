'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');

let clientCopyTask = require('./tasks/client_copy');
let clientBuildTask = require('./tasks/client_build');
let clientTestTask = require('./tasks/client_test');
let stylesheetTask = require('./tasks/stylesheet');
let liveReloadTask = require('./tasks/livereload');
let browserSyncTask = require('./tasks/browserSync');
let generalCopyTask = require('./tasks/general_copy');
let cleanTask = require('./tasks/clean');
let protractorTask = require('./tasks/protractor');
let eslintTask = require('./tasks/eslint');

gulp.task('general-copy-dist', generalCopyTask());

gulp.task('livereload', liveReloadTask());
gulp.task('browserSync', browserSyncTask());

gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-copy-dist', clientCopyTask(true));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build-dist', clientBuildTask(true));
gulp.task('client-test', clientTestTask(true));
gulp.task('client-test-dev', clientTestTask(false));
gulp.task('client-stylesheet', stylesheetTask(false));
gulp.task('client-stylesheet-dist', stylesheetTask(true));
gulp.task('client-style', eslintTask());

gulp.task('clean', cleanTask());

gulp.task('serve', function(done) {
  runSequence(
    'clean',
    ['client-build', 'client-copy', 'client-stylesheet', 'livereload'],
    'browserSync',
    done
  )
});

gulp.task('test', function(done) {
  runSequence(
    'client-test',
    done
  )
});

gulp.task('test-dev', function(done) {
  runSequence(
    'client-test-dev',
    done
  )
});

gulp.task('test-e2e', protractorTask());

gulp.task('dist', function(done) {
  runSequence(
    'clean',
    ['client-build-dist', 'client-copy-dist', 'client-stylesheet-dist', 'general-copy-dist'],
    done
  );
});
