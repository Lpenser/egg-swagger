import { Controller } from 'egg';
import { Get, IgnoreJwtAll, TagsAll, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('测试')
@IgnoreJwtAll
@Prefix('/test')
export default class HomeController extends Controller {
  @Get('/')
  @Description('test')
  async create() {
    return 'hi, egg';
  }
}