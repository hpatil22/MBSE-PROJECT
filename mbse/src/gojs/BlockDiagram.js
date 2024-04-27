import * as go from "gojs";
import { ReactDiagram, ReactPalette } from "gojs-react";
import "./BlockDiagram.css";
// import { Inspector } from "./Inspector";
// import go, { Inspector } from 'gojs';
// import DataInspector from 'gojs/extensions/DataInspector.js';
// import * as Inspector from 'gojs';
// import { reqID } from "../routes/RequirementsValidationTwo";
// import PaletteDrag from './PaletteDrag';

export const init = (id) => {
  // let req =id;
  console.log("...................///////", id);
  const colors = {
    red: "#ff3333",
    blue: "#3358ff",
    green: "#25ad23",
    magenta: "#d533ff",
    purple: "#7d33ff",
    orange: "#ff6233",
    brown: "#8e571e",
    white: "#ffffff",
    black: "#000000",
    beige: "#fffcd5",
    extralightblue: "#d5ebff",
    extralightred: "#f2dfe0",
    lightblue: "#a5d2fa",
    lightgray: "#cccccc",
    lightgreen: "#b3e6b3",
    lightred: "#fcbbbd",
  };

  const showLinkLabel = (e) => {
    let label = e.subject.findObject("LABEL");
    if (label !== null)
      label.visible = e.subject.fromNode.data.category === "Conditional";
    return;
  };
  const $ = go.GraphObject.make;
  const mydiagram = $(
    go.Diagram,

    {
      "undoManager.isEnabled": true,
      grid: $(
        go.Panel,
        "Grid",
        $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineH", {
          stroke: "gray",
          strokeWidth: 0.5,
          interval: 10,
        }),
        $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
      ),
      "draggingTool.dragsLink": true,
      "draggingTool.isGridSnapEnabled": true,
      "linkingTool.isUnconnectedLinkValid": true,
      "linkingTool.portGravity": 20,
      "relinkingTool.isUnconnectedLinkValid": true,
      "relinkingTool.portGravity": 20,
      "relinkingTool.fromHandleArchetype": $(go.Shape, "Diamond", {
        segmentIndex: 0,
        cursor: "pointer",
        desiredSize: new go.Size(8, 8),
        fill: "tomato",
        stroke: "darkred",
      }),
      "relinkingTool.toHandleArchetype": $(go.Shape, "Diamond", {
        segmentIndex: -1,
        cursor: "pointer",
        desiredSize: new go.Size(8, 8),
        fill: "darkred",
        stroke: "tomato",
      }),
      "linkReshapingTool.handleArchetype": $(go.Shape, "Diamond", {
        desiredSize: new go.Size(7, 7),
        fill: "lightblue",
        stroke: "deepskyblue",
      }),
      "rotatingTool.handleAngle": 270,
      "rotatingTool.handleDistance": 30,
      "rotatingTool.snapAngleMultiple": 15,
      "rotatingTool.snapAngleEpsilon": 15,
      LinkDrawn: showLinkLabel,
      LinkRelinked: showLinkLabel,
    }
  );

  mydiagram.addDiagramListener("Modified", (e) => {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !mydiagram.isModified;
    var idx = document.title.indexOf("*");
    if (mydiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.slice(0, idx);
    }
  });

  function makePort(name, align, spot, output, input) {
    var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
    // the port is basically just a transparent rectangle that stretches along the side of the node,
    // and becomes colored when the mouse passes over it
    return $(go.Shape, {
      fill: "transparent", // changed to a color in the mouseEnter event handler
      strokeWidth: 0, // no stroke
      width: horizontal ? NaN : 8, // if not stretching horizontally, just 8 wide
      height: !horizontal ? NaN : 8, // if not stretching vertically, just 8 tall
      alignment: align, // align the port on the main Shape
      stretch: horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical,
      portId: name, // declare this object to be a "port"
      fromSpot: spot, // declare where links may connect at this port
      fromLinkable: output, // declare whether the user may draw links from here
      toSpot: spot, // declare where links may connect at this port
      toLinkable: input, // declare whether the user may draw links to here
      cursor: "pointer", // show a different cursor to indicate potential link point
      mouseEnter: (e, port) => {
        // the PORT argument will be this Shape
        if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
      },
      mouseLeave: (e, port) => (port.fill = "transparent"),
    });
  }

  const nodeStyle = () => {
    return [
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      {
        locationSpot: go.Spot.Center,
      },
    ];
  };

  const textStyle = () => {
    return {
      font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
      stroke: "#F8F8F8",
    };
  };

  function convertVisibility(v) {
    switch (v) {
      case "public":
        return "+";
      case "private":
        return "-";
      case "protected":
        return "#";
      case "package":
        return "~";
      default:
        return v;
    }
  }
  mydiagram.nodeTemplateMap.add(
    "",

    $(
      go.Node,
      "Auto",
      {
        locationSpot: go.Spot.Center,
        fromSpot: go.Spot.AllSides,
        toSpot: go.Spot.AllSides,
      },
      $(go.Shape, { fill: "lightgray" }),
      $(
        go.Panel,
        "Table",
        { defaultRowSeparatorStroke: "black" },
        // header
        $(
          go.TextBlock,
          {
            row: 0,
            columnSpan: 2,
            margin: 3,
            alignment: go.Spot.Center,
            font: "bold 12pt sans-serif",
            isMultiline: false,
            editable: true,
          },
          new go.Binding("text", "name").makeTwoWay()
        ),
        // properties
        $(
          go.TextBlock,
          "properties",
          { margin: 6 },
          {
            row: 1,
            font: "italic 10pt sans-serif",
            isMultiline: false,
            editable: true,
          },
          new go.Binding("text", "idname").makeTwoWay()
        ),
        // new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
        // $(go.Panel, "Vertical", { name: "PROPERTIES" },
        //   new go.Binding("itemArray", "properties"),
        //   {
        //     row: 1, margin: 3, stretch: go.GraphObject.Fill,
        //     defaultAlignment: go.Spot.Left, background: "lightgray",
        //     itemTemplate: propertyTemplate
        //   },

        // $("PanelExpanderButton", "PROPERTIES",
        //   { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
        //   new go.Binding("visible", "properties", arr => arr.length > 0)),
        // methods
        $(
          go.TextBlock,
          "Methods",
          { row: 2, font: "italic 10pt sans-serif" },
          new go.Binding("visible", "visible", (v) => !v).ofObject("METHODS")
        ),
        $(
          go.Panel,
          "Vertical",
          { name: "METHODS" },
          new go.Binding("itemArray", "methods"),
          {
            row: 2,
            margin: 3,
            stretch: go.GraphObject.Fill,
            defaultAlignment: go.Spot.Left,
            background: "lightgray",
            //   itemTemplate: methodTemplate
          },
          $(
            go.Panel,
            "Horizontal",
            // define the panel where the text will appear
            $(
              go.Panel,
              "Table",
              {
                minSize: new go.Size(130, NaN),
                maxSize: new go.Size(150, NaN),
                margin: new go.Margin(6, 10, 0, 6),
                defaultAlignment: go.Spot.Left,
              },
              $(go.RowColumnDefinition, { column: 2, width: 4 }),

              $(
                go.TextBlock,
                "ID: ",
                { row: 1, column: 0 },
                new go.Binding("text", "idtext")
              ),
              $(
                go.TextBlock,
                { editable: true }, // the comments
                {
                  row: 1,
                  column: 1,
                  columnSpan: 4,
                  font: "italic 9pt sans-serif",
                  wrap: go.TextBlock.WrapFit,
                  editable: true, // by default newlines are allowed
                  minSize: new go.Size(100, 14),
                },
                new go.Binding("text", "id").makeTwoWay()
              ),
              $(go.TextBlock, "Text: ", { row: 2, column: 0 }),
              $(
                go.TextBlock,
                {
                  row: 2,
                  column: 3,
                  columnSpan: 5,
                  editable: true,
                  minSize: new go.Size(50, 14),
                  margin: new go.Margin(0, 0, 0, 3),
                },
                new go.Binding("text", "title").makeTwoWay()
              )
            )
          ) // end Table Panel
        ), // end Horizontal Panel
        $(
          "PanelExpanderButton",
          "METHODS",
          { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
          new go.Binding("visible", "methods", (arr) => arr.length > 0)
        )
      ),
      makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
      makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
      makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
      makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
    )
  );

  

// );



  mydiagram.nodeTemplateMap.add(
    "start",
    $(
      go.Node,
      "Auto",
      { row: 0, column: 1, alignment: go.Spot.Center },
      { height: 100, row: 0, width: 100 },
      $(go.Shape, "Rectangle", {
        name: "SHAPE",
        fill: "lightgray",
        stroke: "black",
        portId: "",
        fromLinkable: true,
        toLinkable: true,
        cursor: "pointer",
      }),
      // define the panel where the text will appear
      $(
        go.Panel,
        "Table",
        {
          // maxSize: new go.Size(150, 999),
          // margin: new go.Margin(3, 3, 0, 3),
          // defaultAlignment: go.Spot.Left
        },
        $(go.RowColumnDefinition, { column: 2, width: 4 }),
        $(
          go.TextBlock, // the name
          {
            row: 0,
            column: 0,
            columnSpan: 5,
            font: "bold 9pt sans-serif",
            editable: true,
            isMultiline: false,
            // stroke: "white",
            // minSize: new go.Size(10, 14),
            name: "name",
          },
          new go.Binding("text", "name").makeTwoWay()
        ),
        $(go.TextBlock, { row: 3, column: 0 }),
        $(
          go.TextBlock,
          {
            row: 3,
            column: 1,
            columnSpan: 4,
            editable: true,
            isMultiline: false,
            // minSize: new go.Size(10, 14),
            // margin: new go.Margin(0, 0, 0, 3),
            // name: "title"
          },
          new go.Binding("text", "title").makeTwoWay()
        )
      ),
      makePort("T", go.Spot.Top, go.Spot.TopSide, true, true),
      makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
      makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
      makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, true)
    )
  );

  mydiagram.nodeTemplate.toolTip = $(
    "ToolTip", // show some detailed information
    $(
      go.Panel,
      "Vertical",
      { maxSize: new go.Size(200, NaN) }, // limit width but not height
      $(
        go.TextBlock,
        { font: "bold 10pt sans-serif", textAlign: "center" },
        new go.Binding("text")
      ),
      $(
        go.TextBlock,
        { font: "10pt sans-serif", textAlign: "center" },
        new go.Binding("text", "details")
      )
    )
  );

  // Node selection adornment
  // Include four large triangular buttons so that the user can easily make a copy
  // of the node, move it to be in that direction relative to the original node,
  // and add a link to the new node.

  function makeArrowButton(spot, fig) {
    var maker = (e, shape) => {
      e.handled = true;
      e.diagram.model.commit((m) => {
        var selnode = shape.part.adornedPart;
        // create a new node in the direction of the spot
        var p = new go.Point().setRectSpot(selnode.actualBounds, spot);
        p.subtract(selnode.location);
        p.scale(2, 2);
        p.x += Math.sign(p.x) * 30;
        p.y += Math.sign(p.y) * 30;
        p.add(selnode.location);
        p.snapToGridPoint(
          e.diagram.grid.gridOrigin,
          e.diagram.grid.gridCellSize
        );
        // make the new node a copy of the selected node
        var nodedata = m.copyNodeData(selnode.data);
        // add to same group as selected node
        m.setGroupKeyForNodeData(
          nodedata,
          m.getGroupKeyForNodeData(selnode.data)
        );
        m.addNodeData(nodedata); // add to model
        // create a link from the selected node to the new node
        var linkdata = { from: selnode.key, to: m.getKeyForNodeData(nodedata) };
        m.addLinkData(linkdata); // add to model
        // move the new node to the computed location, select it, and start to edit it
        var newnode = e.diagram.findNodeForData(nodedata);
        newnode.location = p;
        e.diagram.select(newnode);
        setTimeout(() => {
          e.diagram.commandHandler.editTextBlock();
        }, 20);
      });
    };
    return $(go.Shape, {
      figure: fig,
      alignment: spot,
      alignmentFocus: spot.opposite(),
      width: spot.equals(go.Spot.Top) || spot.equals(go.Spot.Bottom) ? 25 : 18,
      height: spot.equals(go.Spot.Top) || spot.equals(go.Spot.Bottom) ? 18 : 25,
      fill: "orange",
      stroke: colors.white,
      strokeWidth: 4,
      mouseEnter: (e, shape) => (shape.fill = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.fill = "orange"),
      isActionable: true, // needed because it's in an Adornment
      click: maker,
      contextClick: maker,
    });
  }

  // create a button that brings up the context menu
  function CMButton(options) {
    return $(
      go.Shape,
      {
        fill: "orange",
        stroke: "rgba(0, 0, 0, 0)",
        strokeWidth: 15,
        background: "transparent",
        geometryString:
          "F1 M0 0 b 0 360 -4 0 4 z M10 0 b 0 360 -4 0 4 z M20 0 b 0 360 -4 0 4", // M10 0 A2 2 0 1 0 14 10 M20 0 A2 2 0 1 0 24 10,
        isActionable: true,
        cursor: "context-menu",
        mouseEnter: (e, shape) => (shape.fill = "dodgerblue"),
        mouseLeave: (e, shape) => (shape.fill = "orange"),
        click: (e, shape) => {
          e.diagram.commandHandler.showContextMenu(shape.part.adornedPart);
        },
      },
      options || {}
    );
  }

  // mydiagram.nodeTemplate.selectionAdornmentTemplate =
  //   $(go.Adornment, "Spot",
  //     $(go.Placeholder, { padding: 10 }),
  //     makeArrowButton(go.Spot.Top, "TriangleUp"),
  //     makeArrowButton(go.Spot.Left, "TriangleLeft"),
  //     makeArrowButton(go.Spot.Right, "TriangleRight"),
  //     makeArrowButton(go.Spot.Bottom, "TriangleDown"),
  //     CMButton({ alignment: new go.Spot(0.75, 0) })
  //   );

  // Common context menu button definitions

  // All buttons in context menu work on both click and contextClick,
  // in case the user context-clicks on the button.
  // All buttons modify the node data, not the Node, so the Bindings need not be TwoWay.

  // A button-defining helper function that returns a click event handler.
  // PROPNAME is the name of the data property that should be set to the given VALUE.
  function ClickFunction(propname, value) {
    return (e, obj) => {
      e.handled = true; // don't let the click bubble up
      e.diagram.model.commit((m) => {
        m.set(obj.part.adornedPart.data, propname, value);
      });
    };
  }

  // Create a context menu button for setting a data property with a color value.
  function ColorButton(color, propname) {
    if (!propname) propname = "color";
    return $(go.Shape, {
      width: 16,
      height: 16,
      stroke: "lightgray",
      fill: color,
      margin: 1,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.stroke = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.stroke = "lightgray"),
      click: ClickFunction(propname, color),
      contextClick: ClickFunction(propname, color),
    });
  }

  function LightFillButtons() {
    // used by multiple context menus
    return [
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          ColorButton(colors.white, "fill"),
          ColorButton(colors.beige, "fill"),
          ColorButton(colors.extralightblue, "fill"),
          ColorButton(colors.extralightred, "fill")
        )
      ),
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          ColorButton(colors.lightgray, "fill"),
          ColorButton(colors.lightgreen, "fill"),
          ColorButton(colors.lightblue, "fill"),
          ColorButton(colors.lightred, "fill")
        )
      ),
    ];
  }

  function DarkColorButtons() {
    // used by multiple context menus
    return [
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          ColorButton(colors.black),
          ColorButton(colors.green),
          ColorButton(colors.blue),
          ColorButton(colors.red)
        )
      ),
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          ColorButton(colors.white),
          ColorButton(colors.magenta),
          ColorButton(colors.purple),
          ColorButton(colors.orange)
        )
      ),
    ];
  }

  // Create a context menu button for setting a data property with a stroke width value.
  function ThicknessButton(sw, propname) {
    if (!propname) propname = "thickness";
    return $(go.Shape, "LineH", {
      width: 16,
      height: 16,
      strokeWidth: sw,
      margin: 1,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.background = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.background = "transparent"),
      click: ClickFunction(propname, sw),
      contextClick: ClickFunction(propname, sw),
    });
  }

  // Create a context menu button for setting a data property with a stroke dash Array value.
  function DashButton(dash, propname) {
    if (!propname) propname = "dash";
    return $(go.Shape, "LineH", {
      width: 24,
      height: 16,
      strokeWidth: 2,
      strokeDashArray: dash,
      margin: 1,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.background = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.background = "transparent"),
      click: ClickFunction(propname, dash),
      contextClick: ClickFunction(propname, dash),
    });
  }

  function StrokeOptionsButtons() {
    // used by multiple context menus
    return [
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          ThicknessButton(1),
          ThicknessButton(2),
          ThicknessButton(3),
          ThicknessButton(4)
        )
      ),
      $(
        "ContextMenuButton",
        $(
          go.Panel,
          "Horizontal",
          DashButton(null),
          DashButton([2, 4]),
          DashButton([4, 4])
        )
      ),
    ];
  }

  // Node context menu

  function FigureButton(fig, propname) {
    if (!propname) propname = "figure";
    return $(go.Shape, {
      width: 32,
      height: 32,
      scale: 0.5,
      fill: "lightgray",
      figure: fig,
      margin: 1,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.fill = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.fill = "lightgray"),
      click: ClickFunction(propname, fig),
      contextClick: ClickFunction(propname, fig),
    });
  }

  let linkSelectionAdornmentTemplate = $(
    go.Adornment,
    "Link",
    $(
      go.Shape,
      // isPanelMain declares that this Shape shares the Link.geometry
      { isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0 }
    ) // use selection object's strokeWidth
  );

  mydiagram.linkTemplate = $(
    go.Link,
    {
      layerName: "Foreground",
      routing: go.Link.AvoidsNodes,
      corner: 10,
      fromShortLength: 10,
      toShortLength: 15, // assume arrowhead at "to" end, need to avoid bad appearance when path is thick
      relinkableFrom: true,
      relinkableTo: true,
      reshapable: true,
      resegmentable: true,
    },
    new go.Binding("fromSpot", "fromSpot", go.Spot.parse),
    new go.Binding("toSpot", "toSpot", go.Spot.parse),
    new go.Binding("fromShortLength", "dir", (dir) => (dir >= 1 ? 10 : 0)),
    new go.Binding("toShortLength", "dir", (dir) => (dir >= 1 ? 10 : 0)),
    new go.Binding("points").makeTwoWay(), // TwoWay due to user reshaping with LinkReshapingTool

    $(
      go.Shape,
      { strokeWidth: 2 },
      new go.Binding("stroke", "color"),
      new go.Binding("strokeWidth", "thickness"),
      new go.Binding("strokeDashArray", "dash")
    ),
    $(
      go.Shape, // custom arrowheads to create the lifted effect
      {
        segmentIndex: 0,
        segmentOffset: new go.Point(15, 0),
        segmentOrientation: go.Link.OrientAlong,
        alignmentFocus: go.Spot.Right,
        figure: "circle",
        width: 10,
        strokeWidth: 0,
      },
      new go.Binding("fill", "color"),
      new go.Binding("visible", "dir", (dir) => dir === 1)
    ),
    $(
      go.Shape,
      {
        segmentIndex: -1,
        segmentOffset: new go.Point(-10, 6),
        segmentOrientation: go.Link.OrientPlus90,
        alignmentFocus: go.Spot.Right,
        figure: "triangle",
        width: 12,
        height: 12,
        strokeWidth: 0,
      },
      new go.Binding("fill", "color"),
      new go.Binding("visible", "dir", (dir) => dir >= 1),
      new go.Binding("width", "thickness", (t) => 7 + 3 * t), // custom arrowhead must scale with the size of the while
      new go.Binding("height", "thickness", (t) => 7 + 3 * t), // while remaining centered on line
      new go.Binding(
        "segmentOffset",
        "thickness",
        (t) => new go.Point(-15, 4 + 1.5 * t)
      )
    ),
    $(
      go.Shape,
      {
        segmentIndex: 0,
        segmentOffset: new go.Point(15, -6),
        segmentOrientation: go.Link.OrientMinus90,
        alignmentFocus: go.Spot.Right,
        figure: "triangle",
        width: 12,
        height: 12,
        strokeWidth: 0,
      },
      new go.Binding("fill", "color"),
      new go.Binding("visible", "dir", (dir) => dir === 2),
      new go.Binding("width", "thickness", (t) => 7 + 3 * t),
      new go.Binding("height", "thickness", (t) => 7 + 3 * t),
      new go.Binding(
        "segmentOffset",
        "thickness",
        (t) => new go.Point(-15, 4 + 1.5 * t)
      )
    ),
    $(
      go.TextBlock,
      { alignmentFocus: new go.Spot(0, 1, -4, 0), editable: true },
      new go.Binding("text").makeTwoWay(), // TwoWay due to user editing with TextEditingTool
      new go.Binding("stroke", "color")
    )
  );

  mydiagram.linkTemplate.selectionAdornmentTemplate = $(
    go.Adornment, // use a special selection Adornment that does not obscure the link path itself
    $(
      go.Shape,
      {
        // this uses a pathPattern with a gap in it, in order to avoid drawing on top of the link path Shape
        isPanelMain: true,
        stroke: "transparent",
        strokeWidth: 6,
        pathPattern: makeAdornmentPathPattern(2), // == thickness or strokeWidth
      },
      new go.Binding("pathPattern", "thickness", makeAdornmentPathPattern)
    ),
    CMButton({ alignmentFocus: new go.Spot(0, 0, -6, -4) })
  );

  function makeAdornmentPathPattern(w) {
    return $(go.Shape, {
      stroke: "dodgerblue",
      strokeWidth: 2,
      strokeCap: "square",
      geometryString: "M0 0 M4 2 H3 M4 " + (w + 4).toString() + " H3",
    });
  }

  // Link context menu
  // All buttons in context menu work on both click and contextClick,
  // in case the user context-clicks on the button.
  // All buttons modify the link data, not the Link, so the Bindings need not be TwoWay.

  function ArrowButton(num) {
    var geo = "M0 0 M8 16 M0 8 L16 8  M12 11 L16 8 L12 5";
    if (num === 0) {
      geo = "M0 0 M16 16 M0 8 L16 8";
    } else if (num === 2) {
      geo = "M0 0 M16 16 M0 8 L16 8  M12 11 L16 8 L12 5  M4 11 L0 8 L4 5";
    }
    return $(go.Shape, {
      geometryString: geo,
      margin: 2,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.background = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.background = "transparent"),
      click: ClickFunction("dir", num),
      contextClick: ClickFunction("dir", num),
    });
  }

  function AllSidesButton(to) {
    var setter = (e, shape) => {
      e.handled = true;
      e.diagram.model.commit((m) => {
        var link = shape.part.adornedPart;
        m.set(
          link.data,
          to ? "toSpot" : "fromSpot",
          go.Spot.stringify(go.Spot.AllSides)
        );
        // re-spread the connections of other links connected with the node
        (to ? link.toNode : link.fromNode).invalidateConnectedLinks();
      });
    };
    return $(go.Shape, {
      width: 12,
      height: 12,
      fill: "transparent",
      mouseEnter: (e, shape) => (shape.background = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.background = "transparent"),
      click: setter,
      contextClick: setter,
    });
  }

  function SpotButton(spot, to) {
    var ang = 0;
    var side = go.Spot.RightSide;
    if (spot.equals(go.Spot.Top)) {
      ang = 270;
      side = go.Spot.TopSide;
    } else if (spot.equals(go.Spot.Left)) {
      ang = 180;
      side = go.Spot.LeftSide;
    } else if (spot.equals(go.Spot.Bottom)) {
      ang = 90;
      side = go.Spot.BottomSide;
    }
    if (!to) ang -= 180;
    var setter = (e, shape) => {
      e.handled = true;
      e.diagram.model.commit((m) => {
        var link = shape.part.adornedPart;
        m.set(link.data, to ? "toSpot" : "fromSpot", go.Spot.stringify(side));
        // re-spread the connections of other links connected with the node
        (to ? link.toNode : link.fromNode).invalidateConnectedLinks();
      });
    };
    return $(go.Shape, {
      alignment: spot,
      alignmentFocus: spot.opposite(),
      geometryString: "M0 0 M12 12 M12 6 L1 6 L4 4 M1 6 L4 8",
      angle: ang,
      background: "transparent",
      mouseEnter: (e, shape) => (shape.background = "dodgerblue"),
      mouseLeave: (e, shape) => (shape.background = "transparent"),
      click: setter,
      contextClick: setter,
    });
  }

  mydiagram.linkTemplate.contextMenu = $(
    "ContextMenu",
    DarkColorButtons(),
    StrokeOptionsButtons(),
    $(
      "ContextMenuButton",
      $(go.Panel, "Horizontal", ArrowButton(0), ArrowButton(1), ArrowButton(2))
    ),
    $(
      "ContextMenuButton",
      $(
        go.Panel,
        "Horizontal",
        $(
          go.Panel,
          "Spot",
          AllSidesButton(false),
          SpotButton(go.Spot.Top, false),
          SpotButton(go.Spot.Left, false),
          SpotButton(go.Spot.Right, false),
          SpotButton(go.Spot.Bottom, false)
        ),
        $(
          go.Panel,
          "Spot",
          { margin: new go.Margin(0, 0, 0, 2) },
          AllSidesButton(true),
          SpotButton(go.Spot.Top, true),
          SpotButton(go.Spot.Left, true),
          SpotButton(go.Spot.Right, true),
          SpotButton(go.Spot.Bottom, true)
        )
      )
    )
  );

  mydiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
  mydiagram.toolManager.relinkingTool.temporaryLink.routing =
    go.Link.Orthogonal;

  let myPalette = new go.Palette({
    "animationManager.initialAnimationStyle": go.AnimationManager.None,
    // "InitialAnimationStarting": animateFadeDown(),
    nodeTemplateMap: mydiagram.nodeTemplateMap,
    // linkTemplateMap: mydiagram.linkTemplateMap,
    // simplify the link template, just in this Palette
    // simplify the link template, just in this Palette
    linkTemplate: $(
      go.Link,
      {
        // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
        // to line up the Link in the same manner we have to pretend the Link has the same location spot
        locationSpot: go.Spot.Center,
        selectionAdornmentTemplate: $(
          go.Adornment,
          "Link",
          { locationSpot: go.Spot.Center },
          $(go.Shape, {
            isPanelMain: true,
            fill: null,
            stroke: "deepskyblue",
            strokeWidth: 0,
          }),
          $(
            go.Shape, // the arrowhead
            { toArrow: "Standard", stroke: null }
          )
        ),
      },
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        toShortLength: 4,
      },
      new go.Binding("points"),
      $(
        go.Shape, // the link path shape
        { isPanelMain: true, strokeWidth: 2 }
      ),
      $(
        go.Shape, // the arrowhead
        { toArrow: "Standard", stroke: null }
      )
    ),
    model: new go.GraphLinksModel(
      [
        {
          key: 1,
          name: "<<Requirement>>",
          idname: "REQ-CON-001",
          methods: [{ title: "CEO", id: "00001", idtext: "ID :" }],
        },
        {
          category: "start",
          name: "<<BLOCK>>",
          title: "type here",
          // methods: [{ title:"CEO",id:"00001", idtext:"ID :"},],
        },
      ],
      [
        // the Palette also has a disconnected Link, which the user can drag-and-drop
        {
          points: new go.List(/*go.Point*/).addAll([
            new go.Point(0, 0),
            new go.Point(30, 0),
            new go.Point(30, 40),
            new go.Point(60, 40),
          ]),
        },
      ]
    ),
  });
 
  return [mydiagram, myPalette];
};

const BlockDiagram = () => {
  
  return (
    <ReactDiagram
      initDiagram={() => init()[0]}
      divClassName="div-component"
    ></ReactDiagram>
    
    
  );
};

export default BlockDiagram;
