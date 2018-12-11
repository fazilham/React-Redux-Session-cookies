import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Button,
  NavLink,
  FormText,
  Alert
} from 'reactstrap';

import { getSession, logout } from 'app/shared/reducers/authentication';
import ReactTable from 'react-table';
import Accounts from './accounts';

export interface IHomeProp extends StateProps, DispatchProps {

}

/*let accountData: any = localStorage.getItem('ACCOUNT_DATA');
let data: any = '';
console.log('localStorage - ACCOUNT_DATA');
console.log(accountData);
if (accountData) {
  accountData = JSON.parse(accountData);
  data = accountData.orgToAccounts.Actions;
}*/

const profileData = {
  id: 430,
  email: 'mfazil@zetaglobal.com',
  name: 'mfazil@zetaglobal.com',
  hashedPassword: 'zIASrt/au91bs7FsugmRU5xzqjINu766xE3cdXAOF2xB4FYGTy/RlzkR6uniKmvAza7vRygd6eTXsmTyvryJsw==',
  firstName: 'Fazil',
  lastName: 'Munaver Jan',
  orgToAccounts: {
    'Smarter.com': [
      {
        id: 1529,
        name: 'Smarter.com - Men\'s Clothing (1529)',
        userCount: 28,
        orgId: 69,
        orgName: 'Smarter.com',
        creatorId: 166,
        creationTime: 1358793624000,
        key: 'smarter.com - men\'s clothing (1529)'
      }
    ],
    'Adchemy Alpha': [
      {
        id: 1479,
        name: 'Cars.com - New Cars - Alpha',
        userCount: 17,
        orgId: 59,
        orgName: 'Adchemy Alpha',
        creatorId: 166,
        creationTime: 1354303214000,
        key: 'cars.com - new cars - alpha'
      },
      {
        id: 1540,
        name: 'Home Depot - Plumbing - Alpha',
        userCount: 3,
        orgId: 59,
        orgName: 'Adchemy Alpha',
        creatorId: 166,
        creationTime: 1360361144000,
        key: 'home depot - plumbing - alpha'
      }
    ],
    'Cellware': [
      {
        id: 154,
        name: 'Cellware Test',
        userCount: 4,
        orgId: 9,
        orgName: 'Cellware',
        creatorId: 159,
        creationTime: null,
        key: 'cellware test'
      }
    ],
    'Staples': [
      {
        id: 1526,
        name: 'Staples - Banners and Signs (1526)',
        userCount: 24,
        orgId: 68,
        orgName: 'Staples',
        creatorId: 166,
        creationTime: 1358287778000,
        key: 'staples - banners and signs (1526)'
      },
      {
        id: 1527,
        name: 'Staples - Labels (1527)',
        userCount: 24,
        orgId: 68,
        orgName: 'Staples',
        creatorId: 166,
        creationTime: 1358287810000,
        key: 'staples - labels (1527)'
      }
    ],
    'Babies R Us': [
      {
        id: 1469,
        name: 'Babies R Us - Strollers Broad (1469)',
        userCount: 29,
        orgId: 53,
        orgName: 'Babies R Us',
        creatorId: 166,
        creationTime: 1351881162000,
        key: 'babies r us - strollers broad (1469)'
      },
      {
        id: 1346,
        name: 'Babies R Us - Safety (1346)',
        userCount: 32,
        orgId: 53,
        orgName: 'Babies R Us',
        creatorId: 190,
        creationTime: 1343863493000,
        key: 'babies r us - safety (1346)'
      },
    ],
    'Cars.com': [
      {
        id: 1377,
        name: 'Cars.com - CarsNew (1377)',
        userCount: 33,
        orgId: 46,
        orgName: 'Cars.com',
        creatorId: 166,
        creationTime: 1346110670000,
        key: 'cars.com - carsnew (1377)'
      },
      {
        id: 1378,
        name: 'Cars.com - CarsUsed (1378)',
        userCount: 32,
        orgId: 46,
        orgName: 'Cars.com',
        creatorId: 166,
        creationTime: 1346111540000,
        key: 'cars.com - carsused (1378)'
      }
    ],
    'Bloomingdale\'s': [
      {
        id: 1329,
        name: 'Bloomingdale\'s - Bedding (1329)',
        userCount: 31,
        orgId: 50,
        orgName: 'Bloomingdale\'s',
        creatorId: 190,
        creationTime: 1343757316000,
        key: 'bloomingdale\'s - bedding (1329)'
      },
      {
        id: 1323,
        name: 'Bloomingdale\'s - Cookware (1323)',
        userCount: 32,
        orgId: 50,
        orgName: 'Bloomingdale\'s',
        creatorId: 190,
        creationTime: 1343270488000,
        key: 'bloomingdale\'s - cookware (1323)'
      },
      {
        id: 1427,
        name: 'Bloomingdale\'s - Dinnerware 2 (1427)',
        userCount: 37,
        orgId: 50,
        orgName: 'Bloomingdale\'s',
        creatorId: 363,
        creationTime: 1347907884000,
        key: 'bloomingdale\'s - dinnerware 2 (1427)'
      }
    ],
    'System': [
      {
        id: 1461,
        name: 'aaDeployTest',
        userCount: 0,
        orgId: 20,
        orgName: 'System',
        creatorId: 128,
        creationTime: 1351185129000,
        key: 'aadeploytest'
      }
    ],
    'Advance Auto Parts': [
      {
        id: 1108,
        name: 'AAP-Brakes',
        userCount: 32,
        orgId: 33,
        orgName: 'Advance Auto Parts',
        creatorId: 100,
        creationTime: 1354054213000,
        key: 'aap-brakes'
      },
      {
        id: 1109,
        name: 'AAP-Suspension',
        userCount: 32,
        orgId: 33,
        orgName: 'Advance Auto Parts',
        creatorId: 100,
        creationTime: 1354054271000,
        key: 'aap-suspension'
      },
      {
        id: 1104,
        name: 'AAP-Batteries',
        userCount: 32,
        orgId: 33,
        orgName: 'Advance Auto Parts',
        creatorId: 100,
        creationTime: 1354053918000,
        key: 'aap-batteries'
      }
    ],
    'Tech Services': [
      {
        id: 1534,
        name: 'Orbitz Test (1534)',
        userCount: 0,
        orgId: 32,
        orgName: 'Tech Services',
        creatorId: 166,
        creationTime: 1359400660000,
        key: 'orbitz test (1534)'
      },
      {
        id: 1505,
        name: 'Cole Haan Test (1505)',
        userCount: 0,
        orgId: 32,
        orgName: 'Tech Services',
        creatorId: 166,
        creationTime: 1357258023000,
        key: 'cole haan test (1505)'
      }
    ],
    'US-Mattress': [
      {
        id: 1500,
        name: 'US-Mattress - Mattresses (1500)',
        userCount: 30,
        orgId: 62,
        orgName: 'US-Mattress',
        creatorId: 166,
        creationTime: 1355774481000,
        key: 'us-mattress - mattresses (1500)'
      }
    ],
    'Orbitz': [
      {
        id: 1546,
        name: 'Orbitz - Hotels (1546)',
        userCount: 29,
        orgId: 70,
        orgName: 'Orbitz',
        creatorId: 166,
        creationTime: 1361903999000,
        key: 'orbitz - hotels (1546)'
      },
      {
        id: 1539,
        name: 'Orbitz - Hotels (1539)',
        userCount: 29,
        orgId: 70,
        orgName: 'Orbitz',
        creatorId: 166,
        creationTime: 1360009504000,
        key: 'orbitz - hotels (1539)'
      }
    ],
    'Adchemy Demo 2': [
      {
        id: 1458,
        name: 'Kelsey Pahl Demo (1458)',
        userCount: 4,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1351101090000,
        key: 'kelsey pahl demo (1458)'
      },
      {
        id: 1549,
        name: 'Albert Acejo Demo (1549)',
        userCount: 1,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1362524120000,
        key: 'albert acejo demo (1549)'
      },
      {
        id: 1456,
        name: 'Mher Sousanian Demo (1456)',
        userCount: 1,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1350338969000,
        key: 'mher sousanian demo (1456)'
      },
      {
        id: 1481,
        name: 'Travel - Hotels Demo (1481)',
        userCount: 4,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1354313543000,
        key: 'travel - hotels demo (1481)'
      },
      {
        id: 1548,
        name: 'Hector Sagrado Demo (1548)',
        userCount: 2,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1362524081000,
        key: 'hector sagrado demo (1548)'
      },
      {
        id: 1482,
        name: 'Travel - Cruises Demo (1482)',
        userCount: 4,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1354313586000,
        key: 'travel - cruises demo (1482)'
      },
      {
        id: 1464,
        name: 'Term Graph Playground (1464)',
        userCount: 6,
        orgId: 54,
        orgName: 'Adchemy Demo 2',
        creatorId: 166,
        creationTime: 1351800209000,
        key: 'term graph playground (1464)'
      }
    ],
    'Golfsmith': [
      {
        id: 1113,
        name: 'Golfsmith - Golf Clubs',
        userCount: 37,
        orgId: 36,
        orgName: 'Golfsmith',
        creatorId: 190,
        creationTime: 1327030950000,
        key: 'golfsmith - golf clubs'
      },
      {
        id: 1114,
        name: 'Golfsmith - Golf Apparel',
        userCount: 38,
        orgId: 36,
        orgName: 'Golfsmith',
        creatorId: 190,
        creationTime: 1327031012000,
        key: 'golfsmith - golf apparel'
      }
    ],
    'Evi Doc Test': [
      {
        id: 1061,
        name: 'Account-Test',
        userCount: 0,
        orgId: 31,
        orgName: 'Evi Doc Test',
        creatorId: 257,
        creationTime: 1320168833000,
        key: 'account-test'
      }
    ],
    'TransUnion': [
      {
        id: 150,
        name: 'TransUnion Test',
        userCount: 6,
        orgId: 15,
        orgName: 'TransUnion',
        creatorId: 159,
        creationTime: null,
        key: 'transunion test'
      }
    ],
    'Toys R Us': [
      {
        id: 1537,
        name: 'Toys R Us - Gifts by Age (1537)',
        userCount: 26,
        orgId: 56,
        orgName: 'Toys R Us',
        creatorId: 166,
        creationTime: 1359499669000,
        key: 'toys r us - gifts by age (1537)'
      },
      {
        id: 1394,
        name: 'Toys R Us - Video Games (1394)',
        userCount: 29,
        orgId: 56,
        orgName: 'Toys R Us',
        creatorId: 190,
        creationTime: 1346779542000,
        key: 'toys r us - video games (1394)'
      },
      {
        id: 1538,
        name: 'Toys R Us - Tablets/E&E (1538)',
        userCount: 25,
        orgId: 56,
        orgName: 'Toys R Us',
        creatorId: 166,
        creationTime: 1359574034000,
        key: 'toys r us - tablets/e&e (1538)'
      },
      {
        id: 1396,
        name: 'Toys R Us - Building Sets (1396)',
        userCount: 29,
        orgId: 56,
        orgName: 'Toys R Us',
        creatorId: 190,
        creationTime: 1346779907000,
        key: 'toys r us - building sets (1396)'
      }
    ],
    'Barnes & Noble': [
      {
        id: 1126,
        name: 'Barnes & Noble - Cameras & Photo Equipment',
        userCount: 30,
        orgId: 37,
        orgName: 'Barnes & Noble',
        creatorId: 100,
        creationTime: 1354054622000,
        key: 'barnes & noble - cameras & photo equipment'
      },
      {
        id: 1130,
        name: 'Barnes & Noble - Kitchen',
        userCount: 30,
        orgId: 37,
        orgName: 'Barnes & Noble',
        creatorId: 100,
        creationTime: 1354054688000,
        key: 'barnes & noble - kitchen'
      },
      {
        id: 1125,
        name: 'Barnes & Noble - Audio Electronics',
        userCount: 29,
        orgId: 37,
        orgName: 'Barnes & Noble',
        creatorId: 100,
        creationTime: 1354054490000,
        key: 'barnes & noble - audio electronics'
      },
      {
        id: 1132,
        name: 'Barnes & Noble - Toys & Games',
        userCount: 29,
        orgId: 37,
        orgName: 'Barnes & Noble',
        creatorId: 100,
        creationTime: 1354054744000,
        key: 'barnes & noble - toys & games'
      }
    ],
    'Modcloth': [
      {
        id: 1251,
        name: 'Modcloth - Dresses (1251)',
        userCount: 33,
        orgId: 47,
        orgName: 'Modcloth',
        creatorId: 190,
        creationTime: 1337642455000,
        key: 'modcloth - dresses (1251)'
      },
      {
        id: 1473,
        name: 'Modcloth - Dresses B2 (1473)',
        userCount: 31,
        orgId: 47,
        orgName: 'Modcloth',
        creatorId: 190,
        creationTime: 1352943698000,
        key: 'modcloth - dresses b2 (1473)'
      },
      {
        id: 1252,
        name: 'Modcloth - Teen Clothes (1252)',
        userCount: 40,
        orgId: 47,
        orgName: 'Modcloth',
        creatorId: 190,
        creationTime: 1337642563000,
        key: 'modcloth - teen clothes (1252)'
      }
    ],
    'Home Depot': [
      {
        id: 1308,
        name: 'THD - Plumbing (1308)',
        userCount: 31,
        orgId: 26,
        orgName: 'Home Depot',
        creatorId: 190,
        creationTime: 1342221186000,
        key: 'thd - plumbing (1308)'
      },
      {
        id: 1046,
        name: 'Appliances',
        userCount: 22,
        orgId: 26,
        orgName: 'Home Depot',
        creatorId: 100,
        creationTime: 1354054829000,
        key: 'appliances'
      },
      {
        id: 1562,
        name: 'THD - Roofing (1562)',
        userCount: 25,
        orgId: 26,
        orgName: 'Home Depot',
        creatorId: 166,
        creationTime: 1367516534000,
        key: 'thd - roofing (1562)'
      }
    ],
    'TestPerformanceMetrics': [
      {
        id: 27,
        name: 'test27',
        userCount: 6,
        orgId: 64,
        orgName: 'TestPerformanceMetrics',
        creatorId: 363,
        creationTime: 1357945181000,
        key: 'test27'
      },
      {
        id: 28,
        name: 'test28',
        userCount: 6,
        orgId: 64,
        orgName: 'TestPerformanceMetrics',
        creatorId: 363,
        creationTime: 1357945203000,
        key: 'test28'
      }
    ]
  }
};

