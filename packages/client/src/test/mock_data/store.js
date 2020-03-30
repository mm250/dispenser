import { TYPE } from "../../products/reducer";

export const STORE = {
  machine: {
    machine_id: "123"
  },
  messaging: {
    message: {
      type: 'error',
      text: 'This is a error'
    }
  },
  products: {
    stock: {
      COFFEE:{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, level: 30 },
      TEA: { id: 'TEA', name: 'Tea', type: TYPE.DRINK, level: 30 },
      MILK: { id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, level: 30 },
      SUGAR: { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON, level: 30 }
    },
    selected: [{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, qty: 1 }]
  },
  temperature: {
    current: { temperature: 30, lastSubmitted: new Date(2011,10,30) },
    history: [{
      temperature: 99.0,
      timestamp: "1585321181"
    }]
  }
}

export const LOW_STOCK_STORE = { ...STORE, products: {
    stock: {
      COFFEE:{ id: 'COFFEE', name: 'Coffee', type: TYPE.DRINK, level: 30 },
      TEA: { id: 'TEA', name: 'Tea', type: TYPE.DRINK, level: 25 },
      MILK: { id: 'MILK', name: 'Milk', type: TYPE.ADD_ON, level: 24 },
      SUGAR: { id: 'SUGAR', name: 'Sugar', type: TYPE.ADD_ON, level: 30 }
    }
  }
}