import { urls } from "../constants/selectors";

describe('Webhook Publish Test', () => {
  it('Should publish an event to Webhook.site', () => {
    // This test case imitates the subscribe functionality.
    cy.request({
      method: 'POST',
      url: urls.webhookUrl,
      body: {
        eventType: 'order_created',
        orderId: 1,
        status: 'pending'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    // The code below shows if the request was successful on the UI.
    // It's better to do this using a token, but it is available in the paid version.
    cy.visit(urls.webhookUrl);
    cy.get('a[href]').contains('Change response in Webhook.site')
      .click();
  });
});
