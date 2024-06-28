import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import "./DND.css";

interface Task {
  id: string;
  content: string;
}

const DND: React.FC = () => {
  const [data, setData] = useState<Task[]>([
    { id: "0", content: "Task 1" },
    { id: "1", content: "Task 2" },
    { id: "2", content: "Task 3" },
  ]);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newData = Array.from(data);
    const [draggedItem] = newData.splice(result.source.index, 1);
    newData.splice(result.destination.index, 0, draggedItem);
    setData(newData);
  };

  return (
    <div className="dnd-container">
      <div className="task-list">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ padding: 0 }}
              >
                {data.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={{
                          userSelect: "none",
                          padding: "16px",
                          margin: "0 0 8px 0",
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          listStyle: "none",
                          border: "1px solid lightgrey",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task.content}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default DND;