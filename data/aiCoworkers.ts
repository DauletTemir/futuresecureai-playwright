export const aiCoworkerNames = [
  'Tate AI',
  'Astra AI',
  'Bob AI',
  'Billie AI',
  'Will AI',
  'Ari AI',
  'Emma AI',
  'Blake AI',
  'Taj AI',
  'Amy AI',
  'Leo AI',
  'Sunny AI',
  'Jack AI',
] as const;

export type AiCoworkerName = (typeof aiCoworkerNames)[number];
