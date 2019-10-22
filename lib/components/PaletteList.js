import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import {
  SketchPicker
} from 'react-color';
import isEqual from 'lodash.isequal';
import {  defaultColor } from '../utils/consts';
import EditIcon from '../assets/icons/edit.svg';
import RemoveIcon from '../assets/icons/remove-x.svg';

const DragHandle = sortableHandle(() => <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}></div>);

const Item = sortableElement(props => {
  const { value, index, removeItem, changeColor, shouldOpenPicker } = props;
  const [isPickerOpen, setPicker] = useState(false);
  const openPicker = () => setPicker(true);
  const closePicker = () => setPicker(false);
  useEffect(() => {
    if (shouldOpenPicker) {
      openPicker();
    }
  }, []);
  return (
    <div className="color-palette__item">
      <button className="color-palette__button btn-remove"
        type="button"
        onClick={() => removeItem(index)}
        style={{
          opacity: 0,
        }}>
        <RemoveIcon />
      </button>
      <button className="color-palette__button btn-edit"
        type="button"
        onClick={openPicker}
        style={{
          opacity: 0,
        }}>
        <EditIcon />
      </button>
      <div className="color-palette__trigger" style={{
        backgroundColor: value,
        width: '134px',
        height: '34px',
        padding: '5px',
        border: '1px solid #ccc',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        }}>
        <DragHandle/>
      </div>
      { isPickerOpen
        ? 
        <div className="color-picker__popover">
          <div className="color-picker__cover" onClick={closePicker}></div>
          <SketchPicker
            className='color-picker__picker'
            color={value}
            onChangeComplete={ event => changeColor(event.hex, index) }
            disableAlpha={true} />
        </div>              
        : null }
    </div>
  );
});

const Container = sortableContainer(({children}) => {
  return <div className="color-palette__list">{children}</div>;
});

const List = (props) => {
  const { colors, onChange } = props;
  const [ stateColors, setStateColors ] = useState([...colors]);
  const [ shouldOpenPicker, setOpenPicker ] = useState(false);
  const prevColorsRef = useRef();
  const prevColors = prevColorsRef.current;
  useEffect(() => {
    prevColorsRef.current = stateColors;
    if (!isEqual(stateColors, colors)) {
      onChange(stateColors);
    }
    if (!isEqual(prevColors, colors)) {
      setStateColors(colors);
    }
    setOpenPicker(false);
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    const sortedColors = arrayMove(stateColors, oldIndex, newIndex);
    setStateColors(sortedColors);
  };

  const addItem = () => {
    const addedColors = [...stateColors, defaultColor];
    setStateColors(addedColors);
    setOpenPicker(true);
  }

  const removeItem = (index) => {
    const removedColors = [...stateColors];
    removedColors.splice(index,1);
    setStateColors(removedColors);
  };

  const changeColor = (color, index) => {
    const changedColors = [...stateColors];
    changedColors[index] = color;
    setStateColors(changedColors);
  };

  return (
    <div className="color-palette">
      <Container onSortEnd={onSortEnd} useDragHandle axis='xy' helperClass="color-palette__item-drag">
        {stateColors.map((value, index) => (
          <Item key={`color-${index}`} index={index} value={value} removeItem={removeItem} changeColor={changeColor} shouldOpenPicker={shouldOpenPicker} />
        ))}
      </Container>
      <button className="btn-list btn" type="button" onClick={addItem}>Add</button>
    </div>
  );
};

export default List;

List.propTypes = {
  colors: PropTypes.array,
  onChange: PropTypes.func,
};

List.defaultProps = {
  colors: [],
  onChange: () => {},
}