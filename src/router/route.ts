export type Routes = {
  [path: string]: {
    requiresAuth?: boolean;
    roles?: Array<string>;
    isAccessibleToPublicOnly?: boolean;
  };
};

export const routes: Routes = {
  "/": {
    requiresAuth: false,
    isAccessibleToPublicOnly: true,
  },
  "/sign-up": { requiresAuth: false, isAccessibleToPublicOnly: true },
  "/login": { requiresAuth: false, isAccessibleToPublicOnly: true },
  "/courses": { requiresAuth: false, isAccessibleToPublicOnly: true },
  "/course/:id": { requiresAuth: false, isAccessibleToPublicOnly: true },
  "/course/:id/lectures": { requiresAuth: true, roles: ["admin", "user"] },
};
