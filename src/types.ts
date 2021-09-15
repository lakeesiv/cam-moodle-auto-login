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

export type MessageTypes = SetPrevPage | SetEncrpytedPassword | Get;
