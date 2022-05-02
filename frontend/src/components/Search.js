
import "../css/Search.css";
export default function Serarch({ onClick, onChange }) {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded"
          placeholder="검색"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
         검색
        </button>
        <button type="button" id="image_upload" onClick={onClick}>
         이미지 업로드
        </button>
        <button type="button" id="camera" onClick={onClick}>
         촬영하여 검색
        </button>
        </div>
    </>
  );
}