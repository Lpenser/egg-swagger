import { Service } from 'egg';

/**
 * Test Service
 */

const Group: object[] = [];
let GroupId = 1;
export default class Home extends Service {

  async createGroup(groupName) {
    const group = {
      id: GroupId++,
      groupName,
    };
    Group.push(group);
    return group;
  }
}
