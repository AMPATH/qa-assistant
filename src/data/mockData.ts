interface Identifier {
  cc_number?: number;
  nhif_number?: number;
  pf_number?: string;
}
interface Person {
  uuid: number;
  name: string;
  gender: string;
  age: number;
  dateofbirth: string;
  orders: string[];
  phoneNumber: number;
  identifiers: Identifier[];
}

const mockData: Person[] = [
  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Female",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Female",
    age: 20,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John doe",
    gender: "Male",
    age: 36,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John doe",
    gender: "Female",
    age: 20,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John white",
    gender: "Male",
    age: 50,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },

  {
    uuid: Math.floor(Math.random() * 100000),
    name: "John doe",
    gender: "Male",
    age: 10,
    dateofbirth: "01/01/1990",
    orders: ["lab test", "blood test", "eye test", "urine test", "lung test"],
    phoneNumber: 72222222,
    identifiers: [
      {
        cc_number: 1234567,
      },
      {
        nhif_number: 12345678,
      },
      {
        pf_number: "123pf2005",
      },
    ],
  },
  
];

export default mockData;
