import React from "react";
import { EmptyTaskWrapper } from "./style";
import Button from "../../Button";

export default function EmptyTask() {
  return (
    <EmptyTaskWrapper>
      <div>
        <span>This board is empty. Create a new column to get started.</span>
        <Button text="+ Add New Column" style={{ maxWidth: 174 }} />
      </div>
    </EmptyTaskWrapper>
  );
}
