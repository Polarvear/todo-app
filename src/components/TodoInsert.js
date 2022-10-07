import { BiMessageSquareAdd } from 'react-icons/bi';
import { MdOutlineAdd } from 'react-icons/md';
import './TodoInsert.scss';

import React from 'react';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요." />
      <button type="submit">
        <MdOutlineAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
