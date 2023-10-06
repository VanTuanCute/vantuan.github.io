import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
function SanPham(props){ 
    return(
         <div>
            <img className="san-pham"/>
                <img src={props.data.hinh_anh}/>
                <p>{props.data.ten}</p>
                <p>{props.data.gia}</p>
                <button> Chọn mua </button>
        </div> 
    );
        
      
    
}
export default SanPham;