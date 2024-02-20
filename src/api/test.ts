import request from '@/services/index';

export async function getListApi(params: {
  /** 页数 */
  pageNum: number;
  /** 条数 */
  pageSize: number;
}): Promise<any> {
  return request(`/ohmApp/overhaul_quality_card/pageList`, {
    method: 'GET',
    params,
  });
}
