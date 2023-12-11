type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounterII(init: number): ReturnObj {
  const initialValue = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: (): number => {
      init = initialValue;
      return init;
    },
  };
}

/**
 * const counter = createCounterII(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
