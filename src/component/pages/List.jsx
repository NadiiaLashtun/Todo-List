import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import Item from "../Item";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../Spinner";
import Arrow from "../../../src/assets/arrow.png";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [taskDone, setTaskDone] = useState(0);
  const { quote, isLoading, error, fetchData } = useFetch();
  const navigate = useNavigate();

  //Input task
  const onChangeHandler = (e) => {
    return setTask(e.target.value);
  };

  //Add task
  const onClickHandler = () => {
    if (!task.trim()) return;
    const newList = [...list, { id: Date.now(), text: task }];
    setList(newList);
    setTask("");

    //Save changes
    console.log(list);
    localStorage.setItem("Task List", JSON.stringify(newList));
  };

  //Delete task
  const onDeleteHandler = (id) => {
    let filteredList = list.filter((task) => task.id !== id);
    setList(filteredList);
  };

  return (
    <div className="mx-auto max-h-[80vh] max-w-6xl rounded-4xl bg-mauve-400/10 p-20 text-center">
      <button onClick={() => navigate("/")}>
        <img
          src={Arrow}
          alt="Arrow"
          className="absolute top-16 left-16 h-auto w-30 cursor-pointer"
        />
      </button>
      <h1 className="mb-18 font-[Amsterdam-four] text-5xl font-extrabold text-brand underline underline-offset-12">
        Todo List
      </h1>
      <div className="mb-16">
        {isLoading ? <Spinner /> : <p className="mx-auto max-w-xl">{quote}</p>}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="mb-4 flex">
          <input
            type="text"
            value={task}
            className="rounded-tl-4xl rounded-bl-4xl bg-white/20 px-5 py-2.5 outline-1 outline-brand"
            onChange={onChangeHandler}
            onKeyDown={(event) => {
              if (event.key === "Enter") onClickHandler();
            }}
          />
          <input
            type="submit"
            className="cursor-pointer rounded-tr-4xl rounded-br-4xl bg-brand-secondary px-5 py-2.5"
            onClick={onClickHandler}
          />
        </div>

        {list.length > 0 && (
          <div>
            <p>
              Task amount: {list.length} /
              <span className="font-bold text-brand"> Done: {taskDone}</span>
            </p>
          </div>
        )}

        <ul className="max-h-[20vh] w-full flex-1 space-y-4 overflow-y-auto">
          {list.map((task) => {
            return (
              <Item
                key={task.id}
                id={task.id}
                text={task.text}
                onCheckChange={setTaskDone}
              >
                {
                  <Button
                    type="button"
                    text={
                      <XCircleIcon className="size-9 font-bold text-brand" />
                    }
                    onClick={() => onDeleteHandler(task.id)}
                  />
                }
              </Item>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default List;
