type Photo = {
  width: number; // Ширина каждой фоторамки
  height: number; // Высота каждой фоторамки
  x: number; // Положение крепления фоторамки по x относительно верхнего левого угла пространства на стене
  y: number; // Положение крепления фоторамки по y относительно верхнего левого угла пространства на стене
};

/**
 * @param n - количество фоторамок
 * @param width - ширина области для фоторамок
 * @param height - высота области для фоторамок
 */
function solution(n: number, width: number, height: number): Photo[] {
  const columns = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / columns);
  const w = width / columns;
  const h = (w * height) / width;
  const result: Photo[] = [];
  const startY = (height - rows * h) / 2;

  const freeFields = rows * columns - n;

  for (let i = 0; i < n; i++) {
    let iColumn = (i + freeFields) % columns;
    let iRow = Math.floor(i / columns);

    if (!!freeFields) {
      iRow = Math.floor((i + freeFields) / columns);
      if (iRow === 0) {
        iColumn = (i + freeFields / 2) % columns;
      }
    }
  
    const photo: Photo = {
      width: w,
      height: h,
      x: Math.round(w * iColumn + w / 2),
      y: Math.round(h * iRow + startY)
    };

    result.push(photo);
  }

  return result;
}
solution(5, 100, 30);
