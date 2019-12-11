import Builder from './components/Builder';
import { getCSSCode } from './utils/helpers';

export default Builder;
export const getStyles = (data, id) => getCSSCode(data, id);
