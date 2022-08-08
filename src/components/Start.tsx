import React, { useState, ReactElement } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { TextField, Box } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
const Start = () => {
  const [items, setItems] = useState([
    {
      content: <TextField label="TextField 1" variant="outlined" />
    },
    {
      content: <TextField label="TextField 2" variant="outlined" />
    },
    {
      content: <TextField label="TextField 3" variant="outlined" />
    }
  ]);

  const onDrop = (dropResult: DropResult) => {
    // `DropResult` で型定義
    const { removedIndex, addedIndex } = dropResult;
    console.log("removeIndex", removedIndex, "addIndex", addedIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "row",
        marginTop: "50px",
        gap: "32px"
      }}
    >
      <Container
        groupName="1"
        getChildPayload={(i) => items[i]}
        dragHandleSelector=".dragHandleSelector" // ドラッグ用コンポーネントのセレクタを指定
        // lockAxis="y" // 軸の固定を指定
        onDrop={onDrop} // ドラッグ時に呼ばれる関数、dropResult が渡る
      >
        {items.map(({ content }, i) => {
          return (
            <Draggable key={`DraggableInputContainer-${i}-1`}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="8px"
              >
                {content}
                <DragHandleIcon className="dragHandleSelector" />
              </Box>
            </Draggable>
          );
        })}
      </Container>
      <Container
        groupName="1"
        getChildPayload={(i) => items[i]}
        dragHandleSelector=".dragHandleSelector" // ドラッグ用コンポーネントのセレクタを指定
        // lockAxis="y" // 軸の固定を指定
        onDrop={onDrop} // ドラッグ時に呼ばれる関数、dropResult が渡る
      >
        {items.map(({ content }, i) => {
          return (
            <Draggable key={`DraggableInputContainer-${i}-1`}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="8px"
              >
                {content}
                <DragHandleIcon className="dragHandleSelector" />
              </Box>
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
};

export default Start;
