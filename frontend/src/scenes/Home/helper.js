import request from "@Services/apiService";

let fullList = [];

export const fetchList = async (onSuccess, onError = () => {}) => {
  try {
    const result = await request({
      method: 'GET',
      url: '/'
    });

    const countries = getUniqueItemByKey(result.data, 'country');
    fullList = result.data;
    onSuccess({
      list: result.data,
      countries
    });
  } catch (err) {
    onError(err);
  }
}

const getUniqueItemByKey = (arr, key) => {
  let obj = {};
  for (const item of arr) {
    const value = item[key];
    if (!value) {
      continue;
    }

    obj[value] = true;
  }

  return Object.keys(obj);
}

export const getFullList = () => fullList;
