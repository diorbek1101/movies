import { Button, Tag } from 'antd';
import React from 'react';

const useCounter = (initialValue: number) => {
  const [count, setCount] = React.useState(initialValue);

  const methods = {
    increment: () => {
      setCount(count + 1);
    },
    decrement: () => {
      setCount(count - 1);
    },
    reset: () => {
      setCount(initialValue);
    }
  };

  return [count, methods] as const;
};

const Counter: React.FC = () => {
  const [count, { increment, decrement, reset }] = useCounter(20);

  return (
    <div className="container mx-auto flex gap-2 p-4">
      <Tag className="grid place-items-center">{count}</Tag>
      <Button.Group>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </Button.Group>
    </div>
  );
};

export default Counter;
