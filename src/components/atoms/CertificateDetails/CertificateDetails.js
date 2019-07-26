import { html } from '@polymer/lit-element';
import CSS from './_components.certificate-details-css';

const isValidLink = (link) => link.indexOf(' ') === -1;

function renderListDetail ({ title, value, isDisplayColumn, renderInline = false }) {
  const classes = [
    'buv-c-certificate-details__group',
    isDisplayColumn ? '' : 'buv-c-certificate-details__group--row'
  ].join(' ');

  const ddClasses = [
    'buv-c-certificate-details__value',
    renderInline ? 'buv-c-certificate-details--inline' : ''
  ].join(' ');

  return html`<div class$='${classes}'>
      <dt class='buv-c-certificate-details__title  buv-o-text-11'>${title}</dt>
      <dd class$='${ddClasses}'>${value}</dd>
    </div>`;
}

function renderTransactionId ({ title, value, transactionLink, isDisplayColumn }) {
  if (isValidLink(transactionLink)) {
    if (isDisplayColumn) {
      return renderListDetail({ title, value, isDisplayColumn, renderInline: true });
    }

    return html`
      <div class='buv-c-certificate-details__standalone  buv-o-text-11'>
        <dt class='buv-c-certificate-details--inline'>${title}</dt>
        <dd class='buv-c-certificate-details--inline'>${value}</dd>
      </div>`;
  } else {
    return html`<span>No transaction ID</span>`;
  }
}

export default function CertificateDetails ({
  recipientName,
  issuedOn,
  issueDate,
  issuerName,
  transactionLink,
  transactionId,
  direction
}) {
  const details = [
    {
      title: 'Recipient',
      value: recipientName
    },
    {
      title: 'Issue Date',
      value: html`<time datetime$='${issuedOn}'>${issueDate}</time>`
    },
    {
      title: 'Issuer',
      value: issuerName
    }
  ];

  const isDisplayColumn = direction === 'column';
  const definitionListDetails = details.map(detail => renderListDetail({ ...detail, isDisplayColumn }));

  const classes = [
    'buv-c-certificate-details',
    'buv-o-text-12',
    isDisplayColumn ? 'buv-c-certificate-details--column' : ''
  ].join(' ');

  return html`
    ${CSS}
    <dl class$='${classes}'>
        ${definitionListDetails}
        ${renderTransactionId({ transactionLink, title: 'Transaction ID:', value: transactionId, isDisplayColumn })}
    </dl>
  `;
}
