describe('💙 썸네일 생성기 테스트', () => {
  it('✨ 썸네일 생성기 페이지에 진입합니다.', () => {
    cy.visit('../../index.html');
  });

  it('✨ 썸네일 미리보기 초기 화면에 `제목을 입력해주세요` 문구가 나타납니다.', () => {
    cy.visit('../../index.html');
    cy.get('#title').contains('제목을 입력해주세요');
  });
});
