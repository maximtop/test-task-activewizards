import confData from '../data/confidentiality_data.json';
import confLabels from '../data/confidentiality_labels.json';
import docData from '../data/doctype_data.json';
import docLabels from '../data/doctype_labels.json';
import langData from '../data/language_data.json';
import langLabels from '../data/language_labels.json';

const confBinding = 'id';
const docBinding = 'name';
const langBinding = 'name';

const aggregateData = (labels, data, binding) => [...labels, ...data].reduce((acc, label) => {
  const id = label[binding];
  const oldValue = acc[id] || {};
  acc[id] = { ...oldValue, ...label };
  return acc;
}, {});

const data = {
  confData: aggregateData(confLabels, confData, confBinding),
  docData: aggregateData(docLabels, docData, docBinding),
  langData: aggregateData(langLabels, langData, langBinding),
};


export default data;
