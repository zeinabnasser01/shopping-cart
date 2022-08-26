import React from 'react';

function Filter(props) {
  const { size, handleFilterbysize, sort, handleFilterbysort } = props;
  return (
    <div className='filter'>
      <ul className='list-group'>
        <li className='list-group-item active' aria-current='true'>
          Filter
        </li>
        <li className='list-group-item'>Number of products : {} </li>
        <li className='list-group-item'>
          <label>Filter</label>
          <select
            value={size}
            className='form-control'
            onChange={handleFilterbysize}
          >
            <option value='ALL'>All</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </li>
        <li className='list-group-item'>
          <label>Order</label>
          <select
            value={sort}
            className='form-control'
            onChange={handleFilterbysort}
          >
            <option value='latest'>latest</option>
            <option value='highest'>Highest</option>
            <option value='lowest'>Lowest</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
