const rendering = () => {
  const result = [];
  for (let i = 1; i < 13; i++) {
    result.push(i);
  }
  return result;
};

const startTimeRendering = () => {
  const result = [];
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
};

export const time = rendering();
export const startTime = startTimeRendering();
