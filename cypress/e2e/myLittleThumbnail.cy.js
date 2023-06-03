const contains = (targetEl, text) => {
  cy.get(targetEl).contains(text);
};

describe('💙 썸네일 생성기 테스트', () => {
  beforeEach(() => {
    cy.visit('../../index.html');
  });

  it('✨ 썸네일 미리보기 초기 화면에 `제목을 입력해주세요` 문구가 나타납니다.', () => {
    contains('[data-test="title"]', '제목을 입력해주세요');
  });

  it('✨ 썸네일 미리보기 초기 화면에 `내용을 입력해주세요` 문구가 나타납니다.', () => {
    contains('[data-test="content"]', '내용을 입력해주세요');
  });

  it('✨ 제목 인풋 박스에 사용자가 "제목입니당"을 입력하면 썸네일 미리보기 제목에 "제목입니당"이 표시된다.', () => {
    cy.get('[data-test="title-input"]').type('제목입니당');
    cy.get('[data-test="title"]').should('have.text', '제목입니당');
  });

  xit(
    '✨ 내용 인풋 박스에 사용자가 "내용이네용"을 입력하면 썸네일 미리보기 내용에 "내용이네용"이 표시된다.'
  );
});
