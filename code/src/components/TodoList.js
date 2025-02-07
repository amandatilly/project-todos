import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const TodoCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const TodoElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); ;
`;

const Child = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 15px 0 15px 0;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-size: 12px;

  p {
    margin: 2px;
  }
`;

const TodoText = styled.p`
  font-size: 14px;
`;

const TimeText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #84ba97;

  span {
    margin-right: 4px;
    font-size: 10px;
  }
`;

const NewTask = styled.input`
  /* pointer-events: none; */
  opacity: 0.3;
`;

const Delete = styled.button`
  border: none;
  background-color: transparent;
  opacity: 0.6;
  display: flex;
  justify-content: flex-start;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };
  return (
    <TodoCard>
      {items.map((item) => (
        <TodoElements key={item.id}>
          <Child>
            <NewTask
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <Text>
              <TodoText>{item.text}</TodoText>
              <TimeText>
                <span>
                  <i class="fas fa-calendar-day"></i>
                </span>
                {item.postedTime}
              </TimeText>
            </Text>
          </Child>
          <Child>
            <Delete onClick={() => onDeleteTodo(item.id)}>
              <i class="far fa-trash-alt"></i>
            </Delete>
          </Child>
        </TodoElements>
      ))}
    </TodoCard>
  );
};

export default TodoList;
