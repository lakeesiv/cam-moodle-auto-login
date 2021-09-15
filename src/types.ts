export interface SetPrevPage {
  type: "SetPrevPage";
  url: string;
}

export interface SetEncrpytedPassword {
  type: "SetEncrpytedPassword";
  encryptedPassword: string;
}

export interface Get {
  type: "GetEncryptedPassword";
}

export interface ReturnEncryptedPassword {
  type: "ReturnEncryptedPassword";
  encryptedPassword: string;
}

export interface EncryptedPasswordObject {
  encryptedPassword: string;
}
export type MessageTypes =
  | SetPrevPage
  | SetEncrpytedPassword
  | Get
  | ReturnEncryptedPassword;
