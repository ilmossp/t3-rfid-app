import Head from "next/head";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AppProps } from "next/app";
import { DashboardLayout } from "~/components/global/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Salvia-kit Dashboard V4</title>
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
