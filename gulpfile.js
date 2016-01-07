const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const node = require('node-dev');
const source = require('vinyl-source-stream');

function errorHandler(err) {
  console.log('Error: ' + err.message);
}

// 自動ブラウザリロード
gulp.task('browser-sync', function() {
  browserSync({
    proxy: {
      target: 'http://localhost:4567'
    },
    port: 8080
  });
});

// JavaScriptへのビルド
// ES6かつJSXなファイルをbuild/bundle.jsへ変換する
gulp.task('build', function() {
  browserify({entries: ['./app.js']})
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}));
});

// ローカルサーバの起動
gulp.task('server', function() {
  node(['./server.js']);
});

// ファイル監視
// ファイルに更新があったらビルドしてブラウザをリロードする
gulp.task('watch', function() {
  gulp.watch('./app.js', ['build']);
  gulp.watch('./server.js', ['build']);
  gulp.watch('./index.html', ['build']);
  gulp.watch('./app/components/*.js', ['build']);
});

// gulpコマンドで起動した時のデフォルトタスク
gulp.task('default', ['server', 'build', 'watch', 'browser-sync']);
