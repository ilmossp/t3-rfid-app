
import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AppProps } from "next/app";
import { DashboardLayout } from "~/components/global/Layout";

export function MyAppLayout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Head>
                <title>{title}</title>
            </Head>
            <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
    );
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MyAppLayout title="Salvia-kit Dashboard V4">
            <Component {...pageProps} />
        </MyAppLayout>
    );
}

export default MyApp;
