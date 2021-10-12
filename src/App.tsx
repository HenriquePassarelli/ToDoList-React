import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([ ]);

  const handleAddTadk = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleDone = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do List</C.Header>
        <AddArea onEnter={handleAddTadk}/>
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleDone}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
