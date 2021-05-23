import { AxiosError, AxiosResponse, AxiosPromise } from 'axios';
import AxiosBase from 'src/services/apis';
/**
 * このクラス内で利用する interface を以下に定義する
 */

const error = (error: AxiosError) => {
  console.log(error);
  return error;
};

class ViewCardList extends AxiosBase {
  getViewBookMark(id: string) {
    return this.axiosCustomInstance.get(`/articles/${id}`).catch(error);
  }
}
const viewCardList = new ViewCardList('http://localhost:8080');
export default viewCardList;
