import { ClerkProvider } from "@clerk/nextjs";
import { deDE } from "@clerk/localizations";
import { ReactElement } from "react";

const PlatformLayout = ({
    children,
    pageProps
}: {
    children: ReactElement;
    pageProps: any; // Verwende any oder definiere ein spezifischeres Typ-Objekt für deine Page Props
}) => {
    return (
        <ClerkProvider localization={deDE} {...pageProps}>
            {children}
        </ClerkProvider>
    );
};

export default PlatformLayout;
