import { Button } from "@/components/ui/button";

import { sidebarContents } from "@/data/sidebarContents";

function Sidebar() {
  return (
    <div className="h-full py-4 border-r space-y-4">
      {Object.values(sidebarContents).map((element, index) => {
        return (
          <div key={index} className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              {element.name}
            </h2>
            <div className="grid gap-y-1">
              {Object.values(element.children).map((element, index) => {
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    {element.icon}
                    {element.name}
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
