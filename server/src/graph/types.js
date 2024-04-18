import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

let schema = `
scalar PhoneNumber
scalar DateTime

type Query {
    status: String
    callsHistory: CallsHistoryQuery
}

type CallsHistoryQuery {
    history: [PhoneEvent]
    status: StatusResponse
}

type PhoneEvent {
    _id: ID!
    created: DateTime
    name: String
    phone: PhoneNumber
}

type StatusResponse {
    code: Int
    message: String
    status:  String
}
`;

const types = [schema, scalarTypeDefs];

export const typeDefs = mergeTypeDefs(types);
