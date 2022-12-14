const am = 13;
const pmMin = 21;

const rendering = (time: number) => {
  const result = [];
  for (let i = 1; i < time; i++) {
    result.push(i);
  }
  return result;
};

const startTimeRendering = (pmMin: number) => {
  const result = [];
  for (let i = 0; i < pmMin; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
};

export const amTime = rendering(am);
export const pmTime = rendering(am - 2);
export const amStartTime = startTimeRendering(pmMin + 40);
export const pmStartTime = startTimeRendering(pmMin);
