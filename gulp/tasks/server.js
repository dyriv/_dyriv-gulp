export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    notify: false, // true (чтобы включить подсказки об ошибках)
    port: 3000,
  });
}