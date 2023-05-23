import React from 'react';

const ProfileTextBox = () => {
  return (
    <div className="border-2 p-3 flex rounded">
      <div className="pr-3">👍</div>
      <div className="">
        <div>
          안녕하세요. 클린한 프론트엔드 개발자
          <span className="font-bold"> 이문삼</span>
          입니다.
        </div>
        <br />
        <div>
          클린코드와 함께 성장에 관심이 많습니다. <br></br>주어진 시간과
          생산성을 고려하여 프로젝트에 필요한 클린코드가 무엇인지 고민하고
          작성하는 습관을 만들어 가고 있습니다.
        </div>
      </div>
    </div>
  );
};

export default ProfileTextBox;
