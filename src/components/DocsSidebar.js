import React from "react";
import Sidebar from "./Sidebar";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "Docs"},
  {
    name: "Car",
    items: [
      { name: "Insurence" },
      { name: "Treatment"}
    ]
  },
  "divider",
  {
    name: "Housing",
    items: [
          {
            name: "House1",
            items: [
              { name: "schedule" },
              { name: "frequency"}
            ]
        },
        {
            name: "House2",
            items: [
                { name: "schedule" },
                { name: "frequency"}  
            ]
        }
    ]
    },
    "divider",
    {
        name: "Personal",
        items: [
              {
                name: "Eli",
                items: [
                  { name: "ID" },
                  { name: "fPasport"}
                ]
            },
            {
                name: "Perah",
                items: [
                    { name: "ID" },
                    { name: "Pasport"}  
                ]
            }
        ]
    },
    "divider"   
]

function DocsSidebar() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default DocsSidebar;