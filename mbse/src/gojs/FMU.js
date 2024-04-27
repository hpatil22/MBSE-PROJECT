import { ReactDiagram } from "gojs-react";
import "./BlockDiagram.css";
import * as go from "gojs";
import React from "react";
import { Button } from "@mui/material";
import FMUPalette from "./FMUPalette";
import { init } from "./BlockDiagram";


var red = "orangered";  // 0 or false
var green = "forestgreen";  // 1 or true



export const init1 = (id) => {
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
        grid: $(go.Panel, "Grid",
        $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.5, interval: 10 }),
        $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
        $(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
      ),
        // "grid.visible": true,
        // "grid.gridCellSize": new go.Size(30, 20),
        // "draggingTool.isGridSnapEnabled": true,
        // "resizingTool.isGridSnapEnabled": true,
        // "rotatingTool.snapAngleMultiple": 90,
        // "rotatingTool.snapAngleEpsilon": 45,
        "undoManager.isEnabled": true,
      }
    );

    
    function nodeStyle() {
        return [
        
          new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
          {
            // the Node.location is at the center of each node
            locationSpot: go.Spot.Center
          }
        ];
      }
  
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
  
    // function makePort(name, align, spot, output, input) {
    //   var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
    //   // the port is basically just a transparent rectangle that stretches along the side of the node,
    //   // and becomes colored when the mouse passes over it
    //   return $(go.Shape, {
    //     fill: "transparent", // changed to a color in the mouseEnter event handler
    //     strokeWidth: 0, // no stroke
    //     width: horizontal ? NaN : 8, // if not stretching horizontally, just 8 wide
    //     height: !horizontal ? NaN : 8, // if not stretching vertically, just 8 tall
    //     alignment: align, // align the port on the main Shape
    //     stretch: horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical,
    //     portId: name, // declare this object to be a "port"
    //     fromSpot: spot, // declare where links may connect at this port
    //     fromLinkable: output, // declare whether the user may draw links from here
    //     toSpot: spot, // declare where links may connect at this port
    //     toLinkable: input, // declare whether the user may draw links to here
    //     cursor: "pointer", // show a different cursor to indicate potential link point
    //     mouseEnter: (e, port) => {
    //       // the PORT argument will be this Shape
    //       if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
    //     },
    //     mouseLeave: (e, port) => (port.fill = "transparent"),
    //   });
    // }
  
    function textStyle() {
        return {
          font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
          stroke: "#F8F8F8",
          
        }
      }

      // function makePort(name, leftside) {
      //   var port = $(go.Shape, "Rectangle",
      //     {
      //       fill: "gray", stroke: null,
      //       desiredSize: new go.Size(8, 8),
      //       portId: name,  // declare this object to be a "port"
      //       toMaxLinks: 1,  // don't allow more than one link into a port
      //       cursor: "pointer"  // show a different cursor to indicate potential link point
      //     });

      //   var lab = $(go.TextBlock, name,  // the name of the port
      //     { font: "7pt sans-serif" });

      //   var panel = $(go.Panel, "Horizontal",
      //     { margin: new go.Margin(2, 0) });

      //   // set up the port/panel based on which side of the node it will be on
      //   if (leftside) {
      //     port.toSpot = go.Spot.Left;
      //     port.toLinkable = true;
      //     lab.margin = new go.Margin(1, 0, 0, 1);
      //     panel.alignment = go.Spot.TopLeft;
      //     panel.add(port);
      //     panel.add(lab);
      //   } else {
      //     port.fromSpot = go.Spot.Right;
      //     port.fromLinkable = true;
      //     lab.margin = new go.Margin(1, 1, 0, 0);
      //     panel.alignment = go.Spot.TopRight;
      //     panel.add(lab);
      //     panel.add(port);
      //   }
      //   return panel;
      // }
   
    mydiagram.nodeTemplateMap.add(
      "Step",

      $(
        go.Node,
        "Spot",
        nodeStyle(),

        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(
          go.Panel,
          "Auto",
          $(
            go.Shape,
            "RoundedRectangle",
            { fill: "lightgray" },
            new go.Binding("fill")
          ),

          $(
            go.TextBlock,
            textStyle(),
            {
              margin: 8,
              maxSize: new go.Size(160, NaN),
              wrap: go.TextBlock.WrapFit,
              editable: true,
              // color:"black",
            },
         
            new go.Binding("text").makeTwoWay()
          ),
          $(go.TextBlock, { margin: 8 }, new go.Binding("text", "key")),
        ),
        $(
          go.Shape,
          "Rectangle",
          portStyle(true), // the only port
          { portId: "in", alignment: new go.Spot(0, 0.5) }
        ),
        $(go.Shape, "Rectangle", portStyle(false),
        { portId: "out", alignment: new go.Spot(1, 0.5) }),
      )
    );



    mydiagram.nodeTemplateMap.add(
      "Fmu",

      $(
        go.Node,
        "Spot",
        nodeStyle(),

        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(
          go.Panel,
          "Auto",
          $(
            go.Shape,
            "RoundedRectangle",
            { fill: "#0047AB" },
            {width: 150, height: 120},
            new go.Binding("fill")
          ),

          $(
            go.TextBlock,
            textStyle(),
            {
              margin: 8,
              maxSize: new go.Size(160, NaN),
              wrap: go.TextBlock.WrapFit,
              editable: true,
              // color:"black",
            },
         
            new go.Binding("text").makeTwoWay()
          ),
          $(go.TextBlock, { margin: 8 }, new go.Binding("text", "key")),
        ),
        $(
          go.Shape,
          "Rectangle",
          portStyle(true), // the only port
          { portId: "in", alignment: new go.Spot(0, 0.5) }
        ),
        $(go.Shape, "Rectangle", portStyle(false),
        { portId: "out", alignment: new go.Spot(1, 0.5) }),
      )
    );

     function shapeStyle() {
        return {
          name: "NODESHAPE",
          fill: "lightgray",
          stroke: "darkslategray",
          desiredSize: new go.Size(40, 40),
          strokeWidth: 2
        };
      }

      function portStyle(input) {
        return {
          desiredSize: new go.Size(6, 6),
          fill: "black",
          fromSpot: go.Spot.Right,
          fromLinkable: !input,
          toSpot: go.Spot.Left,
          toLinkable: input,
          toMaxLinks: 1,
          cursor: "pointer"
        };
      }

    var inputTemplate =
    $(go.Node, "Spot", nodeStyle(),
      $(go.Shape, "Circle", shapeStyle(),
        { fill: "black" }),  // override the default fill (from shapeStyle()) to be red
      $(go.Shape, "Rectangle", portStyle(false),  // the only port
        { portId: "", alignment: new go.Spot(1, 0.5) }),
        $(go.TextBlock, { margin: 8 }, new go.Binding("text", "text")),
      { // if double-clicked, an input node will change its value, represented by the color.
        doubleClick: (e, obj) => {
          e.diagram.startTransaction("Toggle Input");
          var shp = obj.findObject("NODESHAPE");
          shp.fill = (shp.fill === green) ? red : green;
        //   updateStates();
          e.diagram.commitTransaction("Toggle Input");
        }
      }
    );
      
    mydiagram.nodeTemplateMap.add("End",
    $(go.Node, "Table", nodeStyle(),
      $(go.Panel, "Spot",
        $(go.Shape, "Circle",
          { desiredSize: new go.Size(40, 40), fill: "white", stroke: "black", strokeWidth: 0.5 }),
          $(go.Shape, "Circle", shapeStyle(),
            { fill: "black",desiredSize: new go.Size(20, 20) }),
            $(go.Shape, "Rectangle", portStyle(true),  // the only port
                { portId: "", alignment: new go.Spot(0, 0.5) }),
                $(go.TextBlock, { margin: 8 }, new go.Binding("text", "text"))
      ),
    ));


    mydiagram.nodeTemplateMap.add("input", inputTemplate);
    // mydiagram.nodeTemplateMap.add("fmu", Template);
    // mydiagram.nodeTemplateMap.add("output", outputTemplate);
   

