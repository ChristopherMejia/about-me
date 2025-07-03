import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Presentation" },
  ];
}

export default function Home() {
  return <Welcome />;
}
