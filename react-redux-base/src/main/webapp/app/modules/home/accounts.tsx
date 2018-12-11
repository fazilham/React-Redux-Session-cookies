import './home.scss';
import React from 'react';
import ReactTable from 'react-table';

import selectTableHOC from 'react-table/lib/hoc/selectTable';
import treeTableHOC from 'react-table/lib/hoc/treeTable';

const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable));

export interface IHomeProp {
  onUpdateSearch: any;
  data: any;
}

export interface IHomeState {
  selectType: string;
  pivotBy: object;
  expanded: object;
  selection: any;
}

export class Accounts extends React.Component<IHomeProp, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      selection: [],
      selectType: 'checkbox',
      pivotBy: ['orgName'],
      expanded: {}
    };
    this.updateValue = this.updateValue.bind(this);
  }
  getColumns() {
    const columns = [];
    columns.push({
      Header: 'Name',
      accessor: 'orgName',
      resizable: false,
      headerClassName: 'table-header-none'
    });
    columns.push({
      Header: 'Account Names',
      accessor: 'name',
      Cell: row => (
        <a href="#">{row.value}</a>
      ),
      resizable: false,
      headerClassName: 'table-header'
    });
    columns.push({
      Header: () => (
        <div> <input type="text" onChange={this.updateValue} placeholder={'search...'} /></div>
      ),
      sortable: false,
      headerClassName: 'table-header',
      resizable: false
    });
    columns.push({
      Header: 'Created',
      accessor: 'creationTime',
      filterable: false,
      Cell: row => (
        <div className={'date'}>{row.value === null ? ' - ' : new Date(row.value).toLocaleDateString()}</div>
      ),
      headerClassName: 'table-header',
      resizable: false
    });
    return columns;
  }
  updateValue(e) {
    const searchValue = e.target.value;
    this.props.onUpdateSearch(searchValue);
  }
  onExpandedChange = expanded => {
    this.setState({ expanded });
  }
  render() {
    const { onExpandedChange } = this;
    const data = this.props.data.originalData;
    const { selectType, pivotBy, expanded } = this.state;
    const extraProps = { selectType, pivotBy, expanded, onExpandedChange };

    return (
          <SelectTreeTable
            data={data}
            columns={this.getColumns()}
            className={'dash-accounts -striped -highlight'}
            {...extraProps}
            showPagination={false}
            style={{
              height: '600px'
            }}
            defaultSorted={[
              { id: 'orgName' },
              { id: 'name' }
            ]}
            showPageSizeOptions={false}
          />
    );
  }
}

export default Accounts;
