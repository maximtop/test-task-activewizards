import { observable, action, computed } from 'mobx';
import data from '../api/api';

class DataStore {
  @observable data = {};

  constructor() {
    this.data = data;
  }

  @computed
  get getData() {
    return this.data;
  }

  @action
  hideWidget(widgetKey, dataKey) {
    this.data[dataKey][widgetKey].hidden = true;
  }
}

export default new DataStore();
