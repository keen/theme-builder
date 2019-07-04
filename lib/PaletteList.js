import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
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
import {  defaultColor } from './config';

const DragHandle = sortableHandle(() => <div style={{ color: 'rgba(255, 255, 255, 0.4)'}}>&harr;</div>);

const Item = sortableElement(props => {
  const { value, index, removeItem, changeColor } = props;
  const [isPickerOpen, setPicker] = useState(false);
  const openPicker = () => {
    setPicker(true);
  };
  const closePicker = () => {
    setPicker(false);
  };
  return (
    <div className="color-palette__item">
      <button className="color-palette__button btn-remove"
        type="button"
        onClick={() => removeItem(index)}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          color: 'red',
          padding: '3px 6px',
          backgroundColor: 'white',
          border: 'none',
          display: 'none',
        }}>
        &times;
      </button>
      <button className="color-palette__button btn-edit"
        type="button"
        onClick={openPicker}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 1,
          width: '100%',
          display: 'none',
        }}>
        Edit
      </button>
      <div className="color-palette__trigger" style={{
        backgroundColor: value,
        width: '50px',
        height: '50px',
        padding: '2px',
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

export const List = (props) => {
  const { colors, onChange } = props;
  const [ stateColors, setStateColors ] = useState([...colors]);
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
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    const sortedColors = arrayMove(stateColors, oldIndex, newIndex);
    setStateColors(sortedColors);
  };

  const addItem = () => {
    const addedColors = [...stateColors, defaultColor];
    setStateColors(addedColors);
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
    <>
    <Container onSortEnd={onSortEnd} useDragHandle axis='xy'>
      {stateColors.map((value, index) => (
        <Item key={`color-${index}`} index={index} value={value} removeItem={removeItem} changeColor={changeColor} />
      ))}
      <button className="color-palette__button btn-list btn" type="button" onClick={addItem}>Add</button>
    </Container>
    </>
  );
};