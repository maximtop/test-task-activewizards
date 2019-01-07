import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DataStore from '../../store/DataStore';
import './style.css';

@observer
class Column extends Component {
  hideWidget = (widgetKey, dataKey) => (e) => {
    DataStore.hideWidget(widgetKey, dataKey);
  };
  renderWidgets(data, dataKey) {
    return Object.keys(data).map(widgetKey => {
      const { name, total_docs: totalDocs, hidden } = data[widgetKey];
      if (hidden) {
        console.log(name, totalDocs);
        return;
      }
      return <div className="row widget" key={widgetKey}>
        <div className="card bg-light mb-3">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-9">
                {name}
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-link" onClick={this.hideWidget(widgetKey, dataKey)}>Hide</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Total docs: {totalDocs}</h5>
          </div>
        </div>
      </div>;
    });
  }

  render() {
    const { data, title, dataKey } = this.props;
    return <div className="col mr-2 ml-2">
      <div className="row title justify-content-center p-2">
        <h2>
          {title}
        </h2>
      </div>
      <div className="row content justify-content-center">
        <div className="col">
          {this.renderWidgets(data, dataKey)}
        </div>
      </div>
    </div>;
  }
}

export default Column;
