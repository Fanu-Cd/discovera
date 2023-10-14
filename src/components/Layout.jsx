import { Outlet } from "react-router-dom";
import {SearchOutlined} from '@ant-design/icons'
export default function Layout() {
    return (
      <>
      <div>
        <div className="mt-2 mx-auto d-flex justify-content-between align-items-center" style={{width:"7rem",height:"5rem"}}>
          <SearchOutlined className="pb-1" />
          <h5 style={{color:"brown"}}>Discovera</h5>
        </div>
        <div className="mx-auto" style={{width:"15rem"}}>
          <p className="m-0 text-center">Search</p>
        </div>
      </div>
      <hr style={{width:"20rem"}} className="mx-auto" />
        <Outlet />
      </>
    );
  }