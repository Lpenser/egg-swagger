
import { Controller } from 'egg';
import { Get, IgnoreJwtAll, TagsAll, Description } from 'egg-shell-decorators';

@TagsAll('测试')
@IgnoreJwtAll
export default class HomeController extends Controller {
  @Get('/')
  @Description('test')
  async create() {
    return 'hi, egg';
  }
}
