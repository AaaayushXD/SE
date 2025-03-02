// import { useEffect, useState } from "react";

// export const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const [role, setRole] = useState<string | null>(null);
//   const path = usePathname();

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     setRole(storedRole);
//     if (!role) return;

//     const isAuthorized = authorizeUserRole(role, path);
//     if (!isAuthorized) {
//       router.push("/sign-up");
//     }
//   }, [path, role, router]);
//   return <>{children}</>;
// };
