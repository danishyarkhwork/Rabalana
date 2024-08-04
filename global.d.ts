// global.d.ts

declare module "cookie" {
  interface CookieSerializeOptions {
    domain?: string;
    encode?: (val: string) => string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: true | false | "lax" | "strict" | "none";
    secure?: boolean;
  }

  function serialize(
    name: string,
    value: string,
    options?: CookieSerializeOptions
  ): string;

  // Add any other exports or functions you need from the 'cookie' module
}
