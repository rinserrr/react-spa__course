// import PropTypes from 'prop-types';
import './vendor.css';


// 'vendor' is missing in props validation eslint
// Чтобы исправить ошибку, нужно добавить проверку типа для свойства vendor с помощью библиотеки prop-types.
function Vendor({vendor}) {
  return (
    <small className='classVendor'>Артикул: &nbsp;{vendor}</small>
  );
}

// Здесь мы импортировали PropTypes из библиотеки prop-types, добавили проверку типа для свойства vendor и указали, что это обязательное свойство (isRequired).
// Vendor.propTypes = {
//   vendor: PropTypes.string.isRequired,
// };

export default Vendor;
