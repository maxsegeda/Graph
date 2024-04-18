import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers as scalarResolvers } from "graphql-scalars";

const phoneHistory = [
  {
    _id: 1,
    phone: "+380509331677",
    created: Date.now(),
    name: "Max",
  },

  {
    _id: 2,
    phone: "+380989524769",
    created: Date.now(),
    name: "Vany",
  },
  {
    _id: 3,
    phone: "+380504678799",
    created: Date.now(),
    name: "Sasha",
  },
  {
    _id: 4,
    phone: "+380500988778",
    created: Date.now(),
    name: "Anton",
  },
];

const ourResolvers = {
  Query: {
    status: () => "ok",
    callsHistory: () => {
      return {};
    },
  },
  CallsHistoryQuery: {
    history: (parent, { phone }, contex, info) => {
      console.log("phone number", phone);
      return phoneHistory;
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
