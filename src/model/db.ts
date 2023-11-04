import Dexie, { Table } from "dexie";

export interface User {
  name: string;
  photo: Blob | null;
}

export interface Wallet {
  name: string;
  type: string;
  amount: number;
}

export interface ExpenseTransaction {
  id: number;
  timestamp: Date;
  amount: number;
  exchanger: string | null; // Person, UPI ID, BANK ACCOUNT One Liner Details, Mobile Number
  exchangeType: string; // Credit, Debit, Transfer
  transferFrom: string | null; // WALLET ID (Ex. Cash Wallet, Bank Wallet)
  transferTo: string | null; // WALLET ID (Ex. Cash Wallet, Bank Wallet)
  category: string;
  subcategory: string | null;
  autoCategoryMap: boolean | true; // For marchant to Category or Sub Category Mapping
}

export interface Preferences {
  id: number;
  currency: string;

  // Application stuff
  theme: string;
}

export interface CategoryMap {
  id: number;
  category: string;
  exchanger: string;
  subcategory: string | null;
  conditionType: string; // CONTAINS, BEGINSWITH, ENDSWITH, EQUALSTO
  caseSensitiveCheck: boolean | true;
}

export interface ImportStatementConfig {
  name: string;
  detection: [
    {
      rank: number;
      type: string; // BYFILENAME, BYCOLUMNNAME, BYSHEETNAME, BY ROWNAME
      conditionType: string; // CONTAINS, BEGINSWITH, ENDSWITH, EQUALSTO
    },
  ];
  // DAY 3
  detectionCondition: string | "AND"; // AND, OR, 1 AND 2 OR 3
  transactionMap: [
    {
      columnName: string; // Excel column name
      mapTo: string; // Map to fields of Transaction row (Ex. Amount, sender or reciever)
    },
  ];
}

export class MySubClassedDexie extends Dexie {
  user!: Table<User>;
  wallets!: Table<Wallet>;
  expenseTransaction!: Table<ExpenseTransaction>;
  preferences!: Table<Preferences>;
  categoryMap!: Table<CategoryMap>;
  importStatementConfig!: Table<ImportStatementConfig>;

  constructor() {
    super("sontosh");
    this.version(1).stores({
      wallets: "&name",
      user: "&name",
      expenseTransaction:
        "++id, timestamp, exchangeType, category, subcategory",
      preferences: "id",
      categoryMap: "++id",
      importStatementConfig: "&name",
    });
  }
}

const db = new MySubClassedDexie();

export default db;
