import { texp as pageName } from '../../../support/constants';

describe('Report: Templates Explorer Smoketests', () => {
  beforeEach(() => {
    cy.visitReport(pageName);
  });

  it('Can change lookback', () => {
    cy.getByCy('quick_date_range').click();
    cy.get('.pf-c-select__menu-item').contains('Past year').click();
  });

  it('Can navigate through the pages', () => {
    cy.testNavArrowsFlow('top_pagination', pageName);
    cy.testNavArrowsFlow('pagination_bottom', pageName);
  });

  it('Can change the number of items shown on the list', () => {
    cy.testItemsListFlow('top_pagination', pageName);
    cy.testItemsListFlow('pagination_bottom', pageName);
  });
});
