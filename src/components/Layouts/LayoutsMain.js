import DarkTheme from "./DarkTheme";
import WhiteTheme from "./WhiteTheme";
import StaticNavigation from "./StaticNavigation";

function LayoutsMain (){

  return(
    <div className='Defulet_Container' style={{padding: '2.5rem'}}>
    <DarkTheme />
    <WhiteTheme />
    <StaticNavigation />
    </div>
  )
}

export default LayoutsMain;