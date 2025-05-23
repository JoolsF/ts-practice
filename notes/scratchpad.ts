const a = {
  id: { S: "PAYMENT_ID" },
  entityType: { S: "PAYMENT" },
  sortKey: { S: "PAYMENT#SERVICE#EXTERNAL_ID#OTHER" },
  accountId: { S: "ACCOUNT_ID" },
  paymentDisplayIdentification: {
    M: {
      value: { S: "ID_VALUE" },
      description: { S: "ID_DESC" },
    }
  }
}

console.log(a.sortKey?.S!.startsWith('PAYMENT'))