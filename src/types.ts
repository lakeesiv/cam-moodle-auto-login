export interface SetPrevPage {
  type: "SetPrevPage";
  url: string;
}

export interface SetEncrpytedPassword {
  type: "SetEncrpytedPassword";
  encryptedPassword: string;
}

export type MessageTypes = SetPrevPage | SetEncrpytedPassword;
