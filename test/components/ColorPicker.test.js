import React from 'react'
import { mount } from 'enzyme';
import ColorPicker from '../../lib/ColorPicker';

describe('<ColorPicker />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ColorPicker />);
  });

  it('ColorPicker component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should open color picker popover on swatch click', () => {
    wrapper.find('.custom-color-picker__swatch').simulate('click');
    expect(wrapper.find('.custom-color-picker__popover').length).toBe(1);
  });

  it('should close color picker once click on cover', () => {
    wrapper.find('.custom-color-picker__swatch').simulate('click');
    wrapper.find('.custom-color-picker__cover').simulate('click');
    expect(wrapper.find('.custom-color-picker__popover').length).toBe(0);
  });

  describe('props given', () => {
    let wrapper;
    const onChange = jest.fn();
    const title = 'Test';
    const initialColor = 'black';
    const changedColor = 'red';

    beforeEach(() => {
      wrapper = mount(<ColorPicker title={title} initialColor={initialColor} onChange={onChange} />);
    });

    it('should render title', () => {
      expect(wrapper.find('.custom-color-picker__title').text()).toEqual(title);
    });

    it('should render initial color swatch', () => {
      expect(wrapper.find('.custom-color-picker__color').prop('style')).toHaveProperty('background', initialColor);
    });

    it('should render color value in input', () => {
      expect(wrapper.find('input').prop('value')).toEqual(initialColor.toUpperCase());
    });

    it('should call onChange once value is changed', () => {
      wrapper.find('input').simulate('change', { target: { value: changedColor }});
      expect(onChange).toHaveBeenCalled();
    });

    it('should change input value after change', () => {
      wrapper.find('input').simulate('change', { target: { value: changedColor }});
      expect(wrapper.find('input').prop('value')).toEqual(changedColor.toUpperCase());
    });

  });
});