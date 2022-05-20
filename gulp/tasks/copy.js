// Функция для копирование основного модуля и путей файлов
export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}