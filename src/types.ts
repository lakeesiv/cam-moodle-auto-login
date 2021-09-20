import {
  UseToastOptions,
  ToastId,
  CloseAllToastsOptions,
} from "@chakra-ui/react";

export interface SetPrevPage {
  type: "SetPrevPage";
  url: string;
}

export interface loginDetails {
  username: string;
  password: string;
}

export interface encryptedLoginDetails {
  username: string;
  encryptedPassword: string;
}

export interface SetEncrpytedLoginDetails {
  type: "SetEncrpytedLoginDetails";
  encryptedLoginDetails: encryptedLoginDetails;
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

export interface EncryptedLoginDetailsObject {
  encryptedLoginDetails: encryptedLoginDetails;
}

export interface Toast {
  (options?: UseToastOptions | undefined): string | number | undefined;
  close: (id: ToastId) => void;
  closeAll: (options?: CloseAllToastsOptions | undefined) => void;
}

export type MessageTypes =
  | SetPrevPage
  | SetEncrpytedPassword
  | Get
  | ReturnEncryptedPassword
  | SetEncrpytedLoginDetails;