const data = profileData;
const allOrgs = data.orgToAccounts;
const orgToAccounts = [];

let key: string;
let skey: string;
for (key in allOrgs) {
  if (allOrgs.hasOwnProperty(key)) {
    for (skey in allOrgs[key]) {
      if (allOrgs[key].hasOwnProperty(skey)) {
        orgToAccounts.push(allOrgs[key][skey]);
      }
    }
  }
}

export interface IHomeState {
  originalData: any;
}
export class Home extends React.Component<IHomeProp, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      originalData: orgToAccounts
    };
    this.filterAccount = this.filterAccount.bind(this);
  }
  componentDidMount() {
    this.props.getSession();
  }
  filterAccount(searchValue) {
    const org = orgToAccounts;
    const filteredData = new Array();
    if (searchValue === '') {
      this.resetAccount();
    } else {
      let i: string;
      for (i in org) {
        if (org.hasOwnProperty(i)) {
          if (org[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredData.push(org[i]);
          }
        }
      }
      this.setState({
        originalData: filteredData
      });
    }
  }
  resetAccount() {
    this.setState({
      originalData: orgToAccounts
    });
  }
  render() {
    /*const { account } = this.props;*/
    return (
      <Row className="main">
        <div className="container-fluid">
          <div className="row m-b-lg">
            <div className="col home-title">
              <h1>System Dashboard </h1>
            </div>
          </div>

          <div className="row mid-box">
            <div className="col">
              <div className="cont-box">
                <div className="title-bar">Activity Stream</div>
                <div className="activity-stream">{<img src={require('app/images/activity-stream.jpg')} />}</div>
              </div>
            </div>
            <div className="col">
              <div className="cont-box">
                <div className="title-bar">AcCOUNTS</div>
                <Accounts onUpdateSearch={this.filterAccount} data={this.state} />
              </div>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession, logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