mydiagram.linkTemplate =
$(go.Link,
  { routing: go.Link.AvoidsNodes, curve: go.Link.JumpGap, corner: 10, reshapable: true, toShortLength: 7 ,},
  new go.Binding("points").makeTwoWay(),
  // mark each Shape to get the link geometry with isPanelMain: true
  $(go.Shape, { isPanelMain: true, stroke: "black", strokeWidth: 7 }),
  $(go.Shape, { isPanelMain: true, stroke: "gray", strokeWidth: 5 }),
  $(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [5, 5] }),
  $(go.Shape, { toArrow: "Triangle", scale: 1.3, fill: "gray", stroke: null })
);

    mydiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    mydiagram.toolManager.relinkingTool.temporaryLink.routing =
      go.Link.Orthogonal;

    let myPalette = new go.Palette({
      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      // "InitialAnimationStarting": animateFadeDown(),
      nodeTemplateMap: mydiagram.nodeTemplateMap,
    
      linkTemplate: $(
        go.Link,
        {
          locationSpot: go.Spot.Center,
          selectionAdornmentTemplate: $(
            go.Adornment,
            "Link",
            { locationSpot: go.Spot.Center ,
                },
            $(go.Shape, {
              isPanelMain: true,
              fill: null,
              stroke: "deepskyblue",
              strokeWidth: 0,
              width:'80 px'
            }),
            $(
              go.Shape, // the arrowhead
              { toArrow: "Standard", stroke: null }
            )
          ),
        },
        {
          routing: go.Link.AvoidsNodes,
        //   curve: go.Link.JumpOver,
        //   corner: 5,
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
            { key:"start", category: "input", text:"text" },
            { category: "Step",text: "type here" },
            {  category: "End" },
            {  category:"Fmu", text:"Compressor Performance FMU"  },
            // {  category:"Fmu", text:"GasTurbine Performance FMU"  },
            // {  category:"Fmu", text:"Compressor Performance FMU"  },
            
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
    }
    );
    return [mydiagram, myPalette,];
  };

 export const gojsanimation = init1();
  let myAnimation = null;
  const FMU=()=>{
  // const gojsanimationHandler =()=>{
  //   gojsanimation[2].start();
  // }

  function updateAnimation() {
    if (myAnimation) myAnimation.stop();
    // Animate the flow in the pipes
    myAnimation = new go.Animation();
    myAnimation.easing = go.Animation.EaseLinear;
    gojsanimation[0].links.each(link => myAnimation.add(link.findObject("PIPE"), "strokeDashOffset", 20, 0));
    // Run indefinitely
    myAnimation.runCount = Infinity;
    console.log("myanimation" , myAnimation)
    myAnimation.start();
  }
  
    return(
        <>
       <ReactDiagram initDiagram={()=>gojsanimation[0]}
       divClassName="div-component"> 
       {/* <FMUPalette initpalette={()=>init1()[1]}></FMUPalette> */}
       </ReactDiagram>
       {/* <button onClick={updateAnimation}> RUN </button> */}
        </>
    );
  };

  export default FMU;