/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
export const setPlanningTask = (array, { data }) => {
  const result = array.map(el => {
    const { _id: id } = el;
    return data.includes(id)
      ? {
          ...el,
          days: el.days.map(elem => {
            return data.includes(elem.date)
              ? { ...elem, isActive: !elem.isActive }
              : { ...elem };
          }),
        }
      : { ...el };
  });
  return result;
};

export const fetchingTask = (id, arr) => {
  let putBody;
  arr.forEach(el => (el._id === id ? (putBody = { days: el.days }) : null));
  console.log('putBody :', putBody);
  return putBody;
};
