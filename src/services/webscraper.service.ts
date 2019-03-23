import { Service } from 'typedi';
import axios from 'axios';

@Service()
export class WebScraperService {
  public async scrape(url:string) {
    try {
      const response = await axios.get(url);
      return { success:true, data: response.data };
    }catch (e) {
      return { success:false, data: e.response.data };
    }
  }
}
