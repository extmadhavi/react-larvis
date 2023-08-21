interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

interface MenuCategory {
  items: MenuItem[];
}



const menuItems: MenuCategory = {
  items : [
      {
        label: "Users",
        path: "/users",
        icon: "user",
    },
    {
        label: "Acquisitions",
        path: "/acquisitions",
        icon: "graph",
      }
  ],
}
    
  


export default menuItems;
