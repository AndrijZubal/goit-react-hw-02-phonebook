import React from 'react'
import PropTypes from 'prop-types';
import filterCss from './Filter.module.css';
// 
const Filter = ({ value, changeFilter }) => {
  return (
      <div
        className={filterCss.box}
      >
      <label>
        <input
          type="text"
          className={filterCss.input}
          placeholder="Enter name"
          name="filter"
          onChange={changeFilter}
          value={value}
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;



// const Filter = ({ value, changeFilter }) => {
//     console.log(value);
//     return (
//         <div >
            
//             <label>
//                     Find contacts by name
//                 <input type='text'
//                         name='filter'
//                         value={value}
//                         onChange={changeFilter}
//                     className={filterCss.input}></input>
//             </label>
            
//         </div>
//     );
// };


// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     changeFilter: PropTypes.func.isRequired,
// };

// export default Filter;