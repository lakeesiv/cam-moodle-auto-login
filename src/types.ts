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
  usePasswordManagerAutofill?: boolean;
}

export interface encryptedLoginDetails {
  username: string;
  encryptedPassword: string;
  usePasswordManagerAutofill?: boolean;
}

export interface SetEncrpytedLoginDetails {
  type: "SetEncrpytedLoginDetails";
  encryptedLoginDetails: encryptedLoginDetails;
}

export interface Get {
  type:
    | "GetEncrpytedLoginDetails"
    | "GetLoginDetailsPresent"
    | "GetUsePasswordManagerAutofill";
}

export interface RemoveData {
  type: "RemoveData";
}

export interface ReturnEncryptedLoginDetails {
  type: "ReturnEncryptedLoginDetails";
  encryptedLoginDetails: encryptedLoginDetails;
}

export interface EncryptedLoginDetailsObject {
  encryptedLoginDetails: encryptedLoginDetails;
}

export interface SetUsePasswordManagerAutofill {
  type: "SetUsePasswordManagerAutofill";
  usePasswordManagerAutofill: boolean;
}

export interface Toast {
  (options?: UseToastOptions | undefined): string | number | undefined;
  close: (id: ToastId) => void;
  closeAll: (options?: CloseAllToastsOptions | undefined) => void;
}

export type MessageTypes =
  | SetPrevPage
  | Get
  | SetEncrpytedLoginDetails
  | ReturnEncryptedLoginDetails
  | RemoveData
  | SetUsePasswordManagerAutofill;
