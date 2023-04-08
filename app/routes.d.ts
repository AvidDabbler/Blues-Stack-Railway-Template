declare module "routes-gen" {
  export type RouteParams = {
    "/healthcheck": Record<string, never>;
    "/": Record<string, never>;
    "/logout": Record<string, never>;
    "/login": Record<string, never>;
    "/notes": Record<string, never>;
    "/notes/:noteId": { "noteId": string };
    "/notes/new": Record<string, never>;
    "/join": Record<string, never>;
  };

  export function route<
    T extends
      | ["/healthcheck"]
      | ["/"]
      | ["/logout"]
      | ["/login"]
      | ["/notes"]
      | ["/notes/:noteId", RouteParams["/notes/:noteId"]]
      | ["/notes/new"]
      | ["/join"]
  >(...args: T): typeof args[0];
}
