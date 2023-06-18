import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  //queary string 처리
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
