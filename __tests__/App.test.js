import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App/index';

Enzyme.configure({ adapter: new Adapter() });

test('App is rendering', () => {
  const app = shallow(<App />);

  expect(app.hasClass('container')).toEqual(true);
});
