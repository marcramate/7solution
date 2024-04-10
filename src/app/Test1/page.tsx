"use client";
import React, { useState, useEffect } from "react";

import { Button, Card } from "antd";

type Items = {
  type: "Fruit" | "Vegetable";
  name: string;
};

export default function TodoList() {
  const [todolist, setTodolist] = useState<Items[]>([
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ]);

  const [fruit, setFruit] = useState<Items[]>([]);
  const [vegetable, setVegetable] = useState<Items[]>([]);

  const MoveList = (item: Items) => {
    if (item.type == "Fruit") {
      setFruit((prevFruit) => [...prevFruit, item]);
    } else {
      setVegetable((prevVegetable) => [...prevVegetable, item]);
    }
    setTodolist((prevTodolist) =>
      prevTodolist.filter((lis) => lis.name !== item.name)
    );
  };

  const MoveBack = (item: Items) => {
    setTodolist((prevTodolist) => [...prevTodolist, item]);
    if (item.type == "Fruit") {
      setFruit((prevFruit) =>
        prevFruit.filter((lis) => lis.name !== item.name)
      );
    } else {
      setVegetable((prevVegetable) =>
        prevVegetable.filter((lis) => lis.name !== item.name)
      );
    }
  };

  useEffect(() => {
    const Setinter = setInterval(() => {
      if (fruit.length > 0) {
        setTodolist((prevTodolist) => [...prevTodolist, fruit[0]]);
        setFruit((prevFruit) => prevFruit.slice(1));
      }

      if (vegetable.length > 0) {
        setTodolist((prevTodolist) => [...prevTodolist, vegetable[0]]);
        setVegetable((prevVegetable) => prevVegetable.slice(1));
      }
    }, 5000);
    return () => clearInterval(Setinter);
  }, [fruit, vegetable]);

  return (
    <div>
      <h1 className="flex justify-center mt-4">Auto Delete Todo List</h1>
      {/* <div className="mb-4"></div> */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div>
            <Card title="List">
              {todolist.map((item, index) => (
                <div key={index}>
                  <Button className="mb-2" onClick={() => MoveList(item)}>
                    {item.name}{" "}
                  </Button>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <Card title="Fruits">
              {fruit.map((item, index) => (
                <div key={index}>
                  <Button className="mb-2" onClick={() => MoveBack(item)}>
                    {item.name}
                  </Button>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <Card title="Vegetable">
              {vegetable.map((item, index) => (
                <div key={index}>
                  <Button className="mb-2" onClick={() => MoveBack(item)}>
                    {item.name}
                  </Button>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
