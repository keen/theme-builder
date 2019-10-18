import React from 'react'
import { shallow } from 'enzyme';
import Builder from '../../lib/components/Builder';
import { chartColorPalette } from '../../lib/utils/consts';

describe('<Builder />', () => {
  let wrapper;
  const dummyResponse = { result: 123 };

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(dummyResponse));
    wrapper = shallow(<Builder />);
  });

  it('Builder component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  
  it('should render list of available chart types', () => {
    expect(wrapper.find('.chart-types').length).toBe(1);
  })
  
  it('should render list of predefined color palettes', () => {
    expect(wrapper.find('.predefined-palette').length).toBe(1);
  })
  
  it('should render tabs', () => {
    expect(wrapper.find('.react-tabs__tab').length).toBe(3);
  })

  // it('should call copy to clipboard method when click on the button', () => {
  //   const copyToClipboard = jest.fn();
  //   wrapper.instance().handleClickToCopy = copyToClipboard;
  //   wrapper.find('.builder__btn-copy').first().simulate('click');
  //   expect(copyToClipboard).toBeCalled();
  // });

  describe('props given', () => {
    let wrapper;
    const onChange = jest.fn();
    const palette = { value: 'modern', label: 'Modern' };

    beforeEach(() => {
      wrapper = shallow(<Builder options={{ chartPalette: palette }} onChange={onChange} />);
    });

    // it('should update state with chosen color palette', () => {
    //   expect(wrapper.state().colors).toEqual(chartColorPalette['modern'].colors);
    // });

    it('should not render chart types once Dashboard Builder is active', () => {
      wrapper.setProps({ options: { isDashboardBuilderActive: true }});
      expect(wrapper.find('.chart-types').length).toBe(0);
    })

    it('should not render tabs once Dashboard Builder is active', () => {
      wrapper.setProps({ options: { isDashboardBuilderActive: true }});
      expect(wrapper.find('.react-tabs__tab').length).toBe(0);
    });
  })
});
