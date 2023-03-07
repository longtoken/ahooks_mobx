
import Request from '@utils/request';
import { searchListRequest } from '@utils/request/searchList';
import { Item, Result } from './interface';

export const getTableData = ({ current, pageSize }: { current: number; pageSize: number }, formData: Item): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return searchListRequest({ url: `/getList?${query}` })
};

export const addItem = (params: Partial<Item>) => {
  return Request({
    url: '/updateList',
    method: 'post',
    params
  })
};
