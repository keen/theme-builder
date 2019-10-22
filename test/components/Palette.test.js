import React from 'react'
import { shallow, mount } from 'enzyme';
import List from '../../lib/components/PaletteList';

describe('<List />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<List />);
  });

  it('List component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render Add button if props.colors are empty', () => {
    expect(wrapper.find('.btn-list').length).toBe(1);
  });

  // it('should render item once Add button is clicked', () => {
  //   wrapper.find('.btn-list').first().simulate('click');
  //   // expect(wrapper.find('.color-palette__item').length).toBe(1);
  // });

  // it('should render color picker once Edit button is clicked', () => {
  //   wrapper.find('.btn-list').first().simulate('click');
  //   wrapper.find('.color-palette__item').first().simulate('mouseenter');
  //   wrapper.find('.btn-edit').first().simulate('click');
  //   // expect(wrapper.find('.color-picker__popover').length).toBe(1);
  // });

  // it('should remove Item once Remove button is clicked', () => {
  //   wrapper.find('.btn-list').first().simulate('click');
  //   wrapper.find('.color-palette__item').first().simulate('mouseenter');
  //   wrapper.find('.btn-remove').first().simulate('click');
  //   expect(wrapper.find('.color-palette__item').length).toBe(0);
  // });

  describe('props given', () => {
    let wrapper;
    const onChange = jest.fn();
    const colors = ['white', 'red'];

    beforeEach(() => {
      wrapper = mount(<List colors={colors} onChange={onChange} />);
    });

    it('should render Items for each color from props', () => {
      expect(wrapper.find('.color-palette__item').length).toBe(colors.length);
    });

    it('should call onChange once Add button is clicked', () => {
      wrapper.find('.btn-list').first().simulate('click');
      expect(onChange).toBeCalled();
    });
  });
});