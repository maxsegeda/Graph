import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

let schema = `
scalar PhoneNumber
scalar DateTime
cd
type Query {
    status: String
    callsHistory: CallsHistoryQuery
}

type CallsHistoryQuery {
    history(phone: PhoneNumber): [PhoneEvent]
    status: StatusResponse
}

type PhoneEvent {
    _id: ID!
    "Дата створення"
    created: DateTime
    name: String
    "Номер телефону"
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
