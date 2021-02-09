describe('로컬 서버 접속', () => {
  it('정상적으로 로컬 서버 페이지 열림', () => {
    cy.visit('/');
    cy.contains('window-sync');
  });
});

describe('팝업 페이지 열기', () => {
  it('팝업 열기 버튼 클릭', () => {
    cy.contains('열기').click();
  });

  it('팝업 페이지 열린 후 로드 완료 확인', () => {
    cy.window().then(() => {
      cy.get('.message').contains('열림');
    });
  });
});

describe('팝업 페이지에 메시지 보내고 받기', () => {
  it('팝업으로 데이터 보내기 버튼 클릭', () => {
    cy.contains('데이터 보내기').click();
  });

  it('팝업 페이지 열린 후 메시지 보내고 받음 확인', () => {
    cy.window().then(() => {
      cy.get('.message').contains('메시지 받음');
    });
  });
});

describe('팝업 페이지 닫기', () => {
  it('팝업 닫기 버튼 클릭', () => {
    cy.contains('닫기').click();
  });

  it('열려있는 팝업 페이지 닫힘 확인', () => {
    cy.get('.message').contains('닫힘');
  });
});
