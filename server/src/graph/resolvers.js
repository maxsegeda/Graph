import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers as scalarResolvers } from "graphql-scalars";

const phoneHistory = [
  {
    _id: 1,
    phone: "+380507775566",
    name: "Max",
    created: Date.now(),
  },

  {
    _id: 2,
    phone: "+380508885566",
    name: "Vany",
    created: Date.now(),
  },
  {
    _id: 3,
    phone: "+380509995566",
    name: "Sasha",
    created: Date.now(),
  },
  {
    _id: 4,
    phone: "+380509995566",
    name: "Anton",
    created: Date.now(),
  },
];

const ourResolvers = {
  CallsHistoryQuery: {
    history: (parent, { phone }, contex, info) => {
      console.log("phone number", phone);
      return phoneHistory.filter((v) => v.phone == phone);
    },
    status: () => {
      return {
        message: "API ready",
        code: 200,
        status: "ok",
      };
    },
  },
};

export const resolvers = mergeResolvers([ourResolvers, scalarResolvers]);
