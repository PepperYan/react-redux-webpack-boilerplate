import reducer from '../../models/reducers/shops';
import expect from 'expect';
import {FETCH_SHOPS_SUCCESS} from '../../models/actions/shops';

describe('shops reducer', () => {
  it('Should return the initial state', () => {
    expect(
      reducer([{ name:'iphone 6S',
        price:5800,
        description:"64G version",
        id: 0
      },
      { name:'华为 荣耀7',
        price:2000,
        description:"豪华版",
        id: 1
      },
      { name:'三星 GALAXY NOTE 5',
        price:4555,
        description:"最新机型哦",
        id: 2
      }], {'type':FETCH_SHOPS_SUCCESS})
    ).toEqual(
      [{ name:'iphone 6S',
        price:5800,
        description:"64G version",
        id: 0
      },
      { name:'华为 荣耀7',
        price:2000,
        description:"豪华版",
        id: 1
      },
      { name:'三星 GALAXY NOTE 5',
        price:4555,
        description:"最新机型哦",
        id: 2
      }]
    );
  });
})
