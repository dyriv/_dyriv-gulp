// Удаляет файл из dist/files если его нет в src/files
import del from "del";
export const reset = () => {
  return del(app.path.clean);
} 