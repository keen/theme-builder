import React from 'react'
import { shallow } from 'enzyme';
import Builder from '../../lib/Builder';
import { availableChartTypes, chartColorPalette, defaultColor } from '../../lib/config';


describe('<Builder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Builder />);
  });

  it('Builder component renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should generate list of available chart types', () => {
    expect(wrapper.find('.chart-types option').length).toBe(Object.keys(availableChartTypes).length);
  });
  
  it('should generate list of available color palettes', () => {
    expect(wrapper.find('.color-palette option').length).toBe(Object.keys(chartColorPalette).length + 1); // 'None' option
  });
  
  it('should open color picker on trigger click', () => {
    wrapper.find('.color-picker__trigger').first().simulate('click');
    expect(wrapper.find('.color-picker__picker').length).toBe(1);
  });
  
  it('should close color picker once click outside the picker', () => {
    wrapper.find('.color-picker__trigger').first().simulate('click');
    wrapper.find('.color-picker__cover').simulate('click');
    expect(wrapper.find('.color-picker__picker').length).toBe(0);
  });

  it('should render tabs', () => {
    expect(wrapper.find('.react-tabs__tab').length).toBe(3);
  })

  it('should render color palette item once click on Add button', () => {
    wrapper.find('.color-palette__list .btn-add').simulate('click');
    expect(wrapper.find('.color-palette__item').length).toBe(1);
  });

  it('should render default color value for title color input', () => {
    expect(wrapper.find('.color-picker__input').first().props().value).toEqual(defaultColor);
  });

  it('should call copy to clipboard method when click on the button', () => {
    const copyToClipboard = jest.fn();
    wrapper.instance().handleClickToCopy = copyToClipboard;
    wrapper.find('.builder__btn-copy').first().simulate('click');
    expect(copyToClipboard).toBeCalled();
  });

  describe('props given', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Builder chartPalette='modern' />);
    });

    it('should set chosen color palette if provided in props', () => {
      expect(wrapper.find('.color-palette__item').length).toBe(chartColorPalette['modern'].length);
    });

    it('should update state with chosen color palette', () => {
      expect(wrapper.state().colors).toEqual(chartColorPalette['modern']);
    });

    it('should add additional color to chosen palette once click on Add button', () => {
      wrapper.find('.color-palette__list button').last().simulate('click');
      expect(wrapper.find('.color-palette__item').length).toBe(chartColorPalette['modern'].length + 1);
    });

    it('should remove color from custom color palette once click on Remove button', () => {
      wrapper.find('.color-palette__list .btn-remove').last().simulate('click');
      expect(wrapper.find('.color-palette__item').length).toBe(chartColorPalette['modern'].length - 1);
    });
  })
});
