import { ReactNode, Suspense } from "react";
import Headerbar from "@/components/Headerbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Headerbar />
            </Suspense>

            {children}
        </div>
    );
}