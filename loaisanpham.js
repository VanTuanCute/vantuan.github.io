import SanPham from "./sanpham";
function LoaiSanPham(props){
    const listSanPhams=props.data.ds_san_pham.map(function(item){
      return (
        <SanPham data={item}/>
      );
    
});
return (
    <>
    <h1 className="ten-loai-san-pham">{props.data.ten}</h1>
    <div>{listSanPhams}</div>
    </>
);
}
export default LoaiSanPham;