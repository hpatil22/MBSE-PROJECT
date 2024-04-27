const CollapasableButtonNav = ({
    menuContent = "Menu",
    subMenuContent = "Submenu",
    onMenuClick = () => {},
    onSubMenuClick = () => {},
    subMenuStyle = {},
    containerStyle = {},
  }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          cursor: "pointer",
          userSelect: "none",
          ...containerStyle,
        }}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
          onMenuClick(e);
        }}
      >
        {menuContent}
        <div
          style={{
            display: open ? "block" : "none",
            overflow: "hidden",
            // border: "1px solid red",
            padding: "8px",
            boxSizing: "border-box",
            ...subMenuStyle,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSubMenuClick(e);
          }}
        >
          {subMenuContent}
        </div>
      </div>
    );
  };