const GatewayCodesEn = {
    // 10000 - Error codes
    'CH21': `<ul>
                <li>Bank identifier code specified in the message has an incorrect format</li>
                <li>Bank identifier is invalid or missing</li>
                <li>Branch code is invalid or missing</li>
                <li>Creditor Agent BIC and IBAN Mismatch</li>
                <li>Error occurred on %FIELD_NAME_1%</li>
                <li>Transaction is not unique</li>
             </ul>`,
    'RC02': `<ul>
                <li>Bank identifier code specified in the message has an incorrect format</li>
                <li>Bank identifier is invalid or missing</li>
                <li>Branch code is invalid or missing</li>
                <li>Creditor Agent BIC and IBAN Mismatch</li>
                <li>Error occurred on %FIELD_NAME_1%</li>
                <li>Transaction is not unique</li>
             </ul>`,
    'DT01': 'Error occurred on %FIELD_NAME_1%',
    'AM14': 'Error occurred on %FIELD_NAME_1% Transaction amount exceeds limits agreed between bank and client.',
    'AM06': 'Error occurred on %FIELD_NAME_1%',
    'CH16': `<ul>
                <li>Content Remittance information/structured includes either alphanumeric or greater than 16 digits</li>
                <li>Error occurred on %FIELD_NAME_1%</li>
                <li>Invalid country code</li>
                <li>QR Code Expired</li>
                <li>QR Status Inactive</li>
             </ul>`,
    'BE15': 'Error occurred on %FIELD_NAME_1% Proxy ID Not Active',
    'NARR': 'Error occurred on %FIELD_NAME_1%',
    // 11000 - Error codes
    'AB01': 'Clearing process aborted due to timeout',
    'AB02': 'Clearing process aborted due to a fatal error',
    'AB03': 'Settlement aborted due to timeout',
    'AB05': 'Transaction stopped due to timeout at the Creditor Agent',
    'AB06': 'Transaction stopped due to timeout at the Instructed Agent',
    'AB07': 'Agent of message is not online',
    'AB08': 'Creditor Agent is not online',
    'AB09': 'Transaction stopped due to error at the Creditor Agent',
    'AB10': 'Clearing process aborted due to error at the Intermediary PSP or CSM (the Instructed Agent).',
    'AC04': 'Account number specified has been closed on the bank books',
    'AC05': 'Debtor account number closed',
    'AC06': 'Account specified is blocked, prohibiting posting of transactions against it',
    'AC07': 'Creditor account number closed',
    'AG01': 'Transaction forbidden on this type of account (formerly No Agreement)',
    'AG02': 'Bank Operation code specified in the message is not valid for receiver',
    'AG03': 'Transaction type not supported or authorized on this account',
    'AG07': 'Debtor account cannot be debited for a generic reason',
    'AG09': 'Original payment never received',
    'AG10': 'Agent of message is suspended from the Real Time Payment system',
    'AG11': 'Beneficiary PSP of message is suspended from the Real Time Payment system',
    'AG12': 'Pre-Authorization Validation Failed',
    'AM03': 'Specified message amount is an non processable currency outside of existing agreement',
    'AM04': 'Amount of funds available to cover specified message amount is insufficient',
    'AM05': 'Duplication',
    'AM20': 'Number of transactions at the Payment Information level is invalid',
    'ARDT': 'Already Returned Cancellation not accepted as the transaction has already been returned.',
    'BE01': 'Identification of end customer is not consistent with associated account number.',
    'BE06': 'End customer specified is not known at Sort or National Bank Code or does no longer exist in books',
    'BE07': 'Specification of debtors address, which is required for payment, is missing/not correct',
    'BE10': 'Debtor country code is missing or invalid',
    'BE11': 'Creditor country code is missing or invalid',
    'BE12': 'Country code of residence is missing or invalid',
    'CH09': 'Mandate changes are not allowed',
    'CH11': 'Value in Creditor Identifier is incorrect',
    'CNOR': 'Creditor bank is not registered under this BIC in the CSM',
    'CUST': 'Cancellation requested by the Debtor',
    'DNOR': 'Debtor bank is not registered under this BIC in the CSM',
    'DS02': 'Order Cancelled',
    'DS04': 'Order Rejected',
    'DS09': 'The decryption of the file was not successful',
    'DS0B': 'Data signature for the format is not available or invalid',
    'DS0D': 'Signature Certificate Not Valid',
    'DS0G': 'Signer is not allowed to sign this operation type.',
    'DS0H': 'Signer is not allowed to sign for this account',
    'DS24': 'Waiting Time Expired',
    'EC46': 'Sanctions Reject',
    'ED05': 'Settlement of the transaction has failed',
    'ED06': 'Interbank settlement system not available',
    'FF01': 'File Format incomplete or invalid',
    'FF02': 'Syntax error reason is provided as narrative information in the additional reason information',
    'FF03': 'Payment Type Information is missing or invalid',
    'FF10': 'File or transaction cannot be processed due to technical issues at the bank side',
    'FF11': 'Clearing request rejected due it being subject to an abort operation',
    'FOCR': 'Following Cancellation Request',
    'FR01': 'Returned as a result of fraud',
    'FRAD': 'Fraudulent Original SCT Inst Transaction',
    'FRAUD01': 'The creditor account is not eligible for Real Time Payments. Your payment could not be processed.',
    'FRTR': 'Final Response - Repeat attempt to prior non-response.',
    'IN06': 'The creditor ABA is not eligible for Real Time Payments. Your payment could not be processed.',
    'IN12': 'The designated channel is not eligible for Real Time Payments. Your payment could not be processed.',
    'IN14': 'The payment has fields exceeding character limits. Please make the necessary corrections and try again.',
    'LEGL': 'Legal Decision',
    'MD01': 'No Mandate',
    'MD02': 'Mandate related information data required by the scheme is missing',
    'MD06': 'Return of funds requested by end customer',
    'MD07': 'End customer is deceased',
    'NOAS': 'No response from Beneficiary',
    'NOAT': 'TCH Message - Receiving Customer Account does not support/accept this message type',
    'NOOR': 'Initial SCT Inst Transaction never received',
    'PC04': 'Lost/stolen card',
    'PC05': 'Rejected',
    'PC43': 'Lost/stolen card',
    'PC57': 'Tran Not Allowed For Cardholder',
    'PC61': 'Exceeds withdrawal limits',
    'PC62': 'Restricted Card',
    'PC65': 'Activity count limit exceeded',
    'PR05': 'Duplicate Proxy in Bank',
    'PR06': 'Duplicate Proxy in another Bank',
    'PR07': 'Proxy already registered/ transferred',
    'PR08': 'Proxy already deregistered',
    'PR09': 'Proxy already suspended',
    'PR10': 'Proxy request timeout',
    'PR11': 'Proxy Other rejection reason',
    'RC09': 'Debtor ClearingSystemMember identifier is invalid or missing',
    'RC10': 'Creditor ClearingSystemMember identifier is invalid or missing',
    'RF01': 'Transaction reference is not unique within the message',
    'RR04': 'Regulatory Reason',
    'RR05': 'Regulatory or Central Bank Reporting information missing, incomplete or invalid',
    'RR10': 'Character set supplied not valid for the country and payment type.',
    'SL03': 'Due to a specific service offered by the clearing system',
    'TA01': 'The transmission of the file was not successful, it had to be aborted (for technical reasons)',
    'TECH': 'Technical Problem',
    'TK01': 'Invalid Token',
    'TK02': 'Sender Token Not Found',
    'TK03': 'Receiver Token Not Found',
    'TK04': 'Token Expired',
    'TK05': 'Token Found with Counterparty Mismatch',
    'TK06': 'Token Found with Value Limit Rule Violation',
    'TK07': 'Single Use Token Already Used',
    'TK08': 'Token Suspended',
    'TM01': 'Invalid Cut Off Time',
    'TXNLMT01': 'Transaction Aggregate limit failure',
    'UPAY': 'Undue Payment - Payment has been made through another payment channel (for Request for Payment expiry)',
    'WIAM': 'Wrong Amount with Indemnity',
    'WICT': 'With Indemnity Customer',
    'WIDP': 'With Indemnity Duplicate',
    'WIFD': 'With Indemnity Fraud',
    'WIFT': 'Final Response with indemnity',
    'WITH': 'With Indemnity Technical',
    'XT04': 'Insufficient liquidity for processing the transaction on the System.',
    'XT06': 'Invalid AccptTime, Rejected by the CSM to Originator Bank upon exceeding tolerance period for the Acceptance Date&Time',
    'XT75': 'Invalid original transaction status, action not required',
    'XT79': 'The Debtor Agent is not allowed to send SCT Inst transactions (pacs.008) and consequently to send Payment Status Request (pacs.028) and Recalls (camt.056). It is also not allowed to receive NRR and PRR.',
    'XT80': 'The Creditor Agent is not allowed to receive SCT Inst transactions (pacs.008) and consequently to receive Payment Status request (pacs.028) and Recalls (camt.056). It is also not allowed to send NRR and PRR.(The a admission profile "Debtor Only" currently is not implemented )',
    'XT81': 'Field not Permitted in SCT Inst Service',
    'XT83': 'Sender and/or Receiver Participants not configured for CUG/AOS usage',
    'XT87': 'Inconsistent Instructing Agent',
    '1100': 'The payment could not be processed at this time due to an unexpected error, please try again later',
    '9909': 'TCH Message - Central Switch (RTP) system malfunction',
    '9910': 'TCH Message - Instructed Agent signed-off',
    '9912': 'TCH Message - Recipient connection is not available',
    '9934': 'TCH Message - Instructing Agent signed-off',
    '9946': 'TCH Message - Instructing Agent suspended',
    '9947': 'TCH Message - Instructed Agent suspended',
    '9948': 'TCH Message - Central Switch (RTP) service is suspended',
    '9952': 'TCH Message - Mapping Incompatibility between Version 1 and 2',
    '9953': 'TCH Message - Missing code "FULL" (full invoice amount)',
    '9954': 'TCH Message - Missing Instructions for Creditor Agent Code in Zelle RFP',
    '9956': 'TCH Message - Instructing Agent Funding Account suspended',
    '9957': 'TCH Message - Instructed Agent Funding Account suspended',
    '9964': 'TCH Message - Invalid Participant Identification',
    // 13000 - Error codes
    'NARR': `<ul>
                <li>Amount received is not the amount agreed or expected</li>
                <li>Uncategorized failure</li>
                <li>Unknown BIC in routing table</li>
             </ul>`
}