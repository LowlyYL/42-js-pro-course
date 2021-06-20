import { useDispatch } from 'react-redux';
import { Button } from "antd";
import { filterActive, filterAll, filterDone } from '../../store/reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterActive = () => {
    dispatch(filterActive())
  }

  const onFilterAll = () => {
    dispatch(filterAll())
  }

  const onFilterDone = () => {
    dispatch(filterDone())
  }

return (
  <>
    <label>Show </label>
    <Button onClick={onFilterAll} >All</Button>
    <Button onClick={onFilterActive} >Active</Button>
    <Button onClick={onFilterDone} >Done</Button>
  </>
)};

export default Filter;
