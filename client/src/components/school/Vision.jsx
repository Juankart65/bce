import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className="text-blue-500">Visión</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold ">Visión</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
