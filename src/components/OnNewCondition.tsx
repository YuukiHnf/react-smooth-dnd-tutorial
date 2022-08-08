import { useState } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";

const OnNewCondition = () => {
  const [lists, setLists] = useState(["banana", "hogehoge", "tomato"]);

  const onDrop = (dropResult: DropResult) => {
    // `DropResult` で型定義
    const { removedIndex, addedIndex } = dropResult;
    console.log("removeIndex", removedIndex, "addIndex", addedIndex);
    // console.log("")
  };

  return (
    <div>
      <Container
        groupName="1"
        onDrop={onDrop}
        dragHandleSelector=".dragHandleSelector"
      >
        {lists.map((list) => {
          return (
            <Draggable key={list}>
              <div className="dragHandleSelector">{list}</div>
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
};

export default OnNewCondition;
