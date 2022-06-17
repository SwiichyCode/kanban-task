import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../Button";
import CustomSelect from "../Select";

import { FormWrapper } from "./style";

export default function Form() {
  const initialValue = [
    { name: "subtasks", placeholder: "e.g Make coffee", id: "" },
    { name: "subtasks", placeholder: "e.g Drink coffee & smile", id: "" },
  ];
  const [inputFields, setInputFields] = useState(initialValue);

  const addFields = () => {
    let newField = { name: "", placeholder: "e.g New Subtask...", id: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <FormWrapper>
      <div className="form-input">
        <label for="title">Title</label>
        <input
          type={"text"}
          id="title"
          name="title"
          required
          placeholder="e.g Take coffee break"
        />
      </div>
      <div className="form-input">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          required
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
      recharge the batteries a little."
        />
      </div>
      <div className="form-input">
        <label for="subtasks">Subtasks</label>
        <div className="content-input">
          {inputFields.map((item, index) => (
            <div className="input">
              <input
                key={index}
                type={"text"}
                id={item.id}
                placeholder={item.placeholder}
              />
              <MdClose
                color="#828FA3"
                size={"1.5em"}
                onClick={() => removeFields(index)}
              />
            </div>
          ))}
          <Button
            type={"button"}
            background={"rgba(99, 95, 199, 0.1)"}
            color={"#635FC7"}
            text={"+ Add New Subtask"}
            action={addFields}
          />
        </div>
      </div>
      <div className="form-input">
        <label for="status">Status</label>
        <CustomSelect />
      </div>
      <Button
        type={"submit"}
        background={"#635FC7"}
        color={"#FFFFFF"}
        text={"Create task"}
      />
    </FormWrapper>
  );
}
