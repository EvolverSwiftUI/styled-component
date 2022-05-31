import './App.css';
import { CustomButton, Heading, OutlineButton } from './styledComponents';

const App = () => (
  // return <h1> App Component</h1>
    <>
        <Heading> App Component</Heading>
        {/* <CustomButton type='button'> Click </CustomButton> */}
        {/* <OutlineButton type='button'> Click </OutlineButton> */}
        {/* we can reuse existing component without creating new one again like below */}
        {/* <CustomButton type='button' color='#ffffff' bgColor='#0070c1'> Click </CustomButton>
        <CustomButton type='button' color='#0070c1' bgColor='#ffffff'> Click </CustomButton> */}

        {/* Conditional Styling */}
        {/* <CustomButton type='button' outline={false}> Click </CustomButton>
        <CustomButton type='button' outline={true}> Click </CustomButton> */}

        {/* make still better code like below */}
        {/* by using boolean attributes like below */}
        <CustomButton type='button' outline> Click </CustomButton>
        <CustomButton type='button'> Click </CustomButton>
    </>
)

export default App;
