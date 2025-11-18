export function makeLabelCanvas(size, name) {
  const borderSize = 2;
  const ctx = document.createElement('canvas').getContext('2d');
  const font =  `${size}px bold sans-serif`;
  ctx.font = font;
  
  const doubleBorderSize = borderSize * 2;
  const width = ctx.measureText(name).width + doubleBorderSize;
  const height = size + doubleBorderSize;

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  ctx.font = font;
  ctx.textBaseline = 'top';

  ctx.fillStyle = 'rgba(0, 0, 0, 0)';

  ctx.fillStyle = 'orange';
  ctx.fillText(name, 0, 0);

  return ctx.canvas;
}
