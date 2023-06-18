import { useState } from "react";
const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];
const ControlMenu = ({ value, onChange, optionList }) => {
  return <select></select>;
};
const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");
  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
