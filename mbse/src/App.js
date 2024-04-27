import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./component/Navbar";
// import Dashboard from "./routes/Dashboard";
import { Suspense, lazy, useEffect, useState } from "react";
import SidebarLayout from './Layout/Sidebar'
import axios from "axios";
// import DesignView from "./routes/DesignView"
import Dashboard2 from "./routes/Dashboard2"
// import DialogueboxModel from "./routes/ModelEditor/DialogueboxModel";
// import Login from "./Login";
// import TestVerdictPass from "./routes/TestVerdictPass";'
import { useAuth0 } from "@auth0/auth0-react";
import Signup from "./Signup";

const RequirementTable = lazy(()=>{
  import( "./routes/RequirementTable")
})
const RequirementsValidation = lazy(()=>
  import( "./routes/RequirementsValidation")
)
const RequirementsValidationTwo = lazy(()=>
  import( "./routes/RequirementsValidationTwo")
)
const TraceabilityMatrix = lazy(()=>
  import( "./routes/TraceabilityMatrix")
)
const UserRequirementTable = lazy(()=>
  import( "./routes/UserRequirementTable")
)
const AllocationMatrixTable = lazy(()=>
  import( "./routes/AllocationMatrix")
)
const FmuBlocks = lazy(()=>
  import( "./routes/FMUBlocks")
)
const ModelEditorTable = lazy(()=>
  import( "./routes/ModelEditor/")
)
const TestCaseMatrixTable = lazy(()=>
  import( "./routes/TestCaseMatrix/")
)
const TestContextEditor = lazy(()=>
  import( "./routes/TestContextEditor/")
)
const TestVerdict = lazy(()=>
  import( "./routes/TestVerdict")
)
const BasicTable = lazy(()=>
  import( "./component/BasicTable")
)
const TestVerdictFail = lazy(()=>
  import( "./routes/TestVerdictFail")
)
const DesignView = lazy(()=>
  import(  "./routes/DesignView/ModelExplorer")
)
const ProjectContextEditor = lazy(()=>
  import(  "./routes/ProjectContextEditor")
)
const Dialouge = lazy(()=>
  import("./Dailouge")
)
const FmuLiabrary = lazy(()=>
  import("./routes/FmuLiabrary/FmuLiabrary")
)
  
  function App(props) {
    const [dataArray, setDataArray] = useState([]);
    const [previousRequirements, setPreviousRequirements] = useState([]);
    const [caseId , setCaseId] = useState("");
    const [testObject, setTestObject] = useState("");
    const [description, setDescription] = useState("");
    const [parameterName , setParameterName] = useState("");
    const [parameterUnit , setParameterUnit] = useState("");
    const [expected, setExpected] = useState("");
    const [parameterValue,setParameterValue]=useState("");

    const {user , loginWithRedirect ,isAuthenticated }= useAuth0();
console.log(user)
    const logout = props.logout;

    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/find-all");
        setPreviousRequirements(result.data);
        console.log("Data fetched successfully:", previousRequirements);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
   
    useEffect(() => {
        fetchData();
      }, []);

      useEffect(()=>{
        if(!isAuthenticated){
            loginWithRedirect()
        }
    },[isAuthenticated])

   
  return (
<>
{isAuthenticated &&

( <BrowserRouter>
  <SidebarLayout logout={logout} user = {user} >
    <Suspense fallback={<h1> Loading ....................</h1>}>
    <Routes>
      <Route
        path="/"
        element={
         
          <Dashboard2
          dataArray={dataArray}
          setDataArray={setDataArray}
          previous={previousRequirements}
           
            ></Dashboard2> 
          
          }
      ></Route>
      <Route
        path="/requirements-validation"
        element={<RequirementsValidation />}
      ></Route>
          <Route
            path="/user-requirement-table"
            element={<UserRequirementTable userdata={previousRequirements}></UserRequirementTable>}
          ></Route>
      <Route
        path="/requirements-validation-two"
        element={<RequirementsValidationTwo />}
      ></Route>
      <Route
        path="/traceability-matrix"
        element={<TraceabilityMatrix />}
      ></Route>
      <Route path="/allocation-matrix" element={<AllocationMatrixTable></AllocationMatrixTable>}></Route>
      <Route
        path="/testcase-matrix"
        element={<TestCaseMatrixTable />}
      ></Route>
      <Route
        path="/model-editor"
        element={<ModelEditorTable></ModelEditorTable>}
      ></Route>
      <Route
        path="/testcontext-matrix"
        element={<TestContextEditor caseId={caseId} setCaseId={setCaseId} testObject={testObject} setTestObject={setTestObject} description={description} setDescription={setDescription} parameterName={parameterName} setParameterName={setParameterName} parameterValue={parameterValue} setParameterValue={setParameterValue} parameterUnit={parameterUnit} setParameterUnit={setParameterUnit} expected={expected} setExpected={setExpected}></TestContextEditor>}
      ></Route>
      <Route
        path="/test-verdict"
        element={<TestVerdict caseId={caseId} testObject={testObject} description={description} parameterName={parameterName} parameterValue={parameterValue} parameterUnit1={parameterUnit} expected1={expected} >
      </TestVerdict>}
      ></Route>
      <Route
        path="/test-verdict-fail"
        element={<TestVerdictFail></TestVerdictFail>}
      ></Route>
      <Route
        path="/basic-table"
        element={<BasicTable></BasicTable>}
      ></Route>
      <Route
        path="/design-view"
        element={<DesignView></DesignView>}
      ></Route>
      <Route
        path="/dashboard2"
        element={<Dashboard2></Dashboard2>}
      ></Route>
      <Route
        path="/project-editor"
        element={<ProjectContextEditor></ProjectContextEditor>}
      ></Route>


      <Route path="/Account" element={<RequirementTable />}></Route>
      <Route path="/Support" element={<h1>hello</h1>}></Route>
      <Route path="/modeleditor" element={<FmuBlocks></FmuBlocks>}></Route>
      <Route path="/file" element={<Dialouge></Dialouge>}></Route>
      <Route path="/fmuliabrary" element={<FmuLiabrary></FmuLiabrary>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>

    </Suspense>
  </SidebarLayout>
</BrowserRouter>) 
}
</>
  );
}

export default App;
