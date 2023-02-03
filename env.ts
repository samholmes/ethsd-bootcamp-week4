import { makeConfig } from "cleaner-config";
import { asObject, asOptional, asString } from "cleaners";

const asEnv = asObject({
  privateKey: asOptional(asString, '<your private key>'),
  goerliUrl: asOptional(asString, '<your alchemy goerli URL>')
})

export const env = makeConfig(asEnv, '.env.json')