import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import "./DND.css";

interface Box {
  id: number;
  bg: string;
}

const DND2: React.FC = () => {
  const [box, setBox] = useState<Box[]>([
    { id: 0, bg: "red" },
    { id: 1, bg: "green" },
  ]);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newBox = Array.from(box);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBox(newBox);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="boxes">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ padding: 0 }}
            >
              {box.map(({ id, bg }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      style={{
                        userSelect: "none",
                        padding: "16px",
                        margin: "0 0 8px 0",
                        backgroundColor: bg,
                        borderRadius: "4px",
                        listStyle: "none",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <div
                        className={`box ${bg}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: bg,
                        }}
                      ></div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <h1>hello</h1>
    </>
  );
};

export default DND2;
