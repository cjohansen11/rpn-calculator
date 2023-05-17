interface Store {
  previousResult: null | number;
  stack: number[];
}

const store: Store = {
  previousResult: null,
  stack: [],
};

export default store;
